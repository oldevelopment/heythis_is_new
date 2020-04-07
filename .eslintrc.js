module.exports = {
  root: true,
  env: {
    node: true,
    mocha: true,
    es6: true
  },
  extends: [
    'plugin:vue/essential',
    'eslint:recommended',
    '@vue/typescript/recommended',
    '@vue/prettier',
    '@vue/prettier/@typescript-eslint',
  ],
  "plugins": ["chai-friendly"],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        trailingComma: 'all',
        tabWidth: 2,
        printWidth: 100,
        bracketSpacing: true,
        useTabs: false,
      },
    ],
  },
  overrides: [
    {
      files: ['**/test/*.{j,t}s?(x)', '**/test/*.*', '**/models/*.*', '**/tests/unit/**/*.spec.{j,t}s?(x)'],
      env: {
        mocha: true,
      },
    },
  ],
};
