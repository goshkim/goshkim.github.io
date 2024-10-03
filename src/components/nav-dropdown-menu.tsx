import { EllipsisVertical } from 'lucide-react';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Link } from '@/components/ui/link';

const navItems = [
  { href: '/', label: '홈' },
  { href: '/tags', label: '태그 목록' },
  { href: 'https://github.com/goshkim', label: 'GitHub', isExternal: true },
];

const NavDropdownMenu = () => {
  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger
        aria-label="네비게이션"
        className="block rounded-full bg-transparent p-2.5 outline-none hover:bg-transparent/5 lg:hidden dark:hover:bg-default-50/5"
      >
        <EllipsisVertical strokeWidth="2.5" className="size-5" />
        <span className="sr-only">네비게이션</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="block min-w-56 lg:hidden">
        {navItems.map(({ href, label, isExternal }) => (
          <DropdownMenuItem key={href} asChild>
            <Link
              href={href}
              underline="none"
              isExternal={isExternal}
              className="w-fit cursor-pointer text-base font-semibold text-default-900 transition-colors duration-200 ease-in-out focus:bg-[initial] focus:text-primary-500 dark:text-default-50 dark:focus:text-primary-400"
            >
              {label}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
export default NavDropdownMenu;
