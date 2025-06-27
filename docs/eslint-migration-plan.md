# ESLint 9 Migration Plan

## Current Configuration Analysis

### Package Structure
The repository contains a hierarchical ESLint configuration system with three main config packages:

1. **@convidera-team/eslint-config-convidera** (Base config)
2. **@convidera-team/eslint-config-ts-convidera** (TypeScript config)
3. **@convidera-team/eslint-config-vue3-convidera** (Vue 3 config)

### Current Configuration Details

#### 1. Base Config (`@convidera-team/eslint-config-convidera`)
**Purpose**: Provides the foundation ESLint rules for JavaScript projects.

**Current Configuration**:
- Extends: `airbnb-base`
- Environment: `browser`, `es6`, `node`
- Key Custom Rules:
  - `brace-style`: 1tbs with no single-line braces
  - `import/prefer-default-export`: disabled
  - `import/no-extraneous-dependencies`: disabled
  - `curly`: requires curly braces for all control structures
  - `array-element-newline`: always require newlines between array elements
  - `array-bracket-newline`: multiline arrays with minItems: 1
  - `object-property-newline`: no properties on same line
  - `object-curly-newline`: multiline objects with minProperties: 1
  - `no-console`: warn (allows warn/error)
  - `linebreak-style`: unix
  - `arrow-body-style`: disabled
  - `prefer-destructuring`: disabled
  - `no-restricted-syntax`: disabled for ForOfStatement and ForInStatement

#### 2. TypeScript Config (`@convidera-team/eslint-config-ts-convidera`)
**Purpose**: Extends base config with TypeScript-specific rules.

**Current Configuration**:
- Extends: `@convidera-team/eslint-config-convidera`, `plugin:@typescript-eslint/eslint-recommended`
- Parser: `@typescript-eslint/parser`
- Plugins: `@typescript-eslint`
- Key Custom Rules:
  - `no-shadow`: disabled (uses `@typescript-eslint/no-shadow` instead)
  - `no-unused-vars`: disabled (uses `@typescript-eslint/no-unused-vars` instead)
  - `import/extensions`: disabled
  - `import/no-unresolved`: disabled

#### 3. Vue 3 Config (`@convidera-team/eslint-config-vue3-convidera`)
**Purpose**: Extends TypeScript config with Vue 3-specific rules.

**Current Configuration**:
- Extends: `@convidera-team/eslint-config-ts-convidera`, `plugin:vue/vue3-recommended`
- Parser: `vue-eslint-parser`
- Parser Options: TypeScript parser for script blocks
- Environment: `vue/setup-compiler-macros`
- Key Custom Rules:
  - `vue/script-setup-uses-vars`: error
  - `vue/multi-word-component-names`: disabled
  - `vue/component-name-in-template-casing`: kebab-case

### Package Usage
- **utils**: Uses TypeScript config
- **vue-form-validator**: Uses Vue 3 config

## Migration Strategy

### Phase 1: Replace Unmaintained Dependencies
1. **Replace `eslint-config-airbnb-base`** with a maintained alternative
   - Option 1: Use `eslint-config-standard` + custom rules
   - Option 2: Use `@eslint/js` recommended + custom rules
   - Option 3: Use `eslint-config-prettier` + custom rules

2. **Update peer dependencies** to ESLint 9

### Phase 2: Convert to Flat Config Format
1. **Create `eslint.config.js` files** for each package
2. **Use ES modules** (`type: "module"` in package.json)
3. **Import plugins directly** instead of using string references
4. **Use `files` patterns** instead of `env` and `parserOptions`

### Phase 3: Implement Configuration Hierarchy
1. **Base config**: Core JavaScript rules
2. **TypeScript config**: Extends base + TypeScript rules
3. **Vue config**: Extends TypeScript + Vue rules

## Implementation Plan

### Step 1: Choose Base Configuration
**Recommendation**: Use `@eslint/js` recommended + custom rules
- More maintainable than airbnb-base
- Better ESLint 9 compatibility
- Easier to customize

### Step 2: Create Flat Config Files
1. `packages/eslint-config-convidera/eslint.config.js`
2. `packages/eslint-config-ts-convidera/eslint.config.js`
3. `packages/eslint-config-vue3-convidera/eslint.config.js`
4. `packages/utils/eslint.config.js`
5. `packages/vue-form-validator/eslint.config.js`

### Step 3: Update Dependencies
- Add `@eslint/js`
- Update all packages to `type: "module"`
- Update peer dependencies to `eslint: ">=9"`

### Step 4: Test and Validate
- Ensure all rules are properly migrated
- Test with existing codebase
- Validate that no functionality is lost

## Key Considerations

### Rule Compatibility
- Some rules may have different names in ESLint 9
- Plugin rules may need explicit plugin imports
- Parser options may need adjustment

### Import/Export Handling
- ES modules require explicit file extensions
- Relative imports may need adjustment
- Package imports need proper resolution

### TypeScript Integration
- Ensure TypeScript parser works correctly
- Validate type-aware rules function properly
- Check import resolution for TypeScript files

### Vue Integration
- Ensure Vue parser works with TypeScript
- Validate template and script block parsing
- Check Vue-specific rules compatibility 