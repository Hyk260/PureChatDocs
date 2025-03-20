# 常见问题

::: tip
这里列举了一些常见的问题。如果没有找到可以在 [github issue](https://github.com/Hyk260/PureChat/issues) 反馈。
:::

## 如何快速获得帮助？

1. 询问 DeepSeek /ChatGPT / Bing / 等。

| [DeepSeek](https://deepseek.com) | [Bing](https://www.bing.com) | [ChatGPT](https://chatgpt.com) | [StackoverFlow](https://stackoverflow.com) | 
| --------------- | ------- | ------- | ---------------------- |

2. 请提供问题的背景信息和碰到问题的详细描述，高质量的提问容易获得有用的答案。
3. 在PureChat官方交流群里面提问，请尽量描述清楚问题，以便大家更好的帮助你。 [加群](https://jq.qq.com/?_wv=1027&k=Cd4Ihd2J)
<!-- 4. [QQ群194541068](https://jq.qq.com/?_wv=1027&k=Cd4Ihd2J) -->

## VScode (因为在此系统上禁止运行脚本)报错
[第一次执行脚本报错](https://cloud.tencent.com/developer/article/1746884)

## 客户端控制台报错查看方法
- 点击PureChat客户端窗口后按下快捷键Ctrl+Shift+I（Mac端：Command+Option+I）
::: tip
- 当前活动窗口必须为PureChat的客户端窗口才能调出控制台;

- 需要先打开控制台，再点击测试或者发起对话等请求才能收集到请求信息。
:::
- 在弹出的控制台窗口中点击`Network` → 点击查看②处最后一个标有红色`×` 的`completions`或`generations` → 点击Response查看完整的返回内容（图中④的区域）。

> 如果你无法判断该错误的原因,请将该界面截图发送到官方交流群中寻求帮助。

<img src="/Network.png">

## 打包后刷新，页面404

**问题背景**

项目build之后：

- 开发环境： 用live server等插件在本地启动打包后的index.html，刷新页面404
- 生产环境： 部署到服务器，刷新页面404

**问题原因**

系统默认使用的路由模式是 `history` 模式，而 `Nginx` 等web服务器默认是基于静态文件的，在请求 `/login` 等地址的时候，`Nginx` 会去寻找 `login.html` 这个文件，找不到就会报404了，所以该模式需要后端配合将所有访问都指向 `index.html`，将具体的路由信息交由 `vue-router` 处理。

**解决方案**

开发环境预览打包产物：

- 使用 `pnpm preview` 命令启动预览。

生产环境：

- `Nginx` 配置参考（其他web服务器自行搜索）

```java
# nginx.conf

server {
  listen 80;
  server_name localhost;

  location / {
    root /usr/share/nginx/html;
    index index.html index.htm;
    try_files $uri $uri/ /index.html; // [!code ++]
  }

  error_page 500 502 503 504 /50x.html;
  location = /50x.html {
    root /usr/share/nginx/html;
  }
}
```

- 修改路由模式

如果无法修改web服务器，可以通过修改前端路由模式为 `hash` 避免该问题

::: tip 代码位置
.env
:::

```dotenv{5}
# 是否开启vue-devtools
VITE_DEV_TOOLS = 'Y'

# vue-router mode: hash | history  // [!code focus:2]
VITE_ROUTER_HISTORY = 'hash'

# 是否生成生产源映射
VITE_SOURCE_MAP = 'N'
```

## 依赖安装问题

- 检查网络问题

- 检查镜像源问题

- 检查依赖包版本问题

**镜像配置**

> 项目默认镜像配置文件 .npmrc 的配置项说明

🎯 文件位置：`.npmrc`

```
registry=https://registry.npmmirror.com/
shamefully-hoist=true
ignore-workspace-root-check=true
```

- `registry`：指定了 npm 包的镜像源，本项目中使用的镜像源是淘宝的最新镜像。
- `shamefully-hoist`：该选项用于将依赖项 hoist 到尽可能高的节点上，提高依赖项的共用
- `ignore-workspace-root-check`：在跟路径安装依赖时，忽略工作区根检查，即不用加上 `-w` 参数

> 完整代码指路 [PureChat🔜](https://github.com/Hyk260/PureChat/blob/main/.npmrc)

## 环境问题

> 如果出现依赖安装报错，启动报错等。先检查电脑环境有没有安装齐全。

本地环境需要具备

- [Git](https://git-scm.com/)

---

- **NodeJS**: >=18.20.0，推荐 18.20.0 或更高。
  > 你可以使用 [nvm](https://github.com/nvm-sh/nvm) 来管理你的NodeJS版本。
- **pnpm**: >= 8.7.0，推荐最新版本。

## 如何获取腾讯im appid 和 appkey？

1. 登录 [腾讯云](https://cloud.tencent.com/) 注册腾讯云账号
2. 登录 [即时通信 IM](https://console.cloud.tencent.com/im) 控制台创建应用
3. 获取 appid 和 appkey
4. 开始 [初始化sdk](https://cloud.tencent.com/document/product/269/75292)

<img src="/images/im-1.png">

<img src="/images/im-2.png">

## 如何不使用im sdk?
开启本地模式不使用腾讯IM SDK，在 `.env` 文件中[设置](https://github.com/Hyk260/PureChat/blob/main/.env#L8) `VITE_LOCAL_MODE=Y` 即可。开启后不支持多端消息同步，做为本地ai问答工具使用。

## 如何部署在 Vercel 上

1. 注册 Github 账号，fork 该项目
2. 注册 Vercel（需手机验证，可以用中国号码），连接你的 Github 账户
3. Vercel 上新建项目，选择你在 Github fork 的项目，按需填写环境变量，开始部署。部署之后，你可以在有梯子的条件下，通过 vercel 提供的域名访问你的项目。
4. 如果需要在国内无墙访问：在你的域名管理网站，添加一条域名的 CNAME 记录，指向 cname.vercel-dns.com。之后在 Vercel 上设置你的域名访问。

# OpenAI 相关问题

## 如何注册 OpenAI 账号？

去 chat.openai.com 注册。你需要：

- 一个良好的梯子（OpenAI 支持地区原生 IP 地址）
- 一个支持的邮箱（例如 Gmail 或者公司/学校邮箱，非 Outlook 或 qq 邮箱）
- 接收短信认证的方式（例如 SMS-activate 网站）

## 怎么开通 OpenAI API? 怎么查询 API 余额？

官网地址（需梯子）：https://platform.openai.com/account/usage
有网友搭建了无需梯子的余额查询代理，请询问网友获取。请鉴别来源是否可靠，以免 API Key 泄露。

## 我新注册的 OpenAI 账号怎么没有 API 余额？

（4 月 6 日更新）新注册账号通常会在 24 小时后显示 API 余额。当前新注册账号赠送 5 美元余额。

## 如何给 OpenAI API 充值？

OpenAI 只接受指定地区的信用卡（中国信用卡无法使用）。一些途径举例：

1. Depay 虚拟信用卡
2. 申请国外信用卡
3. 网上找人代充

## 如何使用 GPT-4 的 API 访问？

- GPT-4 的 API 访问需要单独申请。到以下地址填写你的信息进入申请队列 waitlist（准备好你的 OpenAI 组织 ID）：https://openai.com/waitlist/gpt-4-api
  之后等待邮件消息。
- 开通 ChatGPT Plus 不代表有 GPT-4 权限，两者毫无关系。

## API 是怎么计费的？

OpenAI 网站计费说明：https://openai.com/pricing#language-models  
OpenAI 根据 token 数收费，1000 个 token 通常可代表 750 个英文单词，或 500 个汉字。输入（Prompt）和输出（Completion）分别统计费用。  
|模型|用户输入（Prompt）计费|模型输出（Completion）计费|每次交互最大 token 数|
|----|----|----|----|
|gpt-3.5|$0.002 / 1 千 tokens|$0.002 / 1 千 tokens|4096|
|gpt-4|$0.03 / 1 千 tokens|$0.06 / 1 千 tokens|8192|
|gpt-4-32K|$0.06 / 1 千 tokens|$0.12 / 1 千 tokens|32768|

## gpt-3.5-turbo 和 gpt3.5-turbo-0301(或者 gpt3.5-turbo-mmdd)模型有什么区别?

官方文档说明：https://platform.openai.com/docs/models/gpt-3-5

- gpt-3.5-turbo 是最新的模型，会不断得到更新。
- gpt-3.5-turbo-0301 是 3 月 1 日定格的模型快照，不会变化，预期 3 个月后被新快照替代。
