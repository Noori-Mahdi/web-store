import Image from 'next/image';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

type TLogoProps = {
  lable?: string;
  width?: number;
  height?: number;
  isLink?: string;
  logoClassName?: string;
  labelClassName?: string;
  mainClassName?: string;
};

const Logo = ({
  lable,
  width = 50,
  height = 50,
  isLink,
  logoClassName,
  labelClassName,
  mainClassName,
}: TLogoProps) => {
  return (
    <Link
      href={isLink ?? '#'}
      className={twMerge(
        'flex gap-3 items-center font-extrabold text-xl',
        mainClassName,
      )}
    >
      {lable && <span className={twMerge(labelClassName)}>{lable}</span>}
      <Image
        src={'/image/logo.png'}
        alt="logo"
        width={width}
        height={height}
        className={logoClassName}
      />
    </Link>
  );
};

export default Logo;
