/**
 * This file is part of eslint-config-lvmcn
 * @link     : https://zhaiyiming.com/
 * @author   : Emil Zhai (root@derzh.com)
 * @modifier : Emil Zhai (root@derzh.com)
 * @copyright: Copyright (c) 2018 TINYMINS.
 */

var assign = require("object.assign");

/**
 * Merge eslint rule
 * @param {object} rule Eslint rule
 * @param {array} merger Rule merger, it can be:
 *                1. {Function} mapper receives raw rule and should return mapped rule;
 *                2. {Array} rule data to be merged;
 *                3. {Object} rule options to be merged;
 * @returns Merged rules
 */
function mergeRules(rule, merger) {
  // "error", "warn", "off"
  if (typeof rule === "string") {
    rule = [rule];
  }
  // apply mapper
  if (typeof merger === "function") {
    rule = merger(rule);
  } else if (Array.isArray(merger)) {
    rule[0] = merger[0] || rule[0];
    rule[1] = assign({}, rule[1], merger[1]);
  } else if (typeof merger === "object") {
    rule[1] = assign({}, rule[1], merger);
  }
  return rule;
}
module.exports.merge = mergeRules;

/**
 * Map eslint rules
 * @param {object} rules Eslint rules
 * @param {array} maps Rule maps, each item is a merger of `merge` function
 * @returns Mapped rules
 */
function mapRules(rules, maps) {
  var res = {};
  for (var i = 0; i < maps.length; i++) {
    var map = maps[i];
    var sname = map[1];
    var dname = map[0];
    var mapper = map[2];
    var rule = rules[sname];
    if (rule) {
      rule = mergeRules(rule, mapper);
    }
    res[sname] = "off";
    res[dname] = rule;
  }
  return res;
}
module.exports.map = mapRules;
