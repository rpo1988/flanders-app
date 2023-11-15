const prettierConfig = require('./.prettierrc.js');

module.exports = {
  root: true,
  ignorePatterns: ['projects/**/*'],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  extends: ['plugin:prettier/recommended'],
  rules: {
    'prettier/prettier': ['error', prettierConfig],
  },
  overrides: [
    {
      files: ['*.ts'],
      extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@angular-eslint/recommended',
        'plugin:@angular-eslint/template/process-inline-templates',
        'plugin:prettier/recommended',
      ],
      rules: {
        '@angular-eslint/directive-selector': [
          'error',
          {
            type: 'attribute',
            prefix: 'app',
            style: 'camelCase',
          },
        ],
        '@angular-eslint/component-selector': [
          'error',
          {
            type: 'element',
            prefix: 'app',
            style: 'kebab-case',
          },
        ],
        'prettier/prettier': ['error', prettierConfig],
      },
    },
    {
      files: ['*.js'],
      env: {
        node: true,
      },
      extends: ['eslint:recommended', 'plugin:prettier/recommended'],
    },
    {
      files: ['*.html'],
      extends: [
        'plugin:@angular-eslint/template/recommended',
        'plugin:@angular-eslint/template/accessibility',
        'plugin:prettier/recommended',
      ],
      rules: {
        'prettier/prettier': ['error', { ...prettierConfig, parser: 'angular' }],
      },
    },
  ],
};
