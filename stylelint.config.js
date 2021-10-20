module.exports = {
  plugins: ['stylelint-a11y'],
  extends: [
    'stylelint-config-standard',
    'stylelint-a11y/recommended',
    'stylelint-config-sass-guidelines',
    'stylelint-config-prettier',
  ],
  rules: {
    'at-rule-empty-line-before': [
      'always',
      {
        except: ['blockless-after-same-name-blockless', 'first-nested'],
        ignore: ['after-comment'],
      },
    ],
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'tailwind',
          'apply',
          'variants',
          'responsive',
          'screen',
          'extends',
          'include',
        ],
      },
    ],
    'color-named': ['never', { severity: 'warning' }],
    'max-nesting-depth': 3,
    'order/properties-alphabetical-order': null,
    'selector-class-pattern': null,
    'selector-max-id': null,
    indentation: [2],
  },
};
