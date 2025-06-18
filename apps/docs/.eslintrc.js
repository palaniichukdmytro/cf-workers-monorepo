module.exports = {
  root: true,
  extends: [
    'eslint-config/next.js',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: true,
  },
  env: {
    es6: true,
    browser: true,
  },
  ignorePatterns: ['node_modules, *.d.ts'],
}
