export function toPersianNumber(input: string | number): string {
  const persianNumbers = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
  const str = typeof input === 'number' ? input.toString() : input;
  return str.replace(/\d/g, (d) => persianNumbers[parseInt(d)]);
}

export function toEnglishNumber(input: string | number): string {
  const persianNumbers = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
  const str = typeof input === 'number' ? input.toString() : input;
  return str.replace(/[۰-۹]/g, (d) => persianNumbers.indexOf(d).toString());
}
