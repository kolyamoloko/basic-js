import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
 export default class DepthCalculator {
  calculateDepth(array) {
    let depth = 1;

    for (let i = 0; i < array.length; i += 1) {
      const item = array[i];

      if (Array.isArray(item)) {
        const currentDepth = this.calculateDepth(item) + 1;

        if (currentDepth > depth) {
          depth = currentDepth;
        } 
     } 
   }

   return depth;
  }
}
