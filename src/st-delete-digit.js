import { NotImplementedError } from '../extensions/index.js';

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
 export default function deleteDigit(n) {
  n = n.toString().split('');
  let x = 0
  let m = Math.max(...n)
  console.log(m);
  let l = Math.min(...n)
  for (let i = 0; i < n.length; i++){
 if (n[i] == l){
     n.splice(i, 1)
     break
 }
  }
 return Number(n.join(''))
 }
 
