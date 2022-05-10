import { useMemo } from 'react';
import { formatDistance } from './formatDistance';

export type TimeDistanceOptions = {
  interval?: number;
  locale?: 'ja';
  relativeDate?: Date;
};

export const useTimeDistance = (
  date: string,
  options?: TimeDistanceOptions,
): [string, number] => {
  const value = useMemo((): [string, number] => {
    const baseDate = options?.relativeDate || new Date();
    if (!date) {
      return ['', 0];
    }

    const targetDate = typeof date === 'string' ? new Date(date) : date;

    const epochDistance = baseDate.getTime() - targetDate.getTime();

    return [formatDistance(date, baseDate), epochDistance];
  }, [date, options]);

  return value;
};
