/**
 * This file is part of eslint-config-lvmcn
 * @link     : https://zhaiyiming.com/
 * @author   : Emil Zhai (root@derzh.com)
 * @modifier : Emil Zhai (root@derzh.com)
 * @copyright: Copyright (c) 2018 TINYMINS.
 */

// http://eslint.org/docs/user-guide/configuring
module.exports = {
  extends: [
    require.resolve('eslint-config-airbnb-base/rules/best-practices'),
    require.resolve('eslint-config-airbnb-base/rules/errors'),
    require.resolve('eslint-config-airbnb-base/rules/node'),
    require.resolve('eslint-config-airbnb-base/rules/style'),
    require.resolve('eslint-config-airbnb-base/rules/variables'),
    require.resolve('eslint-config-airbnb-base/rules/es6'),
    require.resolve('eslint-config-airbnb-base/rules/strict')
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: [
    'lvmcn'
  ],
  rules: {
    'accessor-pairs': 'error',
    'array-bracket-newline': 'error',
    'array-bracket-spacing': 'error',
    'array-callback-return': ['error', {
      allowImplicit: true
    }],
    'array-element-newline': 'off',
    'arrow-body-style': 'error',
    'arrow-parens': ['error', 'as-needed', {
      requireForBlockBody: true
    }],
    'arrow-spacing': 'error',
    'block-scoped-var': 'error',
    'block-spacing': 'error',
    'brace-style': ['error', '1tbs', { allowSingleLine: true }],
    'callback-return': 'off',
    'camelcase': ['error', {
      properties: 'always',
      // allow `__low_case_const__` and `__UPPER_CASE_CONST__`, such as __REDUX_DEVTOOLS_EXTENSION__
      allow: ['^__[a-z0-9](?:[a-z0-9_]*[a-z0-9]){0,1}__$', '^__[A-Z0-9](?:[A-Z0-9_]*[A-Z0-9]){0,1}__$']
    }],
    'capitalized-comments': 'error',
    'class-methods-use-this': 'off',
    'comma-dangle': 'error',
    'comma-spacing': 'error',
    'comma-style': 'error',
    'complexity': ['error', { max: 100 }],
    'computed-property-spacing': 'error',
    'consistent-return': ['error', {
      treatUndefinedAsUnspecified: true
    }],
    'consistent-this': 'off',
    'constructor-super': 'error',
    'curly': ['error', 'all'],
    'default-case': 'error',
    'dot-location': 'error',
    'dot-notation': 'error',
    'eol-last': 'error',
    'eqeqeq': 'error',
    'for-direction': 'error',
    'func-call-spacing': 'error',
    'func-name-matching': 'error',
    'func-names': 'error',
    'func-style': ['error', 'declaration', { allowArrowFunctions: true }],
    'function-paren-newline': ['error', 'consistent'],
    'generator-star-spacing': 'error',
    // 'generator-star': 'error', // replaced by: generator-star-spacing
    'getter-return': 'error',
    'global-require': 'off', // @deprecated, replaced by: node/global-require
    // 'global-strict': 'error', // strict
    'guard-for-in': 'error',
    'handle-callback-err': 'error',
    'id-blacklist': 'error',
    'id-length': 'off',
    'id-match': ['error', '^(?:_*\\$*[a-zA-Z0-9]*\\$*_*||[A-Z_0-9$]+)$', {
      properties: true,
      onlyDeclarations: true
    }],
    'implicit-arrow-linebreak': 'off',
    // 'indent-legacy': ['error', 2], // replaced by: indent
    'indent': ['error', 2, {
      SwitchCase: 1,
      VariableDeclarator: 1,
      outerIIFEBody: 1,
      // MemberExpression: null,
      FunctionDeclaration: {
        parameters: 1,
        body: 1
      },
      FunctionExpression: {
        parameters: 1,
        body: 1
      },
      CallExpression: {
        arguments: 1
      },
      ArrayExpression: 1,
      ObjectExpression: 1,
      ImportDeclaration: 1,
      flatTernaryExpressions: false,
      // list derived from https://github.com/benjamn/ast-types/blob/HEAD/def/jsx.js
      ignoredNodes: ['JSXElement', 'JSXElement > *', 'JSXAttribute', 'JSXIdentifier', 'JSXNamespacedName', 'JSXMemberExpression', 'JSXSpreadAttribute', 'JSXExpressionContainer', 'JSXOpeningElement', 'JSXClosingElement', 'JSXFragment', 'JSXOpeningFragment', 'JSXClosingFragment', 'JSXText', 'JSXEmptyExpression', 'JSXSpreadChild'],
      ignoreComments: false
    }],
    'init-declarations': 'off',
    'jsx-quotes': 'error',
    'key-spacing': 'error',
    'keyword-spacing': 'error',
    'line-comment-position': 'off',
    'linebreak-style': 'error',
    'lines-around-comment': 'off',
    'lines-around-directive': 'error',
    'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
    'max-classes-per-file': 'off',
    'max-depth': ['error', { max: 5 }],
    'max-len': ['error', {
      code: 200,
      ignoreComments: true,
      ignoreTrailingComments: true,
      ignoreUrls: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
      ignoreRegExpLiterals: true
    }],
    'max-lines-per-function': 'off',
    'max-lines': 'off',
    'max-nested-callbacks': 'error',
    'max-params': ['error', 8],
    'max-statements-per-line': ['error', { max: 2 }],
    'max-statements': 'off',
    'multiline-comment-style': ['error', 'starred-block'],
    'multiline-ternary': ['error', 'always-multiline'],
    'new-cap': 'error',
    'new-parens': 'error',
    'newline-after-var': 'off',
    'newline-before-return': 'off',
    'newline-per-chained-call': 'error',
    'no-alert': 'error',
    'no-array-constructor': 'error',
    // 'no-arrow-condition': 'error', // replaced by: no-confusing-arrow, no-constant-condition
    'no-async-promise-executor': 'error',
    'no-await-in-loop': 'error',
    'no-bitwise': 'off',
    'no-buffer-constructor': 'error',
    'no-caller': 'error',
    'no-case-declarations': 'error',
    'no-catch-shadow': 'error',
    'no-class-assign': 'error',
    // 'no-comma-dangle': 'error', // replaced by: comma-dangle
    'no-compare-neg-zero': 'error',
    'no-cond-assign': 'error',
    'no-confusing-arrow': 'error',
    'no-console': ['error', { allow: ['debug', 'warn', 'error'] }],
    'no-const-assign': 'error',
    'no-constant-condition': 'error',
    'no-continue': 'off',
    'no-control-regex': 'error',
    'no-debugger': 'error',
    'no-delete-var': 'error',
    'no-div-regex': 'error',
    'no-dupe-args': 'error',
    'no-dupe-class-members': 'error',
    'no-dupe-keys': 'error',
    'no-duplicate-case': 'error',
    'no-duplicate-imports': 'error',
    'no-else-return': 'error',
    'no-empty-character-class': 'error',
    // 'no-empty-class': 'error', // replaced by: no-empty-character-class
    'no-empty-function': 'error',
    // 'no-empty-label': 'error', // replaced by: no-labels
    'no-empty-pattern': 'error',
    'no-empty': ['error', { allowEmptyCatch: true }],
    'no-eq-null': 'error',
    'no-eval': 'error',
    'no-ex-assign': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-extra-boolean-cast': 'error',
    'no-extra-label': 'error',
    'no-extra-parens': ['error', 'all', {
      conditionalAssign: true,
      nestedBinaryExpressions: false,
      returnAssign: false,
      ignoreJSX: 'all', // delegate to eslint-plugin-react
      enforceForArrowConditionals: false
    }],
    'no-extra-semi': 'error',
    // 'no-extra-strict': 'error', // replaced by: strict
    'no-fallthrough': 'error',
    'no-floating-decimal': 'error',
    'no-func-assign': 'error',
    'no-global-assign': 'error',
    'no-implicit-coercion': 'error',
    'no-implicit-globals': 'error',
    'no-implied-eval': 'error',
    'no-inline-comments': 'off',
    'no-inner-declarations': 'error',
    'no-invalid-regexp': 'error',
    'no-invalid-this': 'off',
    'no-irregular-whitespace': 'error',
    'no-iterator': 'error',
    'no-label-var': 'error',
    'no-labels': 'error',
    'no-lone-blocks': 'error',
    'no-lonely-if': 'error',
    'no-loop-func': 'error',
    'no-magic-numbers': 'off',
    'no-misleading-character-class': 'error',
    'no-mixed-operators': 'error',
    'no-mixed-requires': 'error',
    'no-mixed-spaces-and-tabs': 'error',
    'no-multi-assign': 'error',
    'no-multi-spaces': 'error',
    'no-multi-str': 'error',
    'no-multiple-empty-lines': 'error',
    'no-native-reassign': 'error',
    'no-negated-condition': 'off',
    'no-negated-in-lhs': 'error',
    'no-nested-ternary': 'error',
    'no-new-func': 'error',
    'no-new-object': 'error',
    'no-new-require': 'error',
    'no-new-symbol': 'error',
    'no-new-wrappers': 'error',
    'no-new': 'error',
    'no-obj-calls': 'error',
    'no-octal-escape': 'error',
    'no-octal': 'error',
    'no-param-reassign': 'off',
    'no-path-concat': 'error',
    'no-plusplus': ['error', {
      allowForLoopAfterthoughts: true
    }],
    'no-process-env': 'off',
    'no-process-exit': 'error',
    'no-proto': 'error',
    'no-prototype-builtins': 'error',
    'no-redeclare': 'error',
    'no-regex-spaces': 'error',
    // 'no-reserved-keys': 'error', // replaced by: quote-props
    'no-restricted-globals': 'error',
    'no-restricted-imports': ['error', {
      paths: ['lodash']
    }],
    'no-restricted-modules': 'error',
    'no-restricted-properties': 'error',
    'no-restricted-syntax': [
      'error',
      {
        selector: 'ForInStatement',
        message: 'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.'
      },
      {
        selector: 'LabeledStatement',
        message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.'
      },
      {
        selector: 'WithStatement',
        message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.'
      }
    ],
    'no-return-assign': 'error',
    'no-return-await': 'error',
    'no-script-url': 'error',
    'no-self-assign': 'error',
    'no-self-compare': 'error',
    'no-sequences': 'error',
    'no-shadow-restricted-names': 'error',
    'no-shadow': ['error', { allow: ['_'] }],
    // 'no-space-before-semi': 'error', // replaced by: semi-spacing
    'no-spaced-func': 'error',
    'no-sparse-arrays': 'error',
    'no-sync': 'error',
    'no-tabs': 'error',
    'no-template-curly-in-string': 'error',
    'no-ternary': 'off',
    'no-this-before-super': 'error',
    'no-throw-literal': 'error',
    'no-trailing-spaces': 'error',
    'no-undef-init': 'error',
    'no-undef': 'error',
    'no-undefined': 'error',
    'no-underscore-dangle': ['error', {
      allow: [],
      allowAfterThis: false,
      allowAfterSuper: false,
      enforceInMethodNames: false
    }],
    'no-unexpected-multiline': 'error',
    'no-unmodified-loop-condition': 'error',
    'no-unneeded-ternary': 'error',
    'no-unreachable': 'error',
    'no-unsafe-finally': 'error',
    'no-unsafe-negation': 'error',
    'no-unused-expressions': 'error',
    'no-unused-labels': 'error',
    'no-unused-vars': ['error', { args: 'none' }],
    'no-use-before-define': 'error',
    'no-useless-call': 'error',
    'no-useless-catch': 'error',
    'no-useless-computed-key': 'error',
    'no-useless-concat': 'error',
    'no-useless-constructor': 'error',
    'no-useless-escape': 'error',
    'no-useless-rename': 'error',
    'no-useless-return': 'error',
    'no-var': 'error',
    'no-void': 'off',
    'no-warning-comments': 'off',
    'no-whitespace-before-property': 'error',
    'no-with': 'error',
    // 'no-wrap-func': 'error', // replaced by: no-extra-parens
    'nonblock-statement-body-position': 'error',
    'object-curly-newline': ['error', { consistent: true }],
    'object-curly-spacing': ['error', 'always'],
    'object-property-newline': 'error',
    'object-shorthand': 'error',
    'one-var-declaration-per-line': ['error', 'initializations'],
    'one-var': ['error', { initialized: 'never' }],
    'operator-assignment': 'error',
    'operator-linebreak': 'error',
    'padded-blocks': 'error',
    'padding-line-between-statements': 'error',
    'prefer-arrow-callback': 'error',
    'prefer-const': 'error',
    'prefer-destructuring': 'off',
    'prefer-named-capture-group': 'off', // es6 does not support capture group
    'prefer-numeric-literals': 'error',
    'prefer-object-spread': 'off',
    'prefer-promise-reject-errors': 'error',
    'prefer-reflect': 'off',
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'error',
    'quote-props': 'error',
    'quotes': 'error',
    'radix': 'error',
    'require-atomic-updates': 'off',
    'require-await': 'error',
    'require-jsdoc': 'off',
    'require-unicode-regexp': 'error',
    'require-yield': 'error',
    'rest-spread-spacing': 'error',
    'semi-spacing': 'error',
    'semi-style': 'error',
    'semi': 'error',
    'sort-imports': 'off',
    'sort-keys': 'off',
    'sort-vars': 'error',
    // 'space-after-function-name': 'error', // replaced by: space-before-function-paren
    // 'space-after-keywords': 'error', // replaced by: keyword-spacing
    'space-before-blocks': 'error',
    'space-before-function-paren': 'error',
    // 'space-before-function-parentheses': 'error', // replaced by: space-before-function-paren
    // 'space-before-keywords': 'error', // replaced by: keyword-spacing
    // 'space-in-brackets': 'error', // replaced by: object-curly-spacing, array-bracket-spacing, computed-property-spacing
    'space-in-parens': 'error',
    'space-infix-ops': 'error',
    // 'space-return-throw-case': 'error', // replaced by: keyword-spacing
    'space-unary-ops': 'error',
    // 'space-unary-word-ops': 'error', // replaced by: space-unary-ops
    'spaced-comment': 'error',
    // 'spaced-line-comment': 'error', // replaced by: spaced-comment
    'strict': 'error',
    'switch-colon-spacing': 'error',
    'symbol-description': 'error',
    'template-curly-spacing': 'error',
    'template-tag-spacing': 'error',
    'unicode-bom': 'error',
    'use-isnan': 'error',
    'valid-jsdoc': ['error', {
      requireParamType: true,
      requireReturn: false,
      requireReturnType: true
    }],
    'valid-typeof': 'error',
    'vars-on-top': 'error',
    'wrap-iife': 'error',
    'wrap-regex': 'error',
    'yield-star-spacing': 'error',
    'yoda': 'error',
    'lvmcn/no-single-line-comment-block': 'error'
  }
};
