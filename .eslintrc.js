module.exports = {
  extends: [
    'prettier',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:import/typescript',
    'plugin:jsx-a11y/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 11,
    sourceType: 'module',
    extraFileExtensions: ['.mjs']
  },
  rules: {
    '@typescript-eslint/strict-boolean-expressions': 'off',
    '@typescript-eslint/consistent-type-definitions': 'off'
  }
}
