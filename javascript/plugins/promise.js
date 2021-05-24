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
    "promise",
  ],
  extends: [
    "plugin:promise/recommended",
  ],
  rules: {
    "promise/no-nesting": "off",
    "no-promise-in-callback": "off",
    "no-callback-in-promise": "off",
  },
};
