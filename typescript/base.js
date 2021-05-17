var javascriptBaseRules = import('../javascript/rules/base');
var baseRules = import('./rules/base');

// http://eslint.org/docs/user-guide/configuring
module.exports = {
  plugins: [
    '@typescript-eslint',
  ],
  rules: {
    ...javascriptBaseRules,
    ...baseRules,
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.tx'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 6,
        ecmaFeatures: {
          modules: true,
          jsx: true,
          legacyDecorators: true,
          experimentalObjectRestSpread: true,
        },
        sourceType: 'module',
        project: './tsconfig.json',
      },
      extends: [
        'airbnb-typescript/base',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
      ],
      plugins: [
        'unused-imports'
      ],
      rules: {
        ...baseRules,
        // eslint conflicts
        'arrow-parens': 'off',
        'indent': 'off',
        'no-shadow': 'off',
        'no-undef': 'off',
        'no-unused-vars': 'off',
        'no-use-before-define': 'off',
        'unused-imports/no-unused-imports-ts': 'error',
        'valid-jsdoc': ['error', {
          'requireParamType': false,
          'requireReturn': false,
          'requireReturnType': false,
        }],
        // typescript lints
        '@typescript-eslint/adjacent-overload-signatures': 'error',
        '@typescript-eslint/array-type': 'error',
        '@typescript-eslint/ban-ts-comment': 'error',
        '@typescript-eslint/ban-types': 'error',
        '@typescript-eslint/camelcase': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-member-accessibility': 'error',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/indent': ['error', 2, { 'SwitchCase': 1 }],
        '@typescript-eslint/member-delimiter-style': 'error',
        '@typescript-eslint/member-ordering': 'off',
        '@typescript-eslint/no-undef': 'off',
        '@typescript-eslint/naming-convention': [
          'error',
          {
            selector: [
              'property', // matches any object, class, or object type property. Does not match properties that have direct function expression or arrow function expression values.
            ],
            format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
            filter: {
              // you can expand this regex as you find more cases that require quoting that you want to allow
              regex: '(^__INITIAL_STATE__$|^__REDUX_DEVTOOLS_EXTENSION__$)',
              match: false
            },
            leadingUnderscore: 'allow',
            trailingUnderscore: 'allow',
          },
          {
            selector: [
              'variable', // matches any var / let / const variable name.
              'parameterProperty', // matches any parameter property.
              'enumMember', // matches any enum member.
            ],
            format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
            leadingUnderscore: 'allow',
            trailingUnderscore: 'allow',
          },
          {
            selector: [
              'function', // matches any named function declaration or named function expression.
              'parameter', // matches any function parameter. Does not match parameter properties.
              'method', // matches any object, class, or object type method. Also matches properties that have direct function expression or arrow function expression values. Does not match accessors.
              'accessor', // matches any accessor.
            ],
            format: ['camelCase', 'PascalCase'],
            filter: {
              // you can expand this regex as you find more cases that require quoting that you want to allow
              regex: '(^__INITIAL_STATE__$|^__REDUX_DEVTOOLS_EXTENSION__$)',
              match: false
            },
            leadingUnderscore: 'allow',
            trailingUnderscore: 'allow',
          },
          {
            selector: [
              'class', // matches any class declaration.
              'interface', // matches any interface declaration.
              'typeAlias', // matches any type alias declaration.
              'typeParameter', // matches any generic type parameter declaration.
            ],
            format: ['PascalCase'],
          },
          {
            selector: [
              'enum', // matches any enum declaration.
            ],
            format: ['PascalCase', 'UPPER_CASE'],
          },
        ],
        '@typescript-eslint/no-array-constructor': 'error',
        '@typescript-eslint/no-empty-interface': 'off',
        '@typescript-eslint/no-explicit-any': 'error',
        '@typescript-eslint/no-extraneous-class': 'error',
        '@typescript-eslint/no-for-in-array': 'error',
        '@typescript-eslint/no-inferrable-types': 'off',
        '@typescript-eslint/no-misused-new': 'error',
        '@typescript-eslint/no-namespace': 'error',
        '@typescript-eslint/no-non-null-assertion': 'error',
        '@typescript-eslint/no-parameter-properties': 'error',
        '@typescript-eslint/no-require-imports': 'error',
        '@typescript-eslint/no-shadow': 'error',
        '@typescript-eslint/no-this-alias': 'off',
        '@typescript-eslint/no-type-alias': 'off',
        // '@typescript-eslint/no-unnecessary-qualifier': 'error',
        // '@typescript-eslint/no-unnecessary-type-assertion': 'error',
        '@typescript-eslint/no-unused-vars': ['error', { 'args': 'none' }],
        '@typescript-eslint/no-use-before-define': 'error',
        '@typescript-eslint/no-useless-constructor': 'error',
        '@typescript-eslint/no-var-requires': 'error',
        '@typescript-eslint/prefer-function-type': 'error',
        '@typescript-eslint/prefer-namespace-keyword': 'error',
        '@typescript-eslint/promise-function-async': 'off',
        // '@typescript-eslint/require-array-sort-compare': 'error',
        '@typescript-eslint/restrict-plus-operands': 'off',
        '@typescript-eslint/type-annotation-spacing': 'error',
      },
    },
    {
      files: ['*.d.ts'],
      rules: {
        '@typescript-eslint/no-unused-vars': 'off',
      },
    },
  ],
};
