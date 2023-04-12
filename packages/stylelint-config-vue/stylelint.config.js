module.exports = {
  extends: [
    'stylelint-config-standard-scss',
    'stylelint-config-html/vue',
    '@convidera-team/stylelint-config-convidera',
  ],
  rules: {
    'scss/dollar-variable-empty-line-before': null,
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: [
          'deep',
          'global',
        ],
      },
    ],
    'selector-pseudo-element-no-unknown': [
      true,
      {
        ignorePseudoElements: [
          'v-deep',
          'v-global',
          'v-slotted',
        ],
      },
    ],
  },
};
