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
    "node",
  ],
  extends: [
    "plugin:node/recommended",
  ],
  "parserOptions": {
    // Only ESLint 6.2.0 and later support ES2020.
    "ecmaVersion": 2020,
  },
  rules: {
    "no-undefined": "off",
    "no-void": ["error", { "allowAsStatement": true }],
    "node/no-missing-import": ["error", {
      "allowModules": [
        "vscode",
      ],
      "tryExtensions": [".js", ".jsx", ".mjs", ".json", ".ts", ".tx", ".tsx", ".node"]
    }],
    "node/no-unsupported-features/es-syntax": [
      "error",
      {
        "version": ">=12.0.0",
        "ignores": ["modules"]
      },
    ],
  },
};
