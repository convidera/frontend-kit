import tsConfig from '@convidera-team/eslint-config-ts-convidera';

export default [
  // TypeScript configuration
  ...tsConfig,

  // Project-specific configuration
  {
    files: [
      '**/*.ts',
      '**/*.tsx',
      '**/*.mts',
      '**/*.js',
      '**/*.jsx',
      '**/*.mjs',
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
