# ESLint 9 Implementation Guide

## Overview
This guide provides step-by-step instructions for migrating the existing ESLint configuration to ESLint 9's flat config format, replacing unmaintained dependencies with modern alternatives.

## Step 1: Update Dependencies

### 1.1 Update Base Config Package
```json
{
  "name": "@convidera-team/eslint-config-convidera",
  "version": "1.5.1",
  "type": "module",
  "main": "eslint.config.js",
  "dependencies": {
    "@eslint/js": "^9.0.0",
    "eslint-plugin-import": "^2.32.0",
    "globals": "^15.0.0"
  },
  "peerDependencies": {
    "eslint": ">=9"
  }
}
```

### 1.2 Update TypeScript Config Package
```json
{
  "name": "@convidera-team/eslint-config-ts-convidera",
  "version": "1.1.3",
  "type": "module",
  "main": "eslint.config.js",
  "dependencies": {
    "@convidera-team/eslint-config-convidera": "^1.5.1",
    "@typescript-eslint/eslint-plugin": "^8.35.0",
    "@typescript-eslint/parser": "^8.35.0",
    "typescript": "^5.8.3"
  },
  "peerDependencies": {
    "eslint": ">=9"
  }
}
```

### 1.3 Update Vue Config Package
```json
{
  "name": "@convidera-team/eslint-config-vue3-convidera",
  "version": "2.0.1",
  "type": "module",
  "main": "eslint.config.js",
  "dependencies": {
    "@convidera-team/eslint-config-ts-convidera": "^1.1.3",
    "eslint-plugin-vue": "^10.2.0",
    "vue-eslint-parser": "^9.4.2"
  },
  "peerDependencies": {
    "eslint": ">=9"
  }
}
```

## Step 2: Create Flat Config Files

### 2.1 Base Config (`packages/eslint-config-convidera/eslint.config.js`)
```javascript
import js from '@eslint/js';
import importPlugin from 'eslint-plugin-import';
import globals from 'globals';

export default [
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.es6,
        ...globals.node,
      },
    },
    plugins: {
      import: importPlugin,
    },
    rules: {
      // Custom brace style rules
      'brace-style': [
        'error',
        '1tbs',
        { allowSingleLine: false },
      ],
      
      // Import rules
      'import/prefer-default-export': 'off',
      'import/no-extraneous-dependencies': 'off',
      
      // Control structure rules
      curly: ['error', 'all'],
      
      // Array formatting rules
      'array-element-newline': ['error', 'always'],
      'array-bracket-newline': [
        'error',
        { multiline: true, minItems: 1 },
      ],
      
      // Object formatting rules
      'object-property-newline': [2, { allowAllPropertiesOnSameLine: false }],
      'object-curly-newline': [
        'error',
        {
          ObjectExpression: { multiline: true, minProperties: 1 },
          ObjectPattern: { multiline: true, minProperties: 1 },
          ImportDeclaration: { multiline: true, minProperties: 1 },
          ExportDeclaration: { multiline: true, minProperties: 1 },
        },
      ],
      
      // Console and logging rules
      'no-console': [
        'warn',
        { allow: ['warn', 'error'] },
      ],
      
      // Style rules
      'linebreak-style': [2, 'unix'],
      'arrow-body-style': 0,
      'prefer-destructuring': 0,
      
      // Syntax rules
      'no-restricted-syntax': [
        'off',
        'ForOfStatement',
        'ForInStatement',
      ],
    },
  },
];
```

### 2.2 TypeScript Config (`packages/eslint-config-ts-convidera/eslint.config.js`)
```javascript
import baseConfig from '@convidera-team/eslint-config-convidera/eslint.config.js';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsparser from '@typescript-eslint/parser';

export default [
  ...baseConfig,
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.mts'],
    languageOptions: {
      parser: tsparser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    plugins: {
      '@typescript-eslint': tseslint,
    },
    rules: {
      // Disable base rules in favor of TypeScript versions
      'no-shadow': 'off',
      '@typescript-eslint/no-shadow': 'error',
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'error',
      
      // Import rules for TypeScript
      'import/extensions': 'off',
      'import/no-unresolved': 'off',
    },
  },
];
```

### 2.3 Vue Config (`packages/eslint-config-vue3-convidera/eslint.config.js`)
```javascript
import tsConfig from '@convidera-team/eslint-config-ts-convidera/eslint.config.js';
import vue from 'eslint-plugin-vue';
import vueParser from 'vue-eslint-parser';
import tsparser from '@typescript-eslint/parser';

export default [
  ...tsConfig,
  {
    files: ['**/*.vue'],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: tsparser,
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
      globals: {
        'vue/setup-compiler-macros': 'readonly',
      },
    },
    plugins: {
      vue,
    },
    rules: {
      // Vue-specific rules
      'vue/multi-word-component-names': 0,
      'vue/component-name-in-template-casing': [
        'error',
        'kebab-case',
        {
          registeredComponentsOnly: false,
          ignores: [],
        },
      ],
    },
  },
];
```

### 2.4 Utils Package Config (`packages/utils/eslint.config.js`)
```javascript
import tsConfig from '@convidera-team/eslint-config-ts-convidera/eslint.config.js';

export default [
  ...tsConfig,
  {
    ignores: ['dist/**', 'node_modules/**'],
  },
];
```

### 2.5 Vue Form Validator Config (`packages/vue-form-validator/eslint.config.js`)
```javascript
import vueConfig from '@convidera-team/eslint-config-vue3-convidera/eslint.config.js';

export default [
  ...vueConfig,
  {
    ignores: ['dist/**', 'node_modules/**'],
  },
];
```

## Step 3: Update Package.json Files

### 3.1 Update Utils Package
```json
{
  "name": "@convidera-team/utils",
  "version": "1.0.3",
  "type": "module",
  // ... rest of existing config
}
```

### 3.2 Update Vue Form Validator Package
```json
{
  "name": "@convidera-team/vue-form-validator",
  "version": "1.1.5",
  "type": "module",
  // ... rest of existing config
}
```

## Step 4: Remove Old Config Files

After creating the new flat config files, remove the old configuration files:
- `packages/eslint-config-convidera/index.js`
- `packages/eslint-config-ts-convidera/index.js`
- `packages/eslint-config-vue3-convidera/index.js`
- `packages/utils/.eslintrc.js`
- `packages/vue-form-validator/.eslintrc.js`

## Step 5: Update Lint Scripts

Update the lint scripts in package.json files to remove the `--ignore-path` flag:

```json
{
  "scripts": {
    "lint": "eslint --ext .js,.vue,.ts .",
    "lint:js": "eslint --ext .js,.vue,.ts .",
    "lint:js:fix": "yarn lint:js --fix"
  }
}
```

## Step 6: Test and Validate

### 6.1 Install Dependencies
```bash
yarn install
```

### 6.2 Test Builds
```bash
yarn workspaces foreach run build
```

### 6.3 Test Linting
```bash
yarn workspaces foreach run lint
```

### 6.4 Fix Any Issues
- Address any rule compatibility issues
- Fix import/export problems
- Resolve plugin configuration issues

## Key Differences from Old Config

### 1. No More Extends
- Instead of `extends: ['airbnb-base']`, we import and spread configs
- Direct plugin imports instead of string references

### 2. File-based Configuration
- Use `files` patterns instead of `env` settings
- Explicit file extensions in imports

### 3. ES Modules
- All configs use ES module syntax
- Package.json must have `"type": "module"`

### 4. Plugin Imports
- Plugins must be imported and explicitly provided
- No automatic plugin resolution

## Troubleshooting

### Common Issues

1. **Import Resolution Errors**
   - Ensure all dependencies are installed
   - Check that plugins are properly imported

2. **Rule Not Found Errors**
   - Verify plugin is imported and provided in config
   - Check rule names for ESLint 9 compatibility

3. **Parser Errors**
   - Ensure parser is properly configured
   - Check parser options compatibility

4. **Module Resolution Issues**
   - Verify `"type": "module"` in package.json
   - Check import paths and extensions

### Validation Checklist

- [ ] All packages build successfully
- [ ] Linting works without errors
- [ ] All custom rules are preserved
- [ ] TypeScript parsing works correctly
- [ ] Vue parsing works correctly
- [ ] Import/export rules work as expected
- [ ] No functionality is lost from original config 