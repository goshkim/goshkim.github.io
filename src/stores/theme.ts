import { map, onMount } from 'nanostores';

export type ThemeKey = 'light' | 'dark' | 'system';
export interface Theme {
  theme: ThemeKey;
}
export const $theme = map<Theme>({
  theme: 'system',
});

export const setTheme = (theme: ThemeKey) => {
  $theme.setKey('theme', theme);

  if (theme === 'system') {
    const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    localStorage.removeItem('theme');
    document.documentElement.classList.toggle('dark', isDarkMode);
    return;
  }

  const isDarkMode = theme === 'dark';
  localStorage.setItem('theme', theme);
  document.documentElement.classList.toggle('dark', isDarkMode);
};

onMount($theme, () => {
  if (typeof window !== 'undefined') {
    const theme = localStorage.getItem('theme') as ThemeKey | null;
    setTheme(theme || 'system');
  }
});
