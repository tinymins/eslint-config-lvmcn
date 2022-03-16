/**
 * This file is part of eslint-config-lvmcn
 * @link     : https://zhaiyiming.com/
 * @author   : Emil Zhai (root@derzh.com)
 * @modifier : Emil Zhai (root@derzh.com)
 * @copyright: Copyright (c) 2018 TINYMINS.
 */

var clone = require('clone');

var objectUtils = require('./object.js');

/**
 * Merge eslint rule
 * @param {object} rule Eslint rule
 * @param {array} merger Rule merger, it can be:
 *                1. {Function} mapper receives raw rule and should return mapped rule;
 *                2. {Array} rule data to be merged;
 *                3. {String | Number} rule report level to be merged;
 * @returns {object} Merged rule
 */
function mergeRules(rule, merger) {
  // "error", "warn", "off", 0, 1, 2
  if (typeof rule === 'string' || typeof rule === 'number') {
    rule = [rule];
  }
  if (!Array.isArray(rule)) {
    rule = ['off'];
  }
  // apply mapper
  if (typeof merger === 'function') {
    rule = merger(rule);
  } else if (Array.isArray(merger)) {
    for (var i = 0; i < Math.max(merger.length, rule.length); i++) {
      rule[i] = objectUtils.merge(rule[i], merger[i]);
    }
  } else if (typeof merger === 'string') {
    rule[0] = merger;
  }
  return rule;
}
module.exports.merge = mergeRules;

/**
 * Map eslint rules
 * @param {object} rules Eslint rules
 * @param {array} maps Rule maps, each item is a merger of `merge` function
 * @returns {object} Mapped rules
 */
function mapRules(rules, maps) {
  var res = {};
  for (var i = 0; i < maps.length; i++) {
    var map = maps[i];
    var sourceName = map[1];
    var targetName = map[0];
    var mapper = map[2];
    var rule = clone(rules[sourceName]);
    if (rule) {
      rule = mergeRules(rule, mapper);
    }
    res[sourceName] = 'off';
    res[targetName] = rule;
  }
  return res;
}
module.exports.map = mapRules;
