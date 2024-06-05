// @ts-check
const eslint = require('@eslint/js');
const tseslint = require('typescript-eslint');
const angular = require('angular-eslint');
const eslintPluginPrettierRecommended = require('eslint-plugin-prettier/recommended');

module.exports = tseslint.config(
  {
    languageOptions: {
      parserOptions: {
        project: ['**/tsconfig.json'],
        createDefaultProgram: true,
      },
    },
    files: ['**/*.ts'],
    extends: [
      eslintPluginPrettierRecommended,
      eslint.configs.recommended,
      tseslint.configs.eslintRecommended,
      ...tseslint.configs.recommendedTypeChecked,
      ...tseslint.configs.stylisticTypeChecked,
      ...tseslint.configs.strictTypeChecked,
      ...angular.configs.tsAll,
    ],
    processor: angular.processInlineTemplates,
    rules: {
      // plugin:@typescript-eslint
      '@typescript-eslint/naming-convention': [
        'error',
        {
          selector: 'memberLike',
          modifiers: ['private'],
          format: ['camelCase'],
          leadingUnderscore: 'require',
        },
      ],
      // plugin:@angular-eslint/all
      '@angular-eslint/directive-selector': [
        'error',
        {
          type: 'attribute',
          style: 'camelCase',
        },
      ],
      '@angular-eslint/component-selector': [
        'error',
        {
          prefix: 'app',
          style: 'kebab-case',
          type: 'element',
        },
      ],
      // eslint:recommended
      'no-debugger': 'off',
      // eslint:all
      'no-nested-ternary': 'warn',
      'no-unneeded-ternary': 'warn',
      // plugin:@angular-eslint/all
      '@angular-eslint/prefer-standalone': 'off',
      '@angular-eslint/prefer-on-push-component-change-detection': 'off',
      '@angular-eslint/sort-ngmodule-metadata-arrays': 'off',
      '@angular-eslint/prefer-output-readonly': 'off',
      // plugin:@typescript-eslint/recommended
      '@typescript-eslint/unbound-method': 'off',
      '@typescript-eslint/no-floating-promises': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',
      // plugin:@typescript-eslint/strict
      '@typescript-eslint/no-extraneous-class': 'warn',
      '@typescript-eslint/no-useless-constructor': 'warn',
      // plugin:@typescript-eslint/stylistic
      '@typescript-eslint/no-inferrable-types': 'off',
      '@typescript-eslint/consistent-type-assertions': 'warn',
      '@typescript-eslint/consistent-generic-constructors': 'warn',
      '@typescript-eslint/no-empty-function': 'warn',
      '@typescript-eslint/consistent-indexed-object-style': 'warn',
      '@typescript-eslint/class-literal-property-style': 'warn',
      // plugin:@typescript-eslint/stylistic-type-checked
      '@typescript-eslint/dot-notation': 'warn',
      '@typescript-eslint/prefer-nullish-coalescing': 'warn',
    },
  },
  {
    files: ['**/*.html'],
    extends: [eslintPluginPrettierRecommended, ...angular.configs.templateAll],
    rules: {
      // plugin:prettier/recommended
      'prettier/prettier': ['error', { parser: 'angular', endOfLine: 'auto' }],
      // plugin:@angular-eslint/template/all
      '@angular-eslint/template/no-inline-styles': [
        'error',
        {
          allowNgStyle: true,
          allowBindToStyle: true,
        },
      ],
      '@angular-eslint/template/eqeqeq': 'warn',
      '@angular-eslint/template/no-call-expression': 'off',
      '@angular-eslint/template/i18n': 'off',
      '@angular-eslint/template/cyclomatic-complexity': 'warn',
      '@angular-eslint/template/prefer-self-closing-tags': 'off',
      '@angular-eslint/template/prefer-ngsrc': 'warn',
      '@angular-eslint/template/attributes-order': 'off',
      '@angular-eslint/template/elements-content': 'warn',
      '@angular-eslint/template/click-events-have-key-events': 'warn',
      '@angular-eslint/template/interactive-supports-focus': 'warn',
    },
  }
);
