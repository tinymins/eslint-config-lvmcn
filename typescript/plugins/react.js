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
    'react'
  ],
  extends: [
    require.resolve('../../javascript/plugins/react')
  ],
  rules: {
    'no-underscore-dangle': 'off', // replaced by @typescript-eslint/naming-convention
    'react/require-default-props': 'off'
  }
};
