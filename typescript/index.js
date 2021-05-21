/**
 * This file is part of eslint-config-lvmcn
 * @link     : https://zhaiyiming.com/
 * @author   : Emil Zhai (root@derzh.com)
 * @modifier : Emil Zhai (root@derzh.com)
 * @copyright: Copyright (c) 2018 TINYMINS.
 */

// http://eslint.org/docs/user-guide/configuring
/**
 * TypeScript common files.
 */
module.exports = {
  extends: [
    require.resolve("./base"),
    require.resolve("./plugins/import"),
    require.resolve("./plugins/promise"),
    require.resolve("./plugins/unicorn"),
    require.resolve("./plugins/unused-imports"),
  ],
  rules: {},
};
