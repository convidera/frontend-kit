module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
  ],
  extends: [
    '@convidera-team/eslint-config-convidera',
    'plugin:@typescript-eslint/eslint-recommended',
  ],

  rules: {
    // @see https://github.com/typescript-eslint/typescript-eslint/issues/2471#issuecomment-696609988
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'error',

    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'error',

    'import/extensions': 'off',
    'import/no-unresolved': 'off',
  },
};
