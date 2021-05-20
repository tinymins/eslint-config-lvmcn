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
    "import",
  ],
  extends: [
    require.resolve("eslint-config-airbnb-base/rules/imports"),
  ],
  rules: {
    // don"t require extension when importing
    "import/extensions": ["error", "always", {
      "js": "never",
      "jsx": "never",
      "jx": "never",
      "ts": "never",
      "tsx": "never",
      "tx": "never",
    }],
    // "import/no-cycle": ["error", { maxDepth: 1 }],
    "import/no-cycle": "off",
    // allow optionalDependencies
    "import/no-extraneous-dependencies": ["error", {
      "optionalDependencies": ["test/unit/index.js"]
    }],
    // allow single export
    "import/prefer-default-export": "off",
  },
};
