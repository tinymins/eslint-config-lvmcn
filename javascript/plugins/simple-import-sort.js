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
    "simple-import-sort",
  ],
  rules: {
    "simple-import-sort/imports": ["error", {
      groups: [
        // Side effect imports.
        ["^\\u0000"],
        // Packages.
        // Things that start with a letter (or digit or underscore), or `@` followed by a letter.
        ["^@?\\w"],
        // Absolute imports and other imports such as Vue-style `@/foo`.
        // Anything not matched in another group.
        [
          "^@/types(?:/|$)",
          "^@/config(?:/|$)",
          "^@/enums(?:/|$)",
          "^@/assets(?:/|$)",
          "^@/utils(?:/|$)",
          "^@/router(?:/|$)",
          "^@/route(?:/|$)",
          "^@/api(?:/|$)",
          "^@/store(?:/|$)",
          "^@/components(?:/|$)",
          "^@/pages(?:/|$)",
          "^@/app(?:/|$)",
          "^",
        ],
        // Relative imports.
        // Anything that starts with a dot.
        ["^\\."],
        // Relative style imports.
        ["^\\..+(?:css|sass|less|scss|pcss|styl)$"],
      ],
    }],
  },
};
