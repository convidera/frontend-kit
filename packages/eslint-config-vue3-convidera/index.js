module.exports = {
  env: {
    'vue/setup-compiler-macros': true,
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  extends: [
    '@convidera-team/eslint-config-ts-convidera',
    'plugin:vue/vue3-recommended',
  ],
  rules: {
    'vue/script-setup-uses-vars': 'error',
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
};
