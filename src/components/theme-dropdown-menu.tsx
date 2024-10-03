import { useStore } from '@nanostores/react';
import { type LucideIcon, Monitor, MoonStar, Sun } from 'lucide-react';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { $theme, setTheme, type ThemeKey } from '@/stores/theme';

interface ThemeDropdownMenu {
  key: ThemeKey;
  icon: LucideIcon;
  label: string;
}

const themeDropdownMenuItems: ThemeDropdownMenu[] = [
  {
    key: 'light',
    icon: Sun,
    label: '라이트 모드',
  },
  {
    key: 'dark',
    icon: MoonStar,
    label: '다크 모드',
  },
  {
    key: 'system',
    icon: Monitor,
    label: '시스템 모드',
  },
];
const ThemeDropdownMenu = () => {
  const { theme } = useStore($theme);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        aria-label="테마 변경"
        className="hidden rounded-full bg-transparent p-2.5 outline-none hover:bg-transparent/5 lg:block dark:hover:bg-default-50/5"
      >
        <Sun
          strokeWidth="2.5"
          data-theme={theme}
          className='block size-5 data-[theme="light"]:text-primary-500 dark:hidden dark:data-[theme="light"]:text-primary-400'
        />
        <MoonStar
          strokeWidth="2.5"
          data-theme={theme}
          className='hidden size-5 data-[theme="dark"]:text-primary-500 dark:block dark:data-[theme="dark"]:text-primary-400'
        />
        <span className="sr-only">테마 변경</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="hidden w-36 lg:block">
        {themeDropdownMenuItems.map(({ key, icon: Icon, label }) => {
          return (
            <DropdownMenuItem
              key={key}
              data-active={theme === key}
              className="cursor-pointer text-base font-semibold text-default-500 focus:text-default-700 data-[active=true]:text-primary-500 dark:text-default-400 dark:focus:text-default-200 data-[active=true]:dark:text-primary-400"
              onClick={() => setTheme(key)}
            >
              <Icon strokeWidth="2.5" className="mr-2 size-5" /> {label}
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
export default ThemeDropdownMenu;
