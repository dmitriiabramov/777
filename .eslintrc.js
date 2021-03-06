module.exports = {
  rules: {
    indent: [2, 2],
    quotes: [2, 'single'],
    'linebreak-style': [2, 'unix'],
    semi: [2, 'always'],
    'comma-dangle': [2, 'always-multiline'],
  },
  env: {
    es6: true,
    node: true,
    browser: true,
  },
  extends: 'eslint:recommended',
  ecmaFeatures: {
    modules: true,
    jsx: true,
    experimentalObjectRestSpread: true,
  },
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
  },
};
