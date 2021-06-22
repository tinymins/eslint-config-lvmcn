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
    "promise/catch-or-return": ["error", {
      allowThen: true,
    }],
    "promise/no-nesting": "off",
    "promise/no-promise-in-callback": "off",
    "promise/no-callback-in-promise": "off",
  },
};
