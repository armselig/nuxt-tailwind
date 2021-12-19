module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false,
  },
  extends: ['@nuxtjs', 'plugin:nuxt/recommended', 'airbnb-base', 'plugin:prettier/recommended'],
  plugins: [],
  rules: {
    'vue/first-attribute-linebreak': 1,
  },
  settings: {
    'import/resolver': {
      nuxt: {
        extensions: ['.js', '.json', '.jsx', '.mjs', '.ts', '.tsx', '.vue'],
      },
    },
  },
};
