import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
 export default function getDNSStats(domains) {
  let res={};
  let domainArr=[];
  function findDomain(domain) {
    let arr=[];
    arr=domain.split('.')
    for(let i=0; i<arr.length; i++) {
      arr[i]='.'+arr[i]
    }
    for(let j=arr.length-2; j>=0; j--) {
      arr[j]=arr[j+1]+arr[j]
    }
    for(let k=0; k<arr.length; k++) {
      domainArr.push(arr[k])
    }
  }
  for(let i=0; i<domains.length; i++) {
    findDomain(domains[i]);
    domainArr.sort((e)=>e.length).reverse();
  }
  for(let i=0; i<domainArr.length; i++) {
    if(res[domainArr[i]]===undefined) {
      res[domainArr[i]]=1;
    } else res[domainArr[i]]+=1
  }
  return res
}