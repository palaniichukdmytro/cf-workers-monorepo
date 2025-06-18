module.exports = {
  env: {
    browser: true,
    jest: true,
    es6: true,
    node: true,
  },
  extends: [
    'plugin:import/recommended',
    'plugin:import/typescript',
    'prettier',
  ],
  plugins: ['@typescript-eslint', 'import', 'turbo'],
  settings: {
    next: {
      rootDir: [
        'apps/web',
        'apps/doc',
        'packages/*/',
      ],
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
      project: [
        'apps/web/tsconfig.json',
        'apps/doc/tsconfig.json',
        'packages/*/tsconfig.json',
      ],
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.ts', '.tsx'],
        project: [
          'apps/web/tsconfig.json',
          'apps/doc/tsconfig.json',
          'packages/*/tsconfig.json',
        ],
      },
      typescript: {
        alwaysTryTypes: true,
        project: [
          'apps/web/tsconfig.json',
          'apps/doc/tsconfig.json',
        ],
      },
    },
  },
  rules: {
    '@typescript-eslint/no-explicit-any': ['off'],
    'no-unused-vars': [
      'error',
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
    '@typescript-eslint/no-shadow': ['error'],
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'enum',
        format: ['camelCase', 'PascalCase', 'UPPER_CASE'], // TODO: make Enum convention
      },
      {
        selector: 'variable',
        format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
        leadingUnderscore: 'allow',
      },
    ],
    '@typescript-eslint/no-throw-literal': 'off',
    '@typescript-eslint/no-redeclare': ['error'],
    '@typescript-eslint/no-use-before-define': ['error'],
    '@typescript-eslint/consistent-type-definitions': ['warn', 'type'],
    // NOTE: you must disable the base rule 'no-use-before-define'
    // as it can report incorrect errors (from https://stackoverflow.com/a/64024916)
    'no-use-before-define': 'off',
    'keyword-spacing': ['error'],
    'prefer-const': 'error',
    'react/function-component-definition': ['off'],
    'react-hooks/exhaustive-deps': 'warn',
    'react/react-in-jsx-scope': ['off'],
    'react/require-default-props': 'off',
    'react/state-in-constructor': 'off',
    'react/prop-types': ['off'],
    'react/no-danger': 'off',
    'react/no-unescaped-entities': 'off',
    'react/jsx-curly-brace-presence': 'warn',
    'react/jsx-props-no-spreading': ['off'],
    'react/jsx-filename-extension': [
      'error',
      { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
    ],
    'import/no-extraneous-dependencies': ['off'],
    'import/prefer-default-export': 'off',
    'import/no-useless-path-segments': ['error'],
    'import/no-named-as-default': ['warn'],
    'arrow-body-style': ['warn'],
    'class-methods-use-this': 'off',
    'consistent-return': 'off',
    'no-shadow': 'off',
    'no-underscore-dangle': 'off',
    'no-console': 'warn',
    'no-continue': 'warn',
    'no-html-link-for-pages': ['off'],
    'no-restricted-syntax': ['warn'],
    'jsx-a11y/media-has-caption': ['off'],
    semi: [1, 'never'],
  },
  overrides: [
    {
      files: ['*.js'],
      rules: {
        '@typescript-eslint/no-unused-vars': 'off',
      },
    },
    {
      // We enable eslint-plugin-testing-library rules or preset only for matching files!
      env: {
        jest: true,
      },
      files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
      extends: ['plugin:testing-library/react', 'plugin:jest/recommended'],
      rules: {
        'import/no-extraneous-dependencies': [
          'off',
          { devDependencies: ['**/?(*.)+(spec|test).[jt]s?(x)'] },
        ],
        'testing-library/render-result-naming-convention': 'off',
        'jest/no-identical-title': 'off',
      },
    },
  ],
  ignorePatterns: [
    '**/*.js', // TODO: remove from ignore validating js files
    '**/*.d.ts',
    '**/*.json',
    'node_modules',
    'public',
    'coverage',
    'locales',
    'dist',
    '.next',
    '.build',
    '.turbo',
  ],
}
