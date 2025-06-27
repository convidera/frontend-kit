# ESLint Rules Reference

This document provides a comprehensive reference of all ESLint rules used in the configuration packages, including their settings, purposes, and examples.

## Base Config Rules (@convidera-team/eslint-config-convidera)

### Code Style Rules

#### brace-style
**Setting**: `['error', '1tbs', { allowSingleLine: false }]`
**Purpose**: Enforces one true brace style (1tbs) and prevents single-line braces
```javascript
// ✅ Correct
if (condition) {
  doSomething();
}

// ❌ Incorrect
if (condition) doSomething();
```

#### curly
**Setting**: `['error', 'all']`
**Purpose**: Requires curly braces for all control structures
```javascript
// ✅ Correct
if (condition) {
  return true;
}

// ❌ Incorrect
if (condition) return true;
```

#### linebreak-style
**Setting**: `[2, 'unix']`
**Purpose**: Enforces Unix line endings (LF)
```javascript
// ✅ Correct (LF line endings)
const message = 'Hello\nWorld';

// ❌ Incorrect (CRLF line endings)
const message = 'Hello\r\nWorld';
```

#### arrow-body-style
**Setting**: `0`
**Purpose**: Disabled - allows both implicit and explicit returns
```javascript
// ✅ Both allowed
const implicit = () => 'value';
const explicit = () => {
  return 'value';
};
```

#### prefer-destructuring
**Setting**: `0`
**Purpose**: Disabled - allows direct property access
```javascript
// ✅ Both allowed
const name = user.name;
const { name } = user;
```

### Array and Object Formatting

#### array-element-newline
**Setting**: `['error', 'always']`
**Purpose**: Requires newlines between array elements
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

#### array-bracket-newline
**Setting**: `['error', { multiline: true, minItems: 1 }]`
**Purpose**: Requires multiline format for arrays with 1+ items
```javascript
// ✅ Correct
const array = [
  'item',
];

// ✅ Also correct (single item can be on one line)
const array = ['item'];

// ❌ Incorrect
const array = ['item1', 'item2'];
```

#### object-property-newline
**Setting**: `[2, { allowAllPropertiesOnSameLine: false }]`
**Purpose**: Prevents multiple properties on the same line
```javascript
// ✅ Correct
const object = {
  key1: 'value1',
  key2: 'value2',
};

// ❌ Incorrect
const object = { key1: 'value1', key2: 'value2' };
```

#### object-curly-newline
**Setting**: `['error', { ObjectExpression: { multiline: true, minProperties: 1 }, ObjectPattern: { multiline: true, minProperties: 1 }, ImportDeclaration: { multiline: true, minProperties: 1 }, ExportDeclaration: { multiline: true, minProperties: 1 } }]`
**Purpose**: Requires multiline format for objects, patterns, imports, and exports with 1+ properties
```javascript
// ✅ Correct
const object = {
  key: 'value',
};

const { key } = object;

import {
  Component,
  Prop,
} from 'vue';

export {
  Component,
  Prop,
};

// ❌ Incorrect
const object = { key1: 'value1', key2: 'value2' };
const { key1, key2 } = object;
import { Component, Prop } from 'vue';
export { Component, Prop };
```

### Import/Export Rules

#### import/prefer-default-export
**Setting**: `'off'`
**Purpose**: Disabled - allows named exports
```javascript
// ✅ Both allowed
export default Component;
export { Component, Prop };
```

#### import/no-extraneous-dependencies
**Setting**: `'off'`
**Purpose**: Disabled - allows dev dependencies in production
```javascript
// ✅ Allowed
import { describe, it } from 'vitest'; // dev dependency
```

### Console and Logging

#### no-console
**Setting**: `['warn', { allow: ['warn', 'error'] }]`
**Purpose**: Warns about console usage, but allows warn and error
```javascript
// ✅ Allowed
console.warn('Warning message');
console.error('Error message');

// ⚠️ Warning
console.log('Debug message');
console.info('Info message');
```

### Syntax Restrictions

#### no-restricted-syntax
**Setting**: `['off', 'ForOfStatement', 'ForInStatement']`
**Purpose**: Disabled for for...of and for...in loops
```javascript
// ✅ Allowed
for (const item of array) {
  console.log(item);
}

for (const key in object) {
  console.log(key);
}
```

## TypeScript Config Rules (@convidera-team/eslint-config-ts-convidera)

### TypeScript-Specific Rules

#### no-shadow
**Setting**: `'off'`
**Purpose**: Disabled in favor of TypeScript-aware version
```typescript
// ✅ Correct (TypeScript handles shadowing)
const name = 'John';
function greet(name: string) {
  return `Hello ${name}`;
}
```

#### @typescript-eslint/no-shadow
**Setting**: `'error'`
**Purpose**: TypeScript-aware shadow checking
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

#### no-unused-vars
**Setting**: `'off'`
**Purpose**: Disabled in favor of TypeScript-aware version
```typescript
// ✅ Correct (TypeScript handles unused variables)
const usedVariable = 'value';
console.log(usedVariable);
```

#### @typescript-eslint/no-unused-vars
**Setting**: `'error'`
**Purpose**: TypeScript-aware unused variable detection
```typescript
// ✅ Correct
const usedVariable = 'value';
console.log(usedVariable);

// ❌ Incorrect
const unusedVariable = 'value'; // Unused variable
```

### Import Rules for TypeScript

#### import/extensions
**Setting**: `'off'`
**Purpose**: Disabled - TypeScript handles extensions
```typescript
// ✅ Both allowed
import { something } from './module';
import { something } from './module.js';
```

#### import/no-unresolved
**Setting**: `'off'`
**Purpose**: Disabled - TypeScript handles resolution
```typescript
// ✅ Correct (TypeScript will resolve this)
import { Component } from 'vue';
import { something } from './module';
```

## Vue Config Rules (@convidera-team/eslint-config-vue3-convidera)

### Vue-Specific Rules

#### vue/multi-word-component-names
**Setting**: `0`
**Purpose**: Disabled - allows single-word component names
```vue
<!-- ✅ Allowed -->
<template>
  <div>Content</div>
</template>

<script setup lang="ts">
// Component can be named anything
</script>
```

#### vue/component-name-in-template-casing
**Setting**: `['error', 'kebab-case', { registeredComponentsOnly: false, ignores: [] }]`
**Purpose**: Requires kebab-case for component names in templates
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

### Vue Environment

#### vue/setup-compiler-macros
**Setting**: Available as global
**Purpose**: Provides access to Vue 3 setup compiler macros
```vue
<script setup lang="ts">
// ✅ These are available
defineProps<{ title: string }>();
defineEmits<{ click: [] }>();
defineExpose({ method });
</script>
```

## Inherited Rules from Base Configs

### From @eslint/js recommended
The base config extends `@eslint/js` recommended, which includes:

#### no-unused-vars
**Setting**: `'error'` (overridden by TypeScript config)
**Purpose**: Reports variables that are declared but never used

#### no-undef
**Setting**: `'error'`
**Purpose**: Reports use of undefined variables

#### no-console
**Setting**: `'warn'` (overridden by base config)
**Purpose**: Warns about console usage

#### no-debugger
**Setting**: `'error'`
**Purpose**: Reports debugger statements

### From eslint-plugin-import
The base config includes eslint-plugin-import with:

#### import/no-duplicates
**Setting**: `'error'`
**Purpose**: Prevents duplicate imports

#### import/order
**Setting**: `'error'`
**Purpose**: Enforces import order

#### import/no-unresolved
**Setting**: `'error'` (overridden by TypeScript config)
**Purpose**: Reports unresolved imports

### From @typescript-eslint/eslint-plugin
The TypeScript config includes:

#### @typescript-eslint/no-explicit-any
**Setting**: `'warn'`
**Purpose**: Warns about use of `any` type

#### @typescript-eslint/prefer-const
**Setting**: `'error'`
**Purpose**: Prefers `const` over `let` when variables are never reassigned

#### @typescript-eslint/no-unused-vars
**Setting**: `'error'`
**Purpose**: TypeScript-aware unused variable detection

### From eslint-plugin-vue
The Vue config includes Vue 3 recommended rules:

#### vue/no-unused-vars
**Setting**: `'error'`
**Purpose**: Reports unused variables in Vue components

#### vue/no-unused-components
**Setting**: `'error'`
**Purpose**: Reports unused components

#### vue/valid-template-root
**Setting**: `'error'`
**Purpose**: Ensures template has valid root element

## Rule Categories Summary

### Code Style (Base Config)
- **Brace Style**: 1tbs with no single-line
- **Curly Braces**: Required for all control structures
- **Line Endings**: Unix (LF)
- **Arrow Functions**: Both implicit and explicit returns allowed
- **Destructuring**: Both direct access and destructuring allowed

### Formatting (Base Config)
- **Arrays**: Multiline with newlines between elements
- **Objects**: Multiline with properties on separate lines
- **Imports/Exports**: Multiline when multiple items

### Import/Export (Base Config)
- **Default Exports**: Allowed (not preferred)
- **Extraneous Dependencies**: Allowed
- **Extensions**: Handled by TypeScript

### Console and Logging (Base Config)
- **Console Usage**: Warning (warn/error allowed)
- **Debugger**: Error

### TypeScript (TypeScript Config)
- **Shadow Variables**: TypeScript-aware checking
- **Unused Variables**: TypeScript-aware detection
- **Import Resolution**: Handled by TypeScript

### Vue (Vue Config)
- **Component Names**: Single-word allowed
- **Template Casing**: Kebab-case required
- **Setup Macros**: Available
- **Vue 3 Best Practices**: Enforced

## Rule Override Hierarchy

1. **Base Config**: Sets foundational rules
2. **TypeScript Config**: Overrides base rules with TypeScript-aware versions
3. **Vue Config**: Adds Vue-specific rules to TypeScript config

### Example Override Chain
```javascript
// Base config
'no-shadow': 'error'

// TypeScript config overrides
'no-shadow': 'off',
'@typescript-eslint/no-shadow': 'error'

// Vue config inherits TypeScript rules
// and adds Vue-specific rules
```

## Customization Guidelines

### When to Override Rules
- **Project-specific requirements**: Override in local config
- **Team preferences**: Override in shared config
- **Framework requirements**: Override in framework-specific config

### How to Override Rules
```javascript
// Local .eslintrc.js
module.exports = {
  extends: ['@convidera-team/eslint-config-convidera'],
  rules: {
    'no-console': 'off', // Disable console warnings
    'curly': 'off', // Allow implicit returns
  },
};
```

### Rule Severity Levels
- **'off'**: Disable the rule
- **'warn'**: Show warning (doesn't fail linting)
- **'error'**: Show error (fails linting)
- **0**: Same as 'off'
- **1**: Same as 'warn'
- **2**: Same as 'error' 