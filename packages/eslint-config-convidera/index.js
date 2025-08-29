import js from '@eslint/js';
import importPlugin from 'eslint-plugin-import';
import { configs } from 'eslint-config-airbnb-extended/legacy';
import globals from 'globals';

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
        'error',
        'unix',
      ],
      'arrow-body-style': 'off',
      'prefer-destructuring': 'off',

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
        'error',
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

  // Environment configuration
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.es2022,
        ...globals.browser,
        ...globals.node,
      },
    },
  },
];
