# Vercel 部署指引

如果想在 Vercel 上部署 PureChat，可以按照以下步骤进行操作：

## Vercel 部署流程

<!-- ### 准备好你的 im appid 和 appkey

[如何获取腾讯im appid 和 appkey](/feedback/questions.html#如何获取腾讯im-appid-和-appkey) -->

### 点击下方按钮进行部署

<deploy-button />

<!-- [![][deploy-button]][deploy-link] -->
直接使用 GitHub 账号登录即可，在环境变量页填入
`ENABLE_EXPERIMENTAL_COREPACK` （实验性 corepack）
<!-- `VITE_IM_SDK_APPID`（腾讯IM sdkappid）
`VITE_SERVICE_BASE_URL`（服务器地址） -->

### 部署完毕后，即可开始使用

### 绑定自定义域名（可选）

Vercel 分配的域名 DNS 在某些区域被污染了，绑定自定义域名即可直连。

## 自动同步更新

如果你根据上述中的一键部署步骤部署了自己的项目，你可能会发现总是被提示 “有可用更新”。这是因为 Vercel 默认为你创建新项目而非 fork 本项目，这将导致无法准确检测更新。

## 支持多种部署场景

### Web 应用程序

- 标准 Web 部署
- GitHub 页面
- CDN 优化的构建

### 桌面应用程序 （Electron）

- Windows （.exe）
- macOS （.dmg）
> 每个部署选项都可以通过环境变量和构建标志进行配置。

<!-- LINK GROUP -->

[deploy-button]: https://vercel.com/button
[deploy-link]: https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FHyk260%2FPureChat&env=ENABLE_EXPERIMENTAL_COREPACK,VITE_IM_SDK_APPID,VITE_SERVICE_BASE_URL&project-name=pure-chat&repository-name=pure-chat