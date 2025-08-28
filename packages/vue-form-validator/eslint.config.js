import vueConfig from '@convidera-team/eslint-config-vue3-convidera';

export default [
  // Vue 3 configuration
  ...vueConfig,

  // Project-specific configuration
  {
    files: [
      '**/*.vue',
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
