/**
 * This file is part of eslint-config-lvmcn
 * @link     : https://zhaiyiming.com/
 * @author   : Emil Zhai (root@derzh.com)
 * @modifier : Emil Zhai (root@derzh.com)
 * @copyright: Copyright (c) 2018 TINYMINS.
 */

var assign = require("object.assign");
var ruleUtils = require('../../utils/rule.js');
var baseRules = require("./base.js").rules;

// http://eslint.org/docs/user-guide/configuring
module.exports = {
  plugins: [
    "react",
  ],
  extends: [
    require.resolve("eslint-config-airbnb/rules/react"),
  ],
  rules: {
    "camelcase": ["error", assign(
      {},
      baseRules["camelcase"][1],
      {
        // allow UNSAFE_XXX
        "allow": baseRules["camelcase"][1].allow.concat(["^UNSAFE_"]),
      },
    )],
    "class-methods-use-this": "off",
    "no-underscore-dangle": ruleUtils.merge(baseRules["no-underscore-dangle"], ["error", {
      allow: ["__INITIAL_STATE__", "__REDUX_DEVTOOLS_EXTENSION__"],
      allowAfterThis: false,
      allowAfterSuper: false,
      enforceInMethodNames: true,
    }]),
    "react/destructuring-assignment": "off",
    "react/jsx-curly-spacing": ["error", { "when": "never", "children": { "when": "always" }}],
    "react/jsx-filename-extension": ["error", { "extensions": [".js", ".jsx", ".ts", ".tsx"] }],
    "react/jsx-fragments": ["error", "element"],
    "react/jsx-no-duplicate-props": "error",
    "react/jsx-no-undef": "error",
    "react/jsx-one-expression-per-line": ["error", { "allow": "single-child" }],
    "react/jsx-props-no-spreading": "off",
    "react/jsx-uses-react": "error",
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
    "react/jsx-uses-vars": "error",
    "react/no-array-index-key": "off",
    "react/no-did-update-set-state": "off",
    "react/no-typos": "error",
    "react/no-unescaped-entities": "error",
    "react/no-unknown-property": "error",
    "react/sort-comp": ["error", {
      order: [
        "constructor",
        "state",
        "everything-else",
        "lifecycle",
        "/^render.+$/",
        "render",
      ]
    }],
    "react/state-in-constructor": "off",
  },
};
