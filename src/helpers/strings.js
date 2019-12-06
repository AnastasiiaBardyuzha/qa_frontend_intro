import { generateRandomInt } from './numbers';

export function generateRandomTime() {
  const g = generateRandomInt;

  return `${g(0, 2)}${g(0, 9)}:${g(0, 5)}${g(0, 9)}`;
}

export function parseYear(year) {
  const numYear = +year;

  if (Number.isNaN(year) || numYear < 0 || numYear > 9999) {
    throw new Error('Year is not valid');
  }

  return numYear < 100 ? 1900 + numYear : numYear;
}
