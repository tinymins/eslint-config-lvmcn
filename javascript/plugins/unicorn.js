/**
 * This file is part of eslint-config-lvmcn
 * @link     : https://zhaiyiming.com/
 * @author   : Emil Zhai (root@derzh.com)
 * @modifier : Emil Zhai (root@derzh.com)
 * @copyright: Copyright (c) 2018 TINYMINS.
 */

// http://eslint.org/docs/user-guide/configuring
module.exports = {
  plugins: [
    'unicorn'
  ],
  extends: [
    'plugin:unicorn/recommended'
  ],
  rules: {
    'unicorn/catch-error-name': ['error', {
      ignore: [
        /^error\d*$/u,
        /^.+Error/u
      ]
    }],
    'unicorn/consistent-destructuring': 'off',
    'unicorn/consistent-function-scoping': 'off',
    'unicorn/filename-case': ['error', {
      case: 'kebabCase',
      ignore: [
        /^__[a-z]+__(?:\.[a-zA-Z0-9_-]+)*$/ui
      ]
    }],
    'unicorn/import-style': 'off',
    'unicorn/no-null': 'off',
    'unicorn/no-useless-undefined': 'off',
    'unicorn/numeric-separators-style': 'off',
    'unicorn/prefer-node-protocol': 'off',
    'unicorn/prevent-abbreviations': 'off'
  }
};
