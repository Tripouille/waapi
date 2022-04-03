import { trimStart } from 'lodash-es';

export const formatProductPrice = (price: number) =>
  price.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
    style: 'currency',
    currency: 'EUR',
  });

export const smashRegularSpaces = (str: string): string => {
  return str.replace(RegExp(`${' '}{2,}`, 'g'), ' ');
};

export const formatSearchValue = (str: string): string => {
  return trimStart(smashRegularSpaces(str));
};

export const formatTagValue = (str: string): string => {
  return formatSearchValue(str).toLowerCase();
};
