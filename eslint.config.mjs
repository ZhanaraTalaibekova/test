import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";

export default [
  {
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:react/recommended',
      'plugin:prettier/recommended',
    ],
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    languageOptions: {
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
          impliedStrict: true,
        },
        project: './tsconfig.json',
        tsconfigRootDir: './',
      },
      globals: globals.browser,
    },
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', 'react', 'prettier'],
    rules: {
      'no-shadow': 'off',
      "no-trailing-spaces": ["error"],
      "no-multi-spaces": ["error"],
      'prettier/prettier': 'warn',
      'semi': ['error', 'always'],
      'react/button-has-type': 'off',
      'no-unused-expressions': 'off',
      'react/react-in-jsx-scope': 'off',
      'react-hooks/exhaustive-deps': 'off',
      'import/no-extraneous-dependencies': 'off',
      'import/order': 'off',
      'prefer-destructuring': 'off',
      'react/prop-types': 'off',
      'no-console': ['warn', { allow: ['error'] }],
      'no-plusplus': 'off',
      'no-else-return': 'warn',
      'react/require-default-props': 'off',
      'react/jsx-props-no-spreading': 'off',
      'import/prefer-default-export': 'off',
      '@typescript-eslint/no-shadow': 'off',
      'sonarjs/no-nested-template-literals': 'off',
      '@typescript-eslint/ban-ts-comment': 'off',
      'no-underscore-dangle': 'off',
      'react/jsx-no-useless-fragment': 'off',
      'consistent-return': 'off',
      'sonarjs/cognitive-complexity': ['error', 30],
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
        },
      ],
      'react/function-component-definition': [
        2,
        {
          namedComponents: 'arrow-function',
          unnamedComponents: 'arrow-function',
        },
      ],
      'import/extensions': [
        'error',
        'ignorePackages',
        {
          js: 'never',
          jsx: 'never',
          ts: 'never',
          tsx: 'never',
        },
      ],
      'react/jsx-filename-extension': [
        1,
        {
          extensions: ['.tsx', '.ts'],
        },
      ],
      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            ['^react'],
            ['^@mui', '^material-ui'],
            ['^react-hook-form', '^@hookform/resolvers/zod', '^zod'],
            ['^@?\\w'],
            ['@/(.*)'],
            ['^[./]'],
            ['scss$'],
          ],
        },
      ],
      'padding-line-between-statements': [
        'error',
        {
          blankLine: 'always',
          prev: '*',
          next: 'return',
        },
        {
          blankLine: 'always',
          prev: ['const', 'let', 'var'],
          next: '*',
        },
        {
          blankLine: 'any',
          prev: ['const', 'let', 'var'],
          next: ['const', 'let', 'var'],
        },
      ],
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReactConfig,
];