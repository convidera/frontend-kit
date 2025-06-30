import tsConfig from '@convidera-team/eslint-config-ts-convidera';
import vuePlugin from 'eslint-plugin-vue';
import vueParser from 'vue-eslint-parser';
import tsParser from '@typescript-eslint/parser';

export default [
  // TypeScript configuration
  ...tsConfig,
  
  // Vue configuration
  {
    files: ['**/*.vue'],
    plugins: {
      vue: vuePlugin,
    },
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: tsParser,
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
      globals: {
        // Vue 3 setup compiler macros
        defineProps: 'readonly',
        defineEmits: 'readonly',
        defineExpose: 'readonly',
        withDefaults: 'readonly',
      },
    },
    rules: {
      // Vue-specific custom rules
      'vue/multi-word-component-names': 0,
      'vue/component-name-in-template-casing': [
        'error',
        'kebab-case',
        {
          registeredComponentsOnly: false,
          ignores: [],
        },
      ],
      
      // Include Vue 3 recommended rules from flat config
      ...vuePlugin.configs['flat/recommended'].rules,
    },
  },
]; 