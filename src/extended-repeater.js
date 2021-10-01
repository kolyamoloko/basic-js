import { NotImplementedError } from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater( str, {repeatTimes, separator, addition, additionRepeatTimes, additionSeparator} ) {
    let additional = "";
    let result = "";
    if (repeatTimes === undefined) {
        repeatTimes = 1;
    }
    if (separator === undefined) {
        separator = "+";
    }
    if (addition === undefined) {
        addition = "";
    }
    if (additionRepeatTimes === undefined) {
        additionRepeatTimes = 1;
    }
    if (additionSeparator === undefined) {
        additionSeparator = "|";
    }
    for (let i = 1; i < additionRepeatTimes; i++) {
        additional += addition + additionSeparator;
    }
    additional += addition;
    for (let j = 1; j < repeatTimes; j++) {
        result += str + additional + separator;
    }
    result += str + additional;
    return result;
}