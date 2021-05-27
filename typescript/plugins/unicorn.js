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
    require.resolve("../../javascript/plugins/unicorn"),
  ],
  rules: {
    "unicorn/prefer-default-parameters": "off", // conflict with typescript optional parameter
  },
};
