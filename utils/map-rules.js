/**
 * This file is part of eslint-config-lvmcn
 * @link     : https://zhaiyiming.com/
 * @author   : Emil Zhai (root@derzh.com)
 * @modifier : Emil Zhai (root@derzh.com)
 * @copyright: Copyright (c) 2018 TINYMINS.
 */

var assign = require("object.assign");

/**
 * Map eslint rules
 * @param {object} rules Eslint rules
 * @param {array} maps Rule maps, each item can be:
 *                1. {Function} mapper receives raw rule and should return mapped rule;
 *                2. {Array} rule data to be merged;
 *                3. {Object} rule options to be merged;
 * @returns Mapped rules
 */
module.exports = function mapRules(rules, maps) {
  var res = {};
  for (var i = 0; i < maps.length; i++) {
    var map = maps[i];
    var sname = map[0];
    var dname = map[1];
    var mapper = map[2];
    var rule = rules[sname];
    if (rule) {
      // "error", "warn", "off"
      if (typeof rule === 'string') {
        rule = [rule];
      }
      // apply mapper
      if (typeof mapper === "function") {
        rule = mapper(rule);
      } else if (Array.isArray(mapper)) {
        rule[0] = mapper[0] || rule[0];
        rule[1] = assign({}, rule[1], mapper[1]);
      } else if (typeof mapper === "object") {
        rule[1] = assign({}, rule[1], mapper);
      }
      res[sname] = "off";
      res[dname] = rule;
    }
  }
  return res;
}
