import baseConfig from '@convidera-team/eslint-config-convidera';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';

export default [
  // Base configuration
  ...baseConfig,
  
  // TypeScript configuration
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.mts'],
    plugins: {
      '@typescript-eslint': tsPlugin,
    },
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    rules: {
      // Disable base rules that conflict with TypeScript
      'no-shadow': 'off',
      'no-unused-vars': 'off',
      
      // TypeScript-specific rules
      '@typescript-eslint/no-shadow': 'error',
      '@typescript-eslint/no-unused-vars': 'error',
      '@typescript-eslint/no-explicit-any': 'warn',
      
      // Import rules for TypeScript
      'import/extensions': 'off',
      'import/no-unresolved': 'off',
    },
  },
]; 