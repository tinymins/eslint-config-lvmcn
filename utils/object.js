/**
 * This file is part of eslint-config-lvmcn
 * @link     : https://zhaiyiming.com/
 * @author   : Emil Zhai (root@derzh.com)
 * @modifier : Emil Zhai (root@derzh.com)
 * @copyright: Copyright (c) 2018 TINYMINS.
 */

var assign = require("object.assign");

/**
 * Merge two variables:
 *   If right value is undefined, use left value.
 *   If right value and left value are array, concat them.
 *   If right value and left value are object, merge them.
 *   Else, use right value.
 *
 * @param {mixed} mixed1 left value
 * @param {mixed} mixed2 right value
 * @returns merged value
 */
function merge(mixed1, mixed2) {
  var type1 = typeof mixed1;
  var type2 = typeof mixed2;
  if (type2 === 'undefined') {
    return mixed1;
  }
  if (Array.isArray(mixed2) && Array.isArray(mixed1)) {
    return mixed1.concat(mixed2);
  }
  if (
    type1 === 'object' && mixed1 !== null && !Array.isArray(mixed1)
    && type2 === 'object' && mixed2 !== null && !Array.isArray(mixed2)
  ) {
    var res = assign({}, mixed1);
    for (var k in mixed2) {
      if (Object.hasOwnProperty.call(mixed2, k)) {
        res[k] = merge(res[k], mixed2[k]);
      }
    }
    return res;
  }
  return mixed2;
}
module.exports.merge = merge;
