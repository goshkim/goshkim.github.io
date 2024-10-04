import { useStore } from '@nanostores/react';
import { EllipsisVertical } from 'lucide-react';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Link } from '@/components/ui/link';
import { $theme, setTheme, type ThemeKey } from '@/stores/theme';

const navItems = [
  { href: '/', label: '홈' },
  { href: '/tags', label: '태그 목록' },
  { href: 'https://github.com/goshkim', label: 'GitHub', isExternal: true },
];

const themeRadioItems: Record<ThemeKey, string> = {
  light: '라이트 모드',
  dark: '다크 모드',
  system: '시스템 모드',
};

const NavDropdownMenu = () => {
  const { theme } = useStore($theme);

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger
        aria-label="네비게이션"
        className="block rounded-full bg-transparent p-2.5 outline-none hover:bg-transparent/5 lg:hidden dark:hover:bg-default-50/5"
      >
        <EllipsisVertical strokeWidth="2.5" className="size-5" />
        <span className="sr-only">네비게이션</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="block w-64 lg:hidden">
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
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger className="text-base font-semibold">
              테마 변경
            </DropdownMenuSubTrigger>
            <DropdownMenuSubContent className="dark:border-default-700">
              <DropdownMenuRadioGroup
                value={theme}
                onValueChange={value => setTheme(value as ThemeKey)}
              >
                {Object.entries(themeRadioItems).map(([key, value]) => (
                  <DropdownMenuRadioItem
                    key={key}
                    value={key}
                    className="text-base font-medium dark:focus:bg-default-700"
                  >
                    {value}
                  </DropdownMenuRadioItem>
                ))}
              </DropdownMenuRadioGroup>
            </DropdownMenuSubContent>
          </DropdownMenuSub>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
export default NavDropdownMenu;
