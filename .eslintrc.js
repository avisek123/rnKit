module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'airbnb',
    'airbnb-typescript',
    'airbnb-typescript/base',
  ],
  plugins: ['@typescript-eslint', 'react'],
  parser: '@typescript-eslint/parser',
  rules: {
    '@typescript-eslint/quotes': 0,
    '@typescript-eslint/comma-dangle': 0,
    'react/function-component-definition': 0,
    'object-curly-newline': 0,
    'react/jsx-props-no-spreading': 0,
    'import/no-cycle': 0,
    '@typescript-eslint/no-shadow': ['error'],
    'no-shadow': 0,
    'no-undef': 0,
  },
};
