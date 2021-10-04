import { NotImplementedError } from '../extensions/index.js';

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
 export default function renameFiles(names) {
  let arr=[];
  for(let i=0; i<names.length; i++) {
    for(let j=i+1; j<names.length; j++) {
      if(names[i]===names[j]) {
        arr.push(names[j]);
        names[j]=0;
      }
    }
    if(typeof(names[i][names[i].length-1])!=='number' && arr.length!==0) {
      arr[0] = arr[0]+'(1)'
    };
    if(arr.length>1) {
      for(let k=1; k<arr.length; k++) {
        let o=arr[k-1].length;
        o=+arr[k-1][o-2]+1
        arr[k]=arr[k]+'('+o+')'
      }
    }
    for(let m=0; m<arr.length; m++) {
      names[names.indexOf(0)]=arr[m]
    }
    arr.length=0;
  }
  return names
}
