module.exports = {
  extends: [
    'airbnb-base',
  ],
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  rules: {
    'brace-style': [
      'error',
      '1tbs',
      {
        allowSingleLine: false,
      },
    ],
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': 'off',
    curly: [
      'error',
      'all',
    ],
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
    'no-console': [
      'warn',
      {
        allow: [
          'warn',
          'error',
        ],
      },
    ],
    'linebreak-style': [
      2,
      'unix',
    ],
    'arrow-body-style': 0,
    'prefer-destructuring': 0,
  },
};
