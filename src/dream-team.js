import { NotImplementedError } from '../extensions/index.js';

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
export default function createDreamTeam(arr) {
let str = '';
if(!Array.isArray(arr)) return false;
if ( arr.length != null && 0 < arr.length){
  for (let i=0; i < arr.length; i++)
  {
    if (typeof arr[i] == 'string' && arr[i] != null){str += arr[i].replace(/\s/g, '').slice(0,1);
    }
  }
  return str.split('').sort().join('').toUpperCase().split('').sort().join('').toUpperCase()
  }
else {return false}
}
