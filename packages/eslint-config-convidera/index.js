import js from '@eslint/js';
import importPlugin from 'eslint-plugin-import';
import { configs } from 'eslint-config-airbnb-extended/legacy';

export default [
  // Base recommended rules
  js.configs.recommended,
  ...configs.base.recommended,

  // Import plugin configuration
  {
    plugins: {
      import: importPlugin,
    },
    rules: {
      // Import rules
      'import/no-duplicates': 'error',
      'import/order': 'error',
      'import/prefer-default-export': 'off',
      'import/no-extraneous-dependencies': 'off',
    },
  },
  
  // Custom rules
  {
    rules: {
      // Code style rules
      'brace-style': [
        'error',
        '1tbs',
        {
          allowSingleLine: false,
        },
      ],
      curly: [
        'error',
        'all',
      ],
      'linebreak-style': [
        2,
        'unix',
      ],
      'arrow-body-style': 0,
      'prefer-destructuring': 0,
      
      // Array and object formatting
      'array-element-newline': [
        'error',
        'always',
      ],
      'array-bracket-newline': [
        'error',
        {
          multiline: true,
          minItems: 1,
        },
      ],
      'object-property-newline': [
        2,
        {
          allowAllPropertiesOnSameLine: false,
        },
      ],
      'object-curly-newline': [
        'error',
        {
          ObjectExpression: {
            multiline: true,
            minProperties: 1,
          },
          ObjectPattern: {
            multiline: true,
            minProperties: 1,
          },
          ImportDeclaration: {
            multiline: true,
            minProperties: 1,
          },
          ExportDeclaration: {
            multiline: true,
            minProperties: 1,
          },
        },
      ],
      
      // Console and logging
      'no-console': [
        'warn',
        {
          allow: [
            'warn',
            'error',
          ],
        },
      ],
      
      // Syntax restrictions
      'no-restricted-syntax': [
        'off',
        'ForOfStatement',
        'ForInStatement',
      ],
    },
  },
  
  // Global configuration
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        // Browser globals
        window: 'readonly',
        document: 'readonly',
        console: 'readonly',
        // Node.js globals
        process: 'readonly',
        Buffer: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly',
        global: 'readonly',
        module: 'readonly',
        require: 'readonly',
        exports: 'readonly',
      },
    },
  },
]; 