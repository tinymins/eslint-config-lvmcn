var importResolverExtensions = [
  '.js',
  '.jsx',
  '.jx',
  '.ts',
  '.tsx',
  '.tx'
];

// http://eslint.org/docs/user-guide/configuring
module.exports = {
  root: true,
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 5,
    ecmaFeatures: {
      legacyDecorators: true,
      experimentalObjectRestSpread: true
    },
    sourceType: 'script',
    requireConfigFile: false
  },
  env: {
    node: true,
    es6: false
  },
  plugins: [
    'import',
    'json',
    'unicorn',
    'unused-imports'
  ],
  settings: {
    'import/resolver': {
      alias: {
        extensions: importResolverExtensions
      },
      node: {
        extensions: importResolverExtensions
      }
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx', '.tx']
    }
  },
  overrides: [
    {
      files: ['.json', '.*.json'],
      extends: ['./json']
    },
    {
      files: ['*.js', '.*.js'],
      extends: ['./javascript/node'],
      rules: {
        'comma-dangle': ['error', 'never'],
        'multiline-comment-style': 'off',
        'no-var': 'off',
        'prefer-arrow-callback': 'off',
        'quote-props': ['error', 'consistent-as-needed'],
        'vars-on-top': 'off',
        'import/extensions': ['error', 'always'],
        'unicorn/no-for-loop': 'off',
        'unicorn/prefer-spread': 'off'
      }
    }
  ]
};
