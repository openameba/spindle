import { useMemo } from 'react';
import { formatDistance } from './formatDistance';

export type TimeDistanceOptions = {
  interval?: number;
  locale?: 'ja';
  relativeDate?: Date;
};

export const useTimeDistance = (
  date: string | Date,
  options?: TimeDistanceOptions,
): [string, number] => {
  const value = useMemo((): [string, number] => {
    if (!date) {
      return ['', 0];
    }

    const baseDate = options?.relativeDate || new Date();

    const targetDate = typeof date === 'string' ? new Date(date) : date;

    const epochDistance = baseDate.getTime() - targetDate.getTime();

    return [formatDistance(date, baseDate), epochDistance];
  }, [date, options]);

  return value;
};
