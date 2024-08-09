import js from '@eslint/js';
import pluginVue from 'eslint-plugin-vue';
import * as parserVue from 'vue-eslint-parser';
import configPrettier from 'eslint-config-prettier';
import pluginPrettier from 'eslint-plugin-prettier';
import pluginImport from 'eslint-plugin-import';
import { defineFlatConfig } from 'eslint-define-config';
import * as parserTypeScript from '@typescript-eslint/parser';
import pluginTypeScript from '@typescript-eslint/eslint-plugin';
import unusedImports from 'eslint-plugin-unused-imports';

export default defineFlatConfig([
  {
    // ---------------- 基础配置 ---------------------
    ...js.configs.recommended, // 使用 ESLint 推荐的基本规则
    plugins: {
      prettier: pluginPrettier, // 启用 Prettier 插件
    },
    rules: {
      ...configPrettier.rules,  // 使用 Prettier 的规则
      ...pluginPrettier.configs.recommended.rules, // 使用 Prettier 推荐的规则
      'no-debugger': 'off', // 允许使用 debugger
      'no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_', // 没有使用的参数 忽略以 _ 开头的参数
          varsIgnorePattern: '^_', // 没有使用的变量 忽略以 _ 开头的变量
        },
      ],
      'prettier/prettier': [
        'error',
        {
          endOfLine: 'auto', // 自动确定换行符
        },
      ],
    },
  },
  {
    // --------------- TypeScript 配置 --------------
    files: ['**/*.?([cm])ts', '**/*.?([cm])tsx'], // 匹配 TypeScript 文件
    languageOptions: {
      parser: parserTypeScript, // 使用 TypeScript 解析器
      parserOptions: {
        sourceType: 'module', // 设置模块类型
      },
    },
    plugins: {
      '@typescript-eslint': pluginTypeScript, // 启用 TypeScript 插件
    },
    rules: {
      ...pluginTypeScript.configs.strict.rules, // 使用 TypeScript 严格的规则
      '@typescript-eslint/ban-types': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/no-unused-expressions': 'off',
      '@typescript-eslint/no-invalid-void-type': 'off',
      '@typescript-eslint/no-redeclare': 'error',
      '@typescript-eslint/ban-ts-comment': 'off',
      '@typescript-eslint/prefer-ts-expect-error': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/prefer-as-const': 'warn',
      '@typescript-eslint/no-empty-function': 'off',
      '@typescript-eslint/no-empty-object-type': 'off',
      '@typescript-eslint/no-non-null-assertion': 'off',
      '@typescript-eslint/no-import-type-side-effects': 'error',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/consistent-type-imports': [
        'error',
        { disallowTypeAnnotations: false, fixStyle: 'inline-type-imports' },
      ],
      '@typescript-eslint/prefer-literal-enum-member': ['error', { allowBitwiseExpressions: true }],
    },
  },
  {
    // ------------- TypeScript 类型定义文件配置 ----------------
    files: ['**/*.d.ts'], // 匹配 TypeScript 类型定义文件
    rules: {
      'eslint-comments/no-unlimited-disable': 'off', // 允许无限禁用规则
      'import/no-duplicates': 'off', // 允许重复导入
      'unused-imports/no-unused-vars': 'off', // 不检查未使用的变量
    },
  },
  {
    // ------------- JavaScript 文件配置 ------------------
    files: ['**/*.?([cm])js'], // 匹配 JavaScript 文件
    rules: {
      '@typescript-eslint/no-require-imports': 'off', // 允许 require 导入
      '@typescript-eslint/no-var-requires': 'off', // 允许 var require
    },
  },
  {
    // --------------- Vue 文件配置 ---------------------
    files: ['**/*.vue'], // 匹配 Vue 文件
    languageOptions: {
      parser: parserVue, // 使用 Vue 解析器
      parserOptions: {
        ecmaFeatures: {
          jsx: true, // 支持 JSX
        },
        extraFileExtensions: ['.vue'], // 额外支持的文件扩展名
        parser: parserTypeScript, // 使用 TypeScript 解析器
        sourceType: 'module', // 设置模块类型
      },
    },
    plugins: {
      vue: pluginVue, // 启用 Vue 插件
    },
    processor: pluginVue.processors['.vue'], // 使用 Vue 处理器
    rules: {
      ...pluginVue.configs.base.rules, // 使用 Vue 的基础规则
      ...pluginVue.configs['vue3-essential'].rules, // 使用 Vue 3 必需的规则
      ...pluginVue.configs['vue3-recommended'].rules, // 使用 Vue 3 推荐的规则
      'no-undef': 'off',
      'no-unused-vars': 'off',
      'vue/no-v-html': 'off',
      'vue/require-default-prop': 'off',
      'vue/require-explicit-emits': 'off',
      'vue/multi-word-component-names': 'off',
      'vue/no-setup-props-reactivity-loss': 'off',
      'vue/html-self-closing': [
        'error',
        {
          html: {
            void: 'always',
            normal: 'always',
            component: 'always',
          },
          svg: 'always',
          math: 'always',
        },
      ],
    },
  },
  {
    // ---------------- 导入和未使用导入的配置 --------------------
    files: ['**/*.vue', '**/*.?([cm])ts', '**/*.?([cm])tsx'], // 匹配 Vue 和 TypeScript 文件
    plugins: {
      import: pluginImport, // 启用 import 插件
      'unused-imports': unusedImports,  // 启用未使用导入插件
    },
    rules: {
      'import/first': 'error', // 导入必须位于文件开头
      'import/no-duplicates': 'error', // 禁止重复导入
      'import/order': [ // 控制导入顺序
        'error',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
            'object',
            'type',
          ],

          pathGroups: [
            {
              pattern: 'vue',
              group: 'external',
              position: 'before',
            }, // 将 Vue 导入放在外部导入之前
            {
              pattern: '@vue/**',
              group: 'external',
              position: 'before',
            }, // 将 @vue/** 导入放在外部导入之前
            {
              pattern: 'ant-design-vue',
              group: 'internal',
            }, // 将 ant-design-vue 导入放在内部导入
          ],
          pathGroupsExcludedImportTypes: ['type'], // 排除类型导入的分组
        },
      ],

      'unused-imports/no-unused-imports': 'error', // 检测未使用的导入
      // 如需保存时自动删除未引用代码，可注释掉该规则
      // 'unused-imports/no-unused-vars': [
      //   'warn',
      //   {
      //     vars: 'all',
      //     varsIgnorePattern: '^_',
      //     args: 'after-used',
      //     argsIgnorePattern: '^_',
      //   },
      // ],
    },
  },
  {
    // ------------------- 忽略规则和文件 ----------------------
    linterOptions: {
      reportUnusedDisableDirectives: 'off', // 不报告未使用的禁用指令
    },
    // 忽略的文件和目录
    ignores: [
      'src/assets/**',
      '*.sh',
      'node_modules',
      '*.md',
      '*.woff',
      '*.ttf',
      '.vscode',
      '.idea',
      'dist',
      '/public',
      '/docs',
      '.husky',
      '.local',
      '/bin',
      'Dockerfile',
    ],
  },
]);