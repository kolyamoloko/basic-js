import { NotImplementedError } from '../extensions/index.js';

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
 export default function isMAC48Address(n) {
  const arr = '0123456789ABCDEF';
  if (
    n[2] !== '-'
    || n[5] !== '-'
    || n[8] !== '-'
    || n[11] !== '-'
    || n[14] !== '-'
    || n.length !== 17
  ) {
    return false;
  }
  for (let i = 0; i < n.length; i++) {
    if (i === 2 || i === 5 || i === 8 || i === 11 || i === 14) {
      i++;
    }
    if (!arr.includes(n[i])) {
      return false;
    }
  }
  return true;
}