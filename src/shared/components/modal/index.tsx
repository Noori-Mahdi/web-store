'use client';

import { Info, ShieldAlert, ShieldX, X } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useEffect, useRef, useState } from 'react';
import { twMerge } from 'tailwind-merge';

export type TModalProps = {
  type?: null | 'warning' | 'info' | 'error' | 'map';
  isOpen?: boolean;
  onClose?: () => void;
  children: React.ReactNode;
  modalClassName?: string;
  classNameBox?: string;
  size?: string;
  label?: string;
  force?: boolean;
};

const Modal = ({
  type = null,
  isOpen = false,
  onClose,
  modalClassName,
  classNameBox,
  children,
  size,
  label,
  force = false,
}: TModalProps) => {
  const [show, setShow] = useState(isOpen);

  const t = useTranslations();

  const modalRef = useRef<HTMLDivElement>(null);

  const closeModalHandler = () => {
    onClose?.();
    setShow(false);
  };

  useEffect(() => {
    setShow(isOpen);
  }, [isOpen]);

  useEffect(() => {
    if (!force) {
      function handleClickOutside(event: MouseEvent) {
        if (
          modalRef.current &&
          !modalRef.current.contains(event.target as Node)
        ) {
          onClose && onClose();
          setShow(false);
        }
      }

      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }
  }, []);

  if (!show) return null;
  return (
    <div
      className={twMerge(
        'fixed inset-0 z-40 w-full flex justify-center items-center',
        modalClassName,
      )}
    >
      <div className="absolute inset-0 backdrop-blur-xs bg-stone-50/10"></div>
      <div
        className={twMerge(
          `p-5 rounded shadow-lg overflow-y-auto  max-h-screen m-2 bg-linear-to-tr from-neutral-900 via-neutral-700 to-neutral-800  relative drawer is-open`,
          size ? size : 'w-96',
          classNameBox,
        )}
        ref={modalRef}
      >
        {type !== 'map' && (
          <div
            className={twMerge(
              'flex justify-end items-start text-lg mb-5',
              (type != null || label) && 'justify-between',
            )}
          >
            <div className="flex gap-2 items-center">
              {type === 'warning' ? (
                <ShieldAlert className="text-yellow-500" />
              ) : type === 'info' ? (
                <Info className="text-sky-600" />
              ) : type === 'error' ? (
                <ShieldX className="text-error-300" />
              ) : null}
              {label ? (
                <span className="capitalize tracking-wide font-semibold">
                  {t(label)}
                </span>
              ) : (
                <span className="capitalize tracking-wide font-semibold">
                  {type}
                </span>
              )}
            </div>
            {!force && (
              <X
                size={16}
                className=" cursor-pointer text-2xl hover:text-error-400 "
                onClick={closeModalHandler}
              />
            )}
          </div>
        )}

        {children}
      </div>
    </div>
  );
};

export default Modal;
