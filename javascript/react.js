/**
 * This file is part of eslint-config-lvmcn
 * @link     : https://zhaiyiming.com/
 * @author   : Emil Zhai (root@derzh.com)
 * @modifier : Emil Zhai (root@derzh.com)
 * @copyright: Copyright (c) 2018 TINYMINS.
 */

// http://eslint.org/docs/user-guide/configuring
/**
 * JavaScript react files.
 */
module.exports = {
  extends: [
    require.resolve("./plugins/base.js"),
    require.resolve("./plugins/import.js"),
    require.resolve("./plugins/unicorn.js"),
    require.resolve("./plugins/react.js"),
    require.resolve("./plugins/unused-imports.js"),
  ],
  rules: {},
};
