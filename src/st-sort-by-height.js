import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
 export default function sortByHeight(arr) {
  if (!arr.includes(-1)) return arr.sort((a,b) => a-b)
  let empty = []
  let sorted = arr.filter(item => item !== -1).sort((a,b) => a-b)
  for (let i = 0; i< arr.length; i++) {
    if (arr[i] === -1) {
      empty[i] = -1
    } else {
      empty[i] = sorted.shift()
    }
  }
  return empty
}
