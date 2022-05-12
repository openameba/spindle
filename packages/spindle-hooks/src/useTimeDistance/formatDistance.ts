const getFullYear = (d: Date) => d.getFullYear();
const getMonth = (d: Date) => d.getMonth() + 1;
const getDate = (d: Date) => d.getDate();
const getHours = (d: Date) => d.getHours();
const getMinutes = (d: Date) => d.getMinutes();
const getStringDay = (d: Date) => {
  switch (d.getDay()) {
    case 0:
      return '日曜日';
    case 1:
      return '月曜日';
    case 2:
      return '火曜日';
    case 3:
      return '水曜日';
    case 4:
      return '木曜日';
    case 5:
      return '金曜日';
    case 6:
      return '土曜日';
    default:
      return '';
  }
};

export const epochDistance = (base: Date, target: Date) =>
  base.getTime() - target.getTime();

export const isWithinYear = (base: Date, target: Date, year: number) => {
  const baseFullYear = getFullYear(base);

  // see https://docs.microsoft.com/ja-jp/office/troubleshoot/excel/determine-a-leap-year
  const isLeapYear =
    baseFullYear % 4 === 0 &&
    baseFullYear % 100 === 0 &&
    baseFullYear % 400 === 0;
  const totalDate = isLeapYear ? 366 : 365;

  const seconds = 60 * 60 * 24 * totalDate * year;
  return epochDistance(base, target) / 1000 < seconds;
};

export const isWithinDate = (base: Date, target: Date, date: number) => {
  const seconds = 60 * 60 * 24 * date;
  return epochDistance(base, target) / 1000 < seconds;
};

export const isWithinHours = (base: Date, target: Date, hours: number) => {
  const seconds = 60 * 60 * hours;
  return epochDistance(base, target) / 1000 < seconds;
};

export const isWithinMinutes = (base: Date, target: Date, minutes: number) => {
  const seconds = 60 * minutes;
  return epochDistance(base, target) / 1000 < seconds;
};

const padNum = (num: number) => `${num}`.padStart(2, '0');

export const formatDistance = (
  date: Date | string,
  baseDate: Date = new Date(),
): string => {
  if (!date) {
    return '';
  }

  const targetDate = typeof date === 'string' ? new Date(date) : date;
  if (targetDate.toString() === 'Invalid Date') {
    console.error('Invalid Date', date);
    return '';
  }

  // 何らかの理由で未来時間
  if (epochDistance(baseDate, targetDate) < 0) {
    return 'たった今';
  }
  // 1日以内は formatDistanceStrict の結果をそのまま返す
  if (isWithinDate(baseDate, targetDate, 1)) {
    const distance = epochDistance(baseDate, targetDate) / 1000;
    if (isWithinMinutes(baseDate, targetDate, 1)) {
      return `${distance}秒前`;
    }
    if (isWithinHours(baseDate, targetDate, 1)) {
      return `${Math.trunc(distance / 60)}分前`;
    }
    return `${Math.trunc(distance / (60 * 60))}時間前`;
  }
  // 2日以内(昨日)は "昨日 HH:mm" で返す
  if (isWithinDate(baseDate, targetDate, 2)) {
    return `昨日 ${padNum(getHours(targetDate))}:${padNum(
      getMinutes(targetDate),
    )}`;
  }
  // 3日以内は "eeee HH:mm" で返す
  if (isWithinDate(baseDate, targetDate, 3)) {
    return `${getStringDay(targetDate)} ${padNum(
      getHours(targetDate),
    )}:${padNum(getMinutes(targetDate))}`;
  }
  if (isWithinYear(baseDate, targetDate, 1)) {
    // 1年以内は "M月d日 HH:mm" で返す
    // "M月d日 HH:mm";
    return `${getMonth(targetDate)}月${getDate(targetDate)}日 ${padNum(
      getHours(targetDate),
    )}:${padNum(getMinutes(targetDate))}`;
  }
  // それ以前は "yyyy年M月d日" で返す
  return `${getFullYear(targetDate)}年${getMonth(targetDate)}月${getDate(
    targetDate,
  )}日`;
};
