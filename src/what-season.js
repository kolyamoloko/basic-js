import { NotImplementedError } from '../extensions/index.js';

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
 export default function getSeason(date) {
  if (date == undefined) {
    return "Unable to determine the time of year!";
  } 
  if (Object.prototype.toString.call(date) !== '[object Date]' || typeof date !== 'object' || Object.keys(date).length > 0 || !(date instanceof Date)) {
    throw new Error('Invalid date!');
  }
    if (
      (date.getMonth() >= 0 && date.getMonth() < 2) ||
      date.getMonth() == 11
    ) {
      return "winter";
    } else if (date.getMonth() >= 2 && date.getMonth() < 5) {
      return "spring";
    } else if (date.getMonth() >= 5 && date.getMonth() < 8) {
      return "summer";
    } else if (date.getMonth() >= 8 && date.getMonth() < 11) {
      return "autumn";
    }
  } 
