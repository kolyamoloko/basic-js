import { NotImplementedError } from '../extensions/index.js';

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
 export default function getCommonCharacterCount(s1, s2) {
  let split1 = s1.split('')
  let split2 = s2.split('')
  let counter = 0
  for (let i = 0; i < split1.length; i++){
    for (let j = 0; j < split2.length; j++){
      if (split1[i] === split2[j]){
        counter++
        split2.splice(j,1)
        break
      }
    }
  }
  return counter
}
