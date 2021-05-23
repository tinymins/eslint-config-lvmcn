/**
 * This file is part of eslint-config-lvmcn
 * @link     : https://zhaiyiming.com/
 * @author   : Emil Zhai (root@derzh.com)
 * @modifier : Emil Zhai (root@derzh.com)
 * @copyright: Copyright (c) 2018 TINYMINS.
 */

// http://eslint.org/docs/user-guide/configuring
/**
 * TypeScript vue files.
 */
module.exports = {
  extends: [
    require.resolve("."),
    require.resolve("./plugins/vue"),
  ],
  rules: {},
};
