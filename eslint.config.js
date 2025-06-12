import { globalIgnores } from 'eslint/config';
import tseslint from 'typescript-eslint';

import tsParser from '@typescript-eslint/parser';
import typescriptEslintEslintPlugin from '@typescript-eslint/eslint-plugin';
import sonarjs from 'eslint-plugin-sonarjs';
import unusedImports from 'eslint-plugin-unused-imports';
import globals from 'globals';
import stylistic from '@stylistic/eslint-plugin';
import importPlugin from 'eslint-plugin-import';

export default tseslint.config([
  {
    files: ['**/*.{ts,tsx,js,jsx}'],
    languageOptions: {
      parser: tsParser,
      sourceType: 'module',
      parserOptions: {
        project: 'apps/*/tsconfig.json',
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
      globals: {
        ...globals.node,
        ...globals.jest,
      },
    },
    plugins: {
      '@typescript-eslint': typescriptEslintEslintPlugin,
      sonarjs,
      'unused-imports': unusedImports,
      import: importPlugin,
      '@stylistic': stylistic,
    },
    rules: {
      '@typescript-eslint/interface-name-prefix': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      'class-methods-use-this': 'off',
      'consistent-return': 'off',
      'func-names': 'off',
      'newline-per-chained-call': 'off',
      'no-await-in-loop': 'off',
      'no-continue': 'off',

      'no-param-reassign': [
        'error',
        {
          props: false,
        },
      ],

      'no-restricted-syntax': [
        'error',
        'ForInStatement',
        'LabeledStatement',
        'WithStatement',
      ],

      'no-underscore-dangle': [
        'error',
        {
          allow: ['_id'],
        },
      ],

      'no-void': [
        'error',
        {
          allowAsStatement: true,
        },
      ],

      'object-curly-newline': 'off',

      'spaced-comment': [
        'error',
        'always',
        {
          line: {
            markers: ['/', '#region', '#endregion'],
          },
        },
      ],

      'no-dupe-class-members': 'off',
      'no-duplicate-imports': 'off',
      'no-loop-func': 'off',
      'no-return-await': 'off',
      'no-unused-expressions': 'off',
      'object-curly-spacing': 'off',
      'max-classes-per-file': 'off',
      'import/named': 'off',
      'import/no-default-export': 'error',

      'import/order': [
        'error',
        {
          groups: [['builtin', 'external', 'internal']],
          'newlines-between': 'always',
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
        },
      ],

      'import/prefer-default-export': 'off',
      'import/extensions': 'off',
      '@typescript-eslint/consistent-indexed-object-style': 'error',

      '@typescript-eslint/consistent-type-assertions': [
        'error',
        {
          assertionStyle: 'angle-bracket',
        },
      ],

      '@typescript-eslint/explicit-function-return-type': 'error',

      '@stylistic/lines-between-class-members': [
        'error',
        'always',
        {
          exceptAfterSingleLine: true,
        },
      ],

      '@stylistic/member-delimiter-style': 'error',
      '@typescript-eslint/member-ordering': 'error',
      '@typescript-eslint/no-dupe-class-members': 'error',
      '@typescript-eslint/no-duplicate-imports': 'error',

      '@typescript-eslint/no-floating-promises': [
        'error',
        {
          ignoreIIFE: true,
          ignoreVoid: true,
        },
      ],

      '@typescript-eslint/no-inferrable-types': [
        'error',
        {
          ignoreParameters: true,
          ignoreProperties: true,
        },
      ],

      '@typescript-eslint/no-loop-func': 'error',

      '@typescript-eslint/no-misused-promises': [
        'error',
        {
          checksVoidReturn: false,
        },
      ],

      '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',
      '@typescript-eslint/no-unnecessary-condition': 'error',
      '@typescript-eslint/no-unnecessary-qualifier': 'error',
      '@typescript-eslint/no-unnecessary-type-arguments': 'error',
      '@typescript-eslint/no-unnecessary-type-assertion': 'off',
      '@typescript-eslint/no-unnecessary-type-constraint': 'error',
      '@typescript-eslint/no-unsafe-assignment': 'off',
      '@typescript-eslint/no-unsafe-member-access': 'off',
      '@typescript-eslint/no-unused-expressions': 'error',
      '@stylistic/object-curly-spacing': ['error', 'always'],
      '@typescript-eslint/prefer-includes': 'off',
      '@typescript-eslint/prefer-optional-chain': 'error',
      '@typescript-eslint/promise-function-async': 'error',
      '@typescript-eslint/restrict-template-expressions': 'off',
      '@typescript-eslint/return-await': 'error',
      '@typescript-eslint/no-duplicate-imports': 'off',
      '@typescript-eslint/no-base-to-string': 'off',
      '@typescript-eslint/no-unsafe-enum-comparison': 'off',

      '@typescript-eslint/typedef': [
        'error',
        {
          memberVariableDeclaration: true,
          parameter: true,
          propertyDeclaration: true,
        },
      ],

      '@typescript-eslint/unbound-method': [
        'error',
        {
          ignoreStatic: true,
        },
      ],

      'sonarjs/no-duplicate-string': 'off',
      'sonarjs/todo-tag': 'warn',
      'unused-imports/no-unused-imports': 'error',

      'unused-imports/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_',
        },
      ],

      '@typescript-eslint/naming-convention': [
        'warn',
        {
          selector: 'default',
          format: ['strictCamelCase'],
        },
        {
          selector: 'variable',
          format: ['strictCamelCase', 'UPPER_CASE', 'StrictPascalCase'],
        },
        {
          selector: 'parameter',
          modifiers: ['unused'],
          format: ['strictCamelCase'],
          leadingUnderscore: 'allow',
        },
        {
          selector: 'property',
          format: null,
        },
        {
          selector: 'typeProperty',
          format: null,
        },
        {
          selector: 'typeLike',
          format: ['StrictPascalCase'],
        },
        {
          selector: 'enumMember',
          format: ['UPPER_CASE'],
        },
      ],
    },
    settings: {
      'import/resolver': {
        typescript: {},
      },
    },
  },
  globalIgnores(['**/eslint.config.js']),
]);
