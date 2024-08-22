# 项目创建

[TOC]

## 创建初始项目

[Vite 官网](https://cn.vitejs.dev/guide/)

[vue3 官网](https://cn.vuejs.org/guide/introduction.html)

```
npm create vite@latest
```

回车，我选择了用 vue + ts，生成项目。

项目就创建完成了，可以看 `package.json` 文件，查看启动命令

```
npm run dev
```

## 项目目录

Windows 下在文件夹下使用 `tree /f >tree.txt` 生成目录树，在 `tree.txt` 文件中粘进来就好了

```bash
├─dist # 项目打包文件
├─public # 静态资源目录
└─src
    │  App.vue # 入口 vue 文件
    │  main.ts # 入口文件
    │  vite-env.d.ts # vite 环境变量申明文件
    │
    ├─assets # 资源文件目录
    │
    ├─components # 项目组件目录
    │      HelloWorld.vue
    │
    ├─pages # 项目页面目录
    │      Home.vue
    │
    ├─router # 路由资源文件目录
    │      index.ts
    │
    └─styles # 项目样式目录
            index.scss # 当前目录其他样式集成文件
            reset.scss # 清除默认样式文件
            variable.scss # 全局样式变量文件
│  .gitignore # git 忽视文件
│  DEV-README.md # 开发 README
│  index.html # vite 项目入口文件
│  package-lock.json
│  package.json
│  README.md
│  tsconfig.app.json
│  tsconfig.json # ts 配置文件
│  tsconfig.node.json
│  vite.config.ts # vite 配置文件
```

## 项目完善

### 项目配置

#### 1. 配置 `vite.config.ts` 和 `tsconfig.json` 来实现文件引用别名

```ts
// vite.config.ts
export default defineConfig({
  plugins: [vue()],
  base: '/',
  resolve: {
    //设置别名
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
})
```

此时会报错 **找不到模块“path”或其相应的类型声明**。这是因为我们的配置文件是 ts 类型。我们只需要安装 Node.js 类型检查包就好。

执行

```
install -D @types/node
```

```json
// tsconfig.json
{
  "compilerOptions": {
    ...config
    /** 路径别名 */
    "baseUrl": "./",
    "paths": {
      "@": ["src"],
      "@/*": ["src/*"]
    },
  }
}
```

#### 2. 配置 `scss`

开发环境安装

```
npm install sass --save-dev
```

添加全局样式变量 `styles/variable.scss` 文件中。为能使全局都可以使用，在 `vite.config.ts` 中添加配置

```ts
// vite.config.ts
css: {
  preprocessorOptions: {
    scss: {
      additionalData: '@import "styles/variable.scss";',
    },
  },
},
```

若 vscode 对 `$xxx` 的样式变量有报错，重启 vscode 就可以了

#### 3. 结合 ts，导入 vue 文件报错

##### 报错原因：

ts 无法识别 vue 文件

##### 解决方法：

在 `vite-env.d.ts` 文件中添加

```ts
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
```

如果添加保存完后还报错，重新启动 vscode 即可。

#### 4. 配置 eslint 限制代码的合法性和风格，对代码进行规范

这里使用的是 vue 官方文档推荐的 `eslint-plugin-vue`

```
npm install -D eslint eslint-plugin-vue
```

通过 `npx eslint --init` 根据流程创建默认的 `eslint.config.js` 文件。

```text

√ How would you like to use ESLint? · problems
√ What type of modules does your project use? · esm
√ Which framework does your project use? · vue
√ Does your project use TypeScript? · typescript
√ Where does your code run? · browser
The config that you've selected requires the following dependencies:

eslint@9.x, globals, @eslint/js, typescript-eslint, eslint-plugin-vue
√ Would you like to install them now? · No / Yes
√ Which package manager do you want to use? · npm
```

- `vue-eslint-parser` 解析 `.vue` 文件。
- `@typescript-eslint/parser` 解析 `.ts` 文件
- `eslint-plugin-prettier` 将 Prettier 代码格式化工具与 ESLint 静态代码分析工具结合起来使用。确保 ESLint 规则与 Prettier 的规则不会发生冲突。
- `eslint-config-prettier` 禁用 ESLint 中与 Prettier 冲突的规则
- `eslint-plugin-import` 规范模块导入规则。
- `eslint-define-config` 使用更灵活的方式配置 ESLint。
- `@typescript-eslint/eslint-plugin` 提供针对 TypeScript 代码的 lint 规则。
- `eslint-plugin-unused-imports` 检测和报告未使用的导入语句。

#### 5. 集成 Prettier 格式化代码风格

[Prettier](https://www.prettier.cn/docs/install.html)

开发依赖安装 prettier

```
npm i prettier -D
```

创建 `.prettierrc.cjs` 文件，配置 Prettier

```
node --eval "fs.writeFileSync('.prettierrc','{}\n')"
```

创建 `.prettierignore` 配置哪些文件不格式化

```
node --eval "fs.writeFileSync('.prettierignore','{}\n')"
```

配置完成后如果 VSCode 右下角 Prettier 报红, 尝试重启 VSCode 修复

**上面的配置只能保证 Prettier 和 ESLint 没有冲突报错。一般会在 Prettier 中统一代码风格; ESLint 保证代码质量。**

#### 6. 集成 stylelint

检测 CSS、Sass、Less 等样式表语言中的潜在错误和不符合约定的地方，并提供修复建议。

- 开发依赖安装 stylelint

```
npm i stylelint -D
```

- 创建配置文件 `.stylelintrc` 在项目根目录下

```
node --eval "fs.writeFileSync('.stylelintrc','{}\n')"
```

#### 7. 集成 husky 和 lint-staged

在代码提交前进行代码质量检查和格式化，以确保代码的一致性和可维护性。

**husky**

husky 的作用是通过 Git 钩子，在 Git 操作的不同阶段运行自定义脚本。在代码提交前运行脚本，如运行代码风格检查工具（如 ESLint 或 Prettier）或运行单元测试等。以达到团队代码规范标准的提交。

**lint-staged**

lint-staged 的作用是在代码提交前对即将提交的文件进行静态代码分析。在代码提交前自动运行代码检查和格式化工具。从而减少代码质量问题和风格不一致的情况。

1. 安装

```
npm i husky lint-staged -D
```

2. 生成对应的配置文件

- `husky`

```
npx husky install
```

- `lint-staged`

  - 创建配置文件 `.lintstagedrc` 在项目根目录下

  ```
  node --eval "fs.writeFileSync('.lintstagedrc','{}\n')"
  ```

## 项目库引用

### `vue-router`

这里遇到一个小问题，记录一下

#### 问题描述

当 history 使用 `createWebHistory()` 部署到 Github Pages 上，刷新/跳转页面，会出现 404 的报错

```ts
const router = createRouter({
  history: createWebHistory(),
  routes,
})
```

#### 问题原因

项目打包好，是通过 `dist/index.html` 文件展示静态页面，因为 Vue 是单页面应用 (SPA)。只有一个index.html作为入口文件，其它的路由都是通过JS来进行跳转。

当使用 `createWebHistory()` 配置路由时，刷新页面，GitHub Pages 默认只能够处理根路径下的静态文件，这会导致页面刷新时无法找到正确的路由文件。

#### 修改方式

如果是服务端项目，配置了 Nginx 可以通过匹配 URL 请求进行页面返回。

这里暂时不配置服务端，所以 history 采用 Hash 模式

**为什么hash模式下没有问题**

router Hash 模式是用符号#表示的，如 website.com/#/login, Hash 的值为 #/login

它的特点在于：Hash 虽然出现在 URL 中，但不会被包括在 HTTP 请求中，对服务端完全没有影响，因此改变 Hash 不会重新加载页面

Hash 模式下，仅 Hash 符号之前的内容会被包含在请求中，如 website.com/#/login 只有 website.com 会被包含在请求中 ，因此对于服务端来说，即使没有配置location，也不会返回404错误。

```ts
const router = createRouter({
  history: createWebHashHistory(),
  routes,
})
```

[参考文章](https://blog.csdn.net/qq_52354698/article/details/132449593)

### 从 npm 切换到 pnpm
