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
  width = 60,
  height = 60,
  isLink,
  logoClassName,
  labelClassName,
  mainClassName,
}: TLogoProps) => {
  return (
    <Link href={isLink ?? '#'} className={twMerge('flex', mainClassName)}>
      {lable && (
        <span className={twMerge('text-lg font-bold', labelClassName)}>
          {lable}
        </span>
      )}
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
