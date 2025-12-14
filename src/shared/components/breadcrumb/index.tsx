'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
  BreadcrumbShadcn,
} from '../shadcn';

const Breadcrumb = () => {
  const pathname = usePathname();

  const pathSegments = pathname.split('/').filter(Boolean);

  const buildHref = (index: number) => {
    return '/' + pathSegments.slice(0, index + 1).join('/');
  };

  return (
    <BreadcrumbShadcn>
        <BreadcrumbList>
          {pathSegments.map((segment, index) => {
            const href = buildHref(index);
            const isLast = index === pathSegments.length - 1;
            const label =
              segment.charAt(0).toUpperCase() +
              segment.slice(1).replace(/-/g, ' ');

            return (
              <div key={href} className="flex items-center">
                <BreadcrumbItem>
                  {isLast ? (
                    <span className="font-semibold text-blue-500 select-none">
                      {label}
                    </span>
                  ) : (
                    <BreadcrumbLink asChild>
                      <Link href={href}>{label}</Link>
                    </BreadcrumbLink>
                  )}
                </BreadcrumbItem>

                {!isLast && <BreadcrumbSeparator />}
              </div>
            );
          })}
        </BreadcrumbList>
    </BreadcrumbShadcn>
  );
};

export default Breadcrumb;
