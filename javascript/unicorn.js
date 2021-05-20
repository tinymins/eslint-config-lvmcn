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
    "unicorn",
  ],
  extends: [
    "plugin:unicorn/recommended",
  ],
  rules: {
    "unicorn/consistent-destructuring": "off",
    "unicorn/import-style": "off",
    "unicorn/no-null": "off",
    "unicorn/numeric-separators-style": "off",
    "unicorn/prefer-node-protocol": "off",
    "unicorn/prevent-abbreviations": "off",
  },
};
