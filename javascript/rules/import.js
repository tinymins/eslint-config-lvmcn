module.exports = {
  // don't require extension when importing
  'import/extensions': ['error', 'always', {
    'js': 'never',
    'jsx': 'never',
    'jx': 'never',
    'ts': 'never',
    'tsx': 'never',
    'tx': 'never',
  }],
  // 'import/no-cycle': ['error', { maxDepth: 1 }],
  'import/no-cycle': 'off',
  // allow optionalDependencies
  'import/no-extraneous-dependencies': ['error', {
    'optionalDependencies': ['test/unit/index.js']
  }],
  // allow single export
  'import/prefer-default-export': 'off',
};
