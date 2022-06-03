import {
  formatDistance,
  isWithinDate,
  isWithinHours,
  isWithinMinutes,
  isWithinYear,
} from './formatDistance';

describe('isWithinYear()', () => {
  it('should be true when current year is within specified year', () => {
    const baseDate = new Date('2023-12-31T00:00:00.000Z');
    const targetDate = new Date('2022-01-01T00:00:00.000Z');
    expect(isWithinYear(baseDate, targetDate, 1)).toBeFalsy();
    expect(isWithinYear(baseDate, targetDate, 2)).toBeTruthy();
  });

  it('should be true when current leap year is within specified year', () => {
    const baseDate = new Date('2000-12-31T00:00:00.000Z');
    const targetDate = new Date('1999-01-01T00:00:00.000Z');
    expect(isWithinYear(baseDate, targetDate, 1)).toBeFalsy();
    expect(isWithinYear(baseDate, targetDate, 2)).toBeTruthy();
  });
});

describe('isWithinDate()', () => {
  it('should be true when current date is within specified date', () => {
    const baseDate = new Date('2022-01-03T00:00:00.000Z');
    const targetDate = new Date('2022-01-01T00:00:00.000Z');
    expect(isWithinDate(baseDate, targetDate, 2)).toBeFalsy();
    expect(isWithinDate(baseDate, targetDate, 3)).toBeTruthy();
  });
});

describe('isWithinHours()', () => {
  it('should be true when current hours are within specified hours', () => {
    const baseDate = new Date('2022-01-01T01:59:00.000Z');
    const targetDate = new Date('2022-01-01T00:00:00.000Z');
    expect(isWithinHours(baseDate, targetDate, 1)).toBeFalsy();
    expect(isWithinHours(baseDate, targetDate, 2)).toBeTruthy();
  });
});

describe('isWithinMinutes()', () => {
  it('should be true when current minutes are within specified minutes', () => {
    const baseDate = new Date('2022-01-01T00:01:59.000Z');
    const targetDate = new Date('2022-01-01T00:00:00.000Z');
    expect(isWithinMinutes(baseDate, targetDate, 1)).toBeFalsy();
    expect(isWithinMinutes(baseDate, targetDate, 2)).toBeTruthy();
  });
});

describe('formatDistance', () => {
  it('should return format date', () => {
    const baseDate = new Date('2021-06-04T00:00:00+09:00');
    expect(formatDistance('')).toEqual('');
    expect(formatDistance('hoge')).toEqual('');
    expect(formatDistance('2021-06-04T00:00:01+09:00', baseDate)).toEqual(
      'たった今',
    );
    expect(formatDistance(baseDate, baseDate)).toEqual('0秒前');
    expect(formatDistance('2021-06-03T23:59:01+09:00', baseDate)).toEqual(
      '59秒前',
    );
    expect(formatDistance('2021-06-03T23:59:00+09:00', baseDate)).toEqual(
      '1分前',
    );
    expect(formatDistance('2021-06-03T23:01:00+09:00', baseDate)).toEqual(
      '59分前',
    );
    expect(formatDistance('2021-06-03T23:00:00+09:00', baseDate)).toEqual(
      '1時間前',
    );
    expect(formatDistance('2021-06-03T00:00:01+09:00', baseDate)).toEqual(
      '23時間前',
    );
    expect(formatDistance('2021-06-03T00:00:00+09:00', baseDate)).toEqual(
      '昨日 00:00',
    );
    expect(formatDistance('2021-06-02T00:00:01+09:00', baseDate)).toEqual(
      '昨日 00:00',
    );
    expect(formatDistance('2021-06-02T00:00:00+09:00', baseDate)).toEqual(
      '水曜日 00:00',
    );
    expect(formatDistance('2021-06-01T00:00:01+09:00', baseDate)).toEqual(
      '火曜日 00:00',
    );
    expect(formatDistance('2021-06-01T00:00:00+09:00', baseDate)).toEqual(
      '6月1日 00:00',
    );
    expect(formatDistance('2020-06-04T00:00:01+09:00', baseDate)).toEqual(
      '6月4日 00:00',
    );
    expect(formatDistance('2020-06-04T00:00:00+09:00', baseDate)).toEqual(
      '2020年6月4日',
    );
  });
});
