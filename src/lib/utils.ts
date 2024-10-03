import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getRelativeTime(date: Date) {
  const currentDate = new Date(new Date().getTime() + 9 * 60 * 60 * 1000);

  const diffInMilliSeconds = currentDate.getTime() - date.getTime();

  const seconds = Math.floor(diffInMilliSeconds / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (days > 7) {
    const dateFormatter = new Intl.DateTimeFormat('ko', {
      year: 'numeric',
      month: '2-digit',
      day: 'numeric',
    });
    return dateFormatter.format(date);
  }

  const relativeTimeFormatter = new Intl.RelativeTimeFormat('ko', { numeric: 'auto' });
  if (days > 0) {
    return relativeTimeFormatter.format(-days, 'day');
  } else if (hours > 0) {
    return relativeTimeFormatter.format(-hours, 'hour');
  } else if (minutes > 0) {
    return relativeTimeFormatter.format(-minutes, 'minute');
  }

  return '방금 전';
}
