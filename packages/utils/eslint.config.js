import tsConfig from '@convidera-team/eslint-config-ts-convidera';

export default [
  // TypeScript configuration
  ...tsConfig,

  // Project-specific configuration
  {
    files: [
      '**/*.ts',
      '**/*.tsx',
      '**/*.js',
      '**/*.jsx',
    ],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
  },
  // Ignore patterns
  {
    ignores: [
      'dist/**',
      'node_modules/**',
      'coverage/**',
    ],
  },
];
