# 项目创建

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
  base: "/",
  resolve: {
    //设置别名
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
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
declare module "*.vue" {
  import type { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
```

如果添加保存完后还报错，重新启动 vscode 即可。