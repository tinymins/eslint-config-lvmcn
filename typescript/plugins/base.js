/**
 * This file is part of eslint-config-lvmcn
 * @link     : https://zhaiyiming.com/
 * @author   : Emil Zhai (root@derzh.com)
 * @modifier : Emil Zhai (root@derzh.com)
 * @copyright: Copyright (c) 2018 TINYMINS.
 */

var assign = require("object.assign");
var ruleUtils = require("../../utils/rule.js");

// http://eslint.org/docs/user-guide/configuring
module.exports = {
  plugins: [
    "@typescript-eslint",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 6,
    ecmaFeatures: {
      modules: true,
      jsx: true,
      legacyDecorators: true,
      experimentalObjectRestSpread: true,
    },
    sourceType: "module",
  },
  extends: [
    "plugin:@typescript-eslint/recommended",
    require.resolve("../../javascript/plugins/base"),
  ],
  rules: assign(ruleUtils.map(require("../../javascript/plugins/base.js").rules, [
    ["@typescript-eslint/comma-spacing", "comma-spacing"],
    ["@typescript-eslint/func-call-spacing", "func-call-spacing"],
    ["@typescript-eslint/indent", "indent"],
    ["@typescript-eslint/keyword-spacing", "keyword-spacing"],
    ["@typescript-eslint/no-duplicate-imports", "no-duplicate-imports"],
    ["@typescript-eslint/no-extra-parens", "no-extra-parens"],
    ["@typescript-eslint/no-redeclare", "no-redeclare", ["error", { ignoreDeclarationMerge: true }]],
    ["@typescript-eslint/no-shadow", "no-shadow"],
    ["@typescript-eslint/no-unused-vars", "no-unused-vars"],
    ["@typescript-eslint/no-use-before-define", "no-use-before-define"],
    ["@typescript-eslint/object-curly-spacing", "object-curly-spacing"],
    ["@typescript-eslint/space-infix-ops", "space-infix-ops"],
  ]), {
    "consistent-return": "off",
    "no-spaced-func": "off",
    "no-undef": "off",
    "valid-jsdoc": ["error", {
      requireParamType: false,
      requireReturn: false,
      requireReturnType: false,
    }],
    "@typescript-eslint/adjacent-overload-signatures": "error",
    "@typescript-eslint/array-type": "error",
    "@typescript-eslint/ban-ts-comment": "error",
    "@typescript-eslint/ban-types": "error",
    "@typescript-eslint/camelcase": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-member-accessibility": "error",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/member-delimiter-style": "error",
    "@typescript-eslint/member-ordering": "off",
    "@typescript-eslint/naming-convention": [
      "error",
      {
        selector: [
          "property", // matches any object, class, or object type property. Does not match properties that have direct function expression or arrow function expression values.
        ],
        format: ["camelCase", "PascalCase", "UPPER_CASE"],
        filter: {
          // you can expand this regex as you find more cases that require quoting that you want to allow
          // allow `__low_case_const__` and `__UPPER_CASE_CONST__`, such as __REDUX_DEVTOOLS_EXTENSION__
          regex: "(^__[a-z0-9](?:[a-z0-9_]*[a-z0-9]){0,1}__$|^__[A-Z0-9](?:[A-Z0-9_]*[A-Z0-9]){0,1}__$)",
          match: false
        },
        leadingUnderscore: "allow",
        trailingUnderscore: "forbid",
      },
      {
        selector: [
          "variable", // matches any var / let / const variable name.
          "parameterProperty", // matches any parameter property.
        ],
        format: ["camelCase", "PascalCase", "UPPER_CASE"],
        leadingUnderscore: "forbid",
        trailingUnderscore: "forbid",
      },
      {
        selector: [
          "objectLiteralMethod", // matches any object literal method. Also matches properties that have direct function expression or arrow function expression values. Does not match accessors.
        ],
        format: ["camelCase", "PascalCase"],
        filter: {
          // you can expand this regex as you find more cases that require quoting that you want to allow
          // allow `__low_case_const__` and `__UPPER_CASE_CONST__`, such as __REDUX_DEVTOOLS_EXTENSION__
          regex: "(^__[a-z0-9](?:[a-z0-9_]*[a-z0-9]){0,1}__$|^__[A-Z0-9](?:[A-Z0-9_]*[A-Z0-9]){0,1}__$)",
          match: false
        },
        leadingUnderscore: "allow",
        trailingUnderscore: "forbid",
      },
      {
        selector: [
          "function", // matches any named function declaration or named function expression.
          "method", // matches any object, class, or object type method. Also matches properties that have direct function expression or arrow function expression values. Does not match accessors.
          "accessor", // matches any accessor.
        ],
        format: ["camelCase", "PascalCase"],
        filter: {
          // you can expand this regex as you find more cases that require quoting that you want to allow
          // allow `__low_case_const__` and `__UPPER_CASE_CONST__`, such as __REDUX_DEVTOOLS_EXTENSION__
          regex: "(^__[a-z0-9](?:[a-z0-9_]*[a-z0-9]){0,1}__$|^__[A-Z0-9](?:[A-Z0-9_]*[A-Z0-9]){0,1}__$)",
          match: false
        },
        leadingUnderscore: "forbid",
        trailingUnderscore: "forbid",
      },
      {
        selector: [
          "parameter", // matches any function parameter. Does not match parameter properties.
        ],
        format: ["camelCase", "PascalCase"],
        filter: {
          // you can expand this regex as you find more cases that require quoting that you want to allow
          // allow `__low_case_const__` and `__UPPER_CASE_CONST__`, such as __REDUX_DEVTOOLS_EXTENSION__
          regex: "(^_+\\d*$|^__[a-z0-9](?:[a-z0-9_]*[a-z0-9]){0,1}__$|^__[A-Z0-9](?:[A-Z0-9_]*[A-Z0-9]){0,1}__$)",
          match: false
        },
        leadingUnderscore: "forbid",
        trailingUnderscore: "forbid",
      },
      {
        selector: [
          "class", // matches any class declaration.
          "interface", // matches any interface declaration.
          "typeAlias", // matches any type alias declaration.
          "typeParameter", // matches any generic type parameter declaration.
        ],
        format: ["PascalCase"],
      },
      {
        selector: [
          "enum", // matches any enum declaration.
          "enumMember", // matches any enum member.
        ],
        format: ["PascalCase", "UPPER_CASE"],
      },
    ],
    "@typescript-eslint/no-array-constructor": "error",
    "@typescript-eslint/no-empty-interface": "off",
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/no-extraneous-class": "error",
    "@typescript-eslint/no-for-in-array": "error",
    "@typescript-eslint/no-inferrable-types": "off",
    "@typescript-eslint/no-misused-new": "error",
    "@typescript-eslint/no-namespace": "error",
    "@typescript-eslint/no-non-null-assertion": "error",
    "@typescript-eslint/no-parameter-properties": "error",
    "@typescript-eslint/no-require-imports": "error",
    "@typescript-eslint/no-this-alias": "off",
    "@typescript-eslint/no-type-alias": "off",
    "@typescript-eslint/no-unnecessary-qualifier": "error",
    "@typescript-eslint/no-unnecessary-type-assertion": "error",
    "@typescript-eslint/no-useless-constructor": "error",
    "@typescript-eslint/no-var-requires": "error",
    "@typescript-eslint/prefer-function-type": "error",
    "@typescript-eslint/prefer-namespace-keyword": "error",
    "@typescript-eslint/promise-function-async": "off",
    "@typescript-eslint/require-array-sort-compare": ["error", { ignoreStringArrays: true }],
    "@typescript-eslint/restrict-plus-operands": "off",
    "@typescript-eslint/type-annotation-spacing": "error",
  }),
};
