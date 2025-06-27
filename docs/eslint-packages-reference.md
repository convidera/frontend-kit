# ESLint Configuration Packages Reference

This document provides a comprehensive reference for all ESLint configuration packages in the frontend-kit repository, including their intended usage, rules, and examples.

## Package Overview

The repository provides three hierarchical ESLint configuration packages:

1. **@convidera-team/eslint-config-convidera** - Base JavaScript configuration
2. **@convidera-team/eslint-config-ts-convidera** - TypeScript configuration
3. **@convidera-team/eslint-config-vue3-convidera** - Vue 3 configuration

## 1. @convidera-team/eslint-config-convidera

### Purpose
Base ESLint configuration for JavaScript projects. Provides foundational rules and coding standards that are common across all JavaScript codebases.

### Intended Usage
- **JavaScript projects** (Node.js, browser, or universal)
- **Base configuration** for other specialized configs
- **Standard coding practices** enforcement

### Installation
```bash
npm install --save-dev @convidera-team/eslint-config-convidera
```

### Basic Usage
```javascript
// .eslintrc.js
module.exports = {
  extends: ['@convidera-team/eslint-config-convidera'],
};
```

### Key Rules and Standards

#### Code Style Rules
- **Brace Style**: 1tbs (one true brace style) with no single-line braces
  ```javascript
  // ✅ Correct
  if (condition) {
    doSomething();
  }
  
  // ❌ Incorrect
  if (condition) doSomething();
  ```

- **Curly Braces**: Required for all control structures
  ```javascript
  // ✅ Correct
  if (condition) {
    return true;
  }
  
  // ❌ Incorrect
  if (condition) return true;
  ```

#### Array and Object Formatting
- **Array Elements**: Always require newlines between elements
  ```javascript
  // ✅ Correct
  const array = [
    'item1',
    'item2',
    'item3',
  ];
  
  // ❌ Incorrect
  const array = ['item1', 'item2', 'item3'];
  ```

- **Array Brackets**: Multiline arrays with minimum 1 item
  ```javascript
  // ✅ Correct
  const array = [
    'item',
  ];
  
  // ✅ Also correct (single item can be on one line)
  const array = ['item'];
  ```

- **Object Properties**: No properties on the same line
  ```javascript
  // ✅ Correct
  const object = {
    key1: 'value1',
    key2: 'value2',
  };
  
  // ❌ Incorrect
  const object = { key1: 'value1', key2: 'value2' };
  ```

- **Object Curly Braces**: Multiline objects with minimum 1 property
  ```javascript
  // ✅ Correct
  const object = {
    key: 'value',
  };
  
  // ✅ Also correct (single property can be on one line)
  const object = { key: 'value' };
  ```

#### Import/Export Rules
- **Prefer Default Export**: Disabled (allows named exports)
- **No Extraneous Dependencies**: Disabled (allows dev dependencies in production)

#### Console and Logging
- **Console Usage**: Warning (allows `console.warn` and `console.error`)
  ```javascript
  // ✅ Allowed
  console.warn('Warning message');
  console.error('Error message');
  
  // ⚠️ Warning
  console.log('Debug message');
  ```

#### Line Endings and Style
- **Line Break Style**: Unix (LF)
- **Arrow Body Style**: Disabled (allows implicit returns)
- **Prefer Destructuring**: Disabled (allows direct property access)

#### Syntax Restrictions
- **For...of and For...in**: Allowed (no restrictions)
  ```javascript
  // ✅ Allowed
  for (const item of array) {
    console.log(item);
  }
  
  for (const key in object) {
    console.log(key);
  }
  ```

## 2. @convidera-team/eslint-config-ts-convidera

### Purpose
TypeScript-specific ESLint configuration that extends the base config with TypeScript-aware rules and best practices.

### Intended Usage
- **TypeScript projects** (Node.js, browser, or universal)
- **Type-safe development** with enhanced linting
- **Modern TypeScript practices** enforcement

### Installation
```bash
npm install --save-dev @convidera-team/eslint-config-ts-convidera
```

### Dependencies
This package requires:
- `@typescript-eslint/eslint-plugin`
- `@typescript-eslint/parser`
- `typescript`

### Basic Usage
```javascript
// .eslintrc.js
module.exports = {
  extends: ['@convidera-team/eslint-config-ts-convidera'],
};
```

### Key Rules and Standards

#### TypeScript-Specific Rules
- **No Shadow**: Uses TypeScript-aware shadow checking
  ```typescript
  // ✅ Correct
  const name = 'John';
  function greet(name: string) {
    return `Hello ${name}`;
  }
  
  // ❌ Incorrect (shadowing)
  const name = 'John';
  function greet(name: string) {
    const name = 'Jane'; // Shadows outer name
    return `Hello ${name}`;
  }
  ```

- **No Unused Variables**: TypeScript-aware unused variable detection
  ```typescript
  // ✅ Correct
  const usedVariable = 'value';
  console.log(usedVariable);
  
  // ❌ Incorrect
  const unusedVariable = 'value'; // Unused variable
  ```

#### Import Rules for TypeScript
- **Extensions**: Disabled (TypeScript handles extensions)
  ```typescript
  // ✅ Correct
  import { something } from './module';
  
  // ✅ Also correct
  import { something } from './module.js';
  ```

- **No Unresolved**: Disabled (TypeScript handles resolution)
  ```typescript
  // ✅ Correct (TypeScript will resolve this)
  import { Component } from 'vue';
  ```

#### Parser Configuration
- **Parser**: `@typescript-eslint/parser`
- **File Extensions**: `.ts`, `.tsx`, `.mts`
- **ECMAScript Version**: Latest
- **Source Type**: Module

## 3. @convidera-team/eslint-config-vue3-convidera

### Purpose
Vue 3-specific ESLint configuration that extends the TypeScript config with Vue 3 best practices and template linting.

### Intended Usage
- **Vue 3 projects** with TypeScript
- **Single File Components** (SFC)
- **Vue 3 Composition API** and `<script setup>`

### Installation
```bash
npm install --save-dev @convidera-team/eslint-config-vue3-convidera
```

### Dependencies
This package requires:
- `eslint-plugin-vue`
- `vue-eslint-parser`
- `@typescript-eslint/parser`

### Basic Usage
```javascript
// .eslintrc.js
module.exports = {
  extends: ['@convidera-team/eslint-config-vue3-convidera'],
};
```

### Key Rules and Standards

#### Vue-Specific Rules
- **Multi-word Component Names**: Disabled (allows single-word components)
  ```vue
  <!-- ✅ Allowed -->
  <template>
    <div>Content</div>
  </template>
  
  <script setup lang="ts">
  // Component can be named anything
  </script>
  ```

- **Component Name in Template Casing**: Kebab-case required
  ```vue
  <!-- ✅ Correct -->
  <template>
    <my-component />
    <user-profile-card />
  </template>
  
  <!-- ❌ Incorrect -->
  <template>
    <MyComponent />
    <userProfileCard />
  </template>
  ```

#### Parser Configuration
- **Parser**: `vue-eslint-parser`
- **Script Parser**: `@typescript-eslint/parser`
- **File Extensions**: `.vue`
- **ECMAScript Version**: Latest
- **Source Type**: Module

#### Vue Environment
- **Setup Compiler Macros**: Available
  ```vue
  <script setup lang="ts">
  // ✅ These are available
  defineProps<{ title: string }>();
  defineEmits<{ click: [] }>();
  defineExpose({ method });
  </script>
  ```

## Package Hierarchy

```
@convidera-team/eslint-config-convidera (Base)
    ↓
@convidera-team/eslint-config-ts-convidera (TypeScript)
    ↓
@convidera-team/eslint-config-vue3-convidera (Vue 3)
```

### Inheritance Rules
- Each package extends the previous one
- Rules can be overridden by subsequent packages
- TypeScript config adds TypeScript-specific rules to base
- Vue config adds Vue-specific rules to TypeScript

## Usage Examples

### JavaScript Project
```javascript
// .eslintrc.js
module.exports = {
  extends: ['@convidera-team/eslint-config-convidera'],
  // Add project-specific rules here
};
```

### TypeScript Project
```javascript
// .eslintrc.js
module.exports = {
  extends: ['@convidera-team/eslint-config-ts-convidera'],
  // Add project-specific rules here
};
```

### Vue 3 + TypeScript Project
```javascript
// .eslintrc.js
module.exports = {
  extends: ['@convidera-team/eslint-config-vue3-convidera'],
  // Add project-specific rules here
};
```

### Monorepo Usage
```javascript
// Root .eslintrc.js
module.exports = {
  root: true,
  extends: ['@convidera-team/eslint-config-ts-convidera'],
};

// Vue package .eslintrc.js
module.exports = {
  extends: ['@convidera-team/eslint-config-vue3-convidera'],
};
```

## Configuration Overrides

### Disabling Specific Rules
```javascript
module.exports = {
  extends: ['@convidera-team/eslint-config-convidera'],
  rules: {
    'no-console': 'off', // Disable console warnings
    'curly': 'off', // Allow implicit returns
  },
};
```

### Adding Custom Rules
```javascript
module.exports = {
  extends: ['@convidera-team/eslint-config-ts-convidera'],
  rules: {
    'prefer-const': 'error', // Enforce const over let
    'no-var': 'error', // Disallow var
  },
};
```

### Environment-Specific Configuration
```javascript
module.exports = {
  extends: ['@convidera-team/eslint-config-convidera'],
  env: {
    jest: true, // Add Jest globals
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
  },
};
```

## Best Practices

### 1. Use the Appropriate Package
- Use base config for JavaScript-only projects
- Use TypeScript config for TypeScript projects
- Use Vue config for Vue 3 projects

### 2. Extend, Don't Override
- Extend the configs rather than copying rules
- Override specific rules as needed
- Maintain consistency across projects

### 3. Project-Specific Rules
- Add project-specific rules in your local config
- Document any significant rule changes
- Consider creating a custom config for repeated patterns

### 4. Version Management
- Keep all packages updated to the same major version
- Test rule changes before updating
- Review breaking changes in release notes

## Troubleshooting

### Common Issues

1. **Parser Errors**
   - Ensure correct parser is installed
   - Check file extensions are supported
   - Verify TypeScript configuration

2. **Rule Not Found**
   - Check if plugin is installed
   - Verify rule name is correct
   - Ensure plugin is properly configured

3. **Import Resolution**
   - Check TypeScript configuration
   - Verify module resolution settings
   - Ensure file extensions are correct

### Getting Help
- Check the package documentation
- Review ESLint and plugin documentation
- Test with minimal configuration
- Use ESLint's `--debug` flag for detailed output 