/**
 * This file is part of eslint-config-lvmcn
 * @link     : https://zhaiyiming.com/
 * @author   : Emil Zhai (root@derzh.com)
 * @modifier : Emil Zhai (root@derzh.com)
 * @copyright: Copyright (c) 2018 TINYMINS.
 */

// http://eslint.org/docs/user-guide/configuring
/**
 * Full plugin configure.
 */
module.exports = {
  extends: [
    require.resolve("./base.js"),
    require.resolve("./import.js"),
    require.resolve("./unicorn.js"),
    require.resolve("./react.js"),
    require.resolve("./unused-imports.js"),
  ],
  rules: {},
};
