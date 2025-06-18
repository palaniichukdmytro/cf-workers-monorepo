const { resolve } = require('node:path')
const project = resolve(process.cwd(), 'tsconfig.json')

/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: [
    './index.js',
    'eslint:recommended',
    'prettier',
    'plugin:react-hooks/recommended',
    'plugin:@next/next/recommended',
  ],
  globals: {
    React: true,
    JSX: true,
  },
  env: {
    node: true,
    browser: true,
  },
  plugins: [
    'react',
    'jsx-a11y',
    '@typescript-eslint',
    'only-warn',
    '@typescript-eslint',
  ],
  settings: {
    'import/resolver': {
      typescript: {
        project,
      },
    },
  },
  ignorePatterns: ['.*.js', 'node_modules/'],
  overrides: [
    {
      files: ['*.js?(x)', '*.ts?(x)'],
      rules: {
        '@next/next/no-page-custom-font': ['off'],
        '@next/next/no-img-element': 'off',
        '@next/next/no-html-link-for-pages': 'off',
        'no-unused-vars': ['off'],
        '@typescript-eslint/no-unused-vars': [
          'warn',
          {
            args: 'all',
            argsIgnorePattern: '^_',
            varsIgnorePattern: '^_',
            destructuredArrayIgnorePattern: '^_',
            caughtErrors: 'all',
            caughtErrorsIgnorePattern: '^_',
            ignoreRestSiblings: true,
          },
        ],
      },
    },
  ],
}
