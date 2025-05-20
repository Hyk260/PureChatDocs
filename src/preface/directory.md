# 目录结构

``` 
PureChat
├── .github                    // gitHub相关配置文件，工作流、ISSUE模板等
├── .vscode                    // vscode插件和设置
│   ├── extensions.json        // vscode插件(扩展 ctrl+shift+x -> 筛选器扩展 ->推荐)
│   └── settings.json          // vscode配置(在该项目中生效 可以复制到用户配置文件中)
├── build                      // vite构建相关配置和插件
├── dist                       // 打包文件
├── electron                   // electron配置
│   ├── main                   // electron主进程入口
│   │   ├── logger             // 日志
│   │   ├── notification       // 桌面通知功能
│   │   ├── store              // 数据存储
│   │   ├── toolkit            // 工具类代码集合
│   │   ├── tray               // 系统托盘
│   │   ├── platform.js        // 平台相关的工具函数
│   │   └── config.js          // electron配置
│   └── preload                // 预加载脚本
├── node_modules               // 依赖包
├── packages                   // 自定义包目录
│   ├── database               // 数据库相关代码
│   └── shared                 // 共享代码
├── output                     // electron编译输出目录
├── public                     // 静态目录
├── resources                  // electron资源目录
├── src                        // 源代码
│   ├── ai                     // ai配置
│   ├── assets                 // 主题字体图片 svg icons 等静态资源
│   ├── components             // 全局公用组件
│   ├── directives             // 自定义指令
│   ├── constants              // 常量
│   ├── directives             // 指令
│   ├── layout                 // 整体布局结构
│   ├── locales                // 国际化配置
│   ├── plugins                // 插件
│   ├── router                 // 路由
│   ├── service                // 网络请求
│   ├── store                  // pinia状态管理
│   ├── styles                 // 全局样式
│   ├── utils                  // 全局公用方法
│   ├── views                  // view页面目录
│   ├── App.vue                // 入口页面
│   └── main.js                // 入口 加载组件 初始化等
├── static                     // 静态资源
├── .browserslistrc            // 配置兼容浏览器
├── .env                       // 全局环境变量
├── .env.development           // 开发环境变量
├── .env.local                 // 本地环境变量
├── .env.production            // 生产环境变量
├── .env.vercel                // vercel环境变量
├── .eslintignore              // eslint忽略项
├── .eslintrc.js               // eslint配置项
├── .gitignore                 // git忽略项
├── .npmrc                     // npm配置文件
├── .nvmrc                     // 指定node版本配置
├── .prettierignore            // prettier忽略项
├── babel.config.js            // babel-loader配置
├── commitlint.md              // Commitlint提交规范
├── jsconfig.json              // JavaScript配置
├── uno.config.ts              // 原子css框架unocss配置
├── vercel.json                // vercel配置
├── LICENSE                    // 开源协议
├── nginx.conf                 // nginx配置
├── package.json               // 项目名称 项目版本 项目描述 项目运行的一些脚本(依赖)
├── pnpm-lock.yaml             // npm包管理器pnpm依赖锁定文件
├── prettier.config.js         // prettier配置
├── README.md                  // 说明
├── vite.config.js             // vite配置
└── vitest.config.js           // vitest配置
```

