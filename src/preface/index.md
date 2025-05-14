# 介绍

PureChat 将传统的即时消息与 AI 驱动的对话结合在一个统一的界面中。它既可以作为功能性聊天应用程序，也可以作为 AI 开发的框架。
- 体验链接：[cloud 腾讯云im sdk即使通讯模式](https://purechat.cn)
- 体验链接：[local 本地模式](https://local.purechat.cn)

关注社交账号 获取最新动态: [公众号](http://mmbiz.qpic.cn/sz_mmbiz_jpg/jfyEomMz9MYlSVaNrB0yfPKcGm2OmPfCZiaHR9r1Zo0YzSro1T8MonB6OpkcGiamhHD5Sv0LPLYWS2HdaeUamDqQ/0)

加入社群 [QQ群(194541068)](https://jq.qq.com/?_wv=1027&k=Cd4Ihd2J)

<Callout type='tip'>
PureChat目前支持两种模式 本地模式（默认）与腾讯云im sdk即使通讯模式

可通过[.env](https://github.com/Hyk260/PureChat/blob/main/.env#L1)配置文件的`VITE_LOCAL_MODE`切换

如何开启可查看[如何使用腾讯im-sdk](/feedback/questions.html#如何使用腾讯im-sdk)
</Callout>

## 主要特点：

- 基于腾讯 IM SDK 的聊天功能
- 支持多种 AI 模型（OpenAI、Ollama、DeepSeek、ZhiPu 等）
- 用于 AI 响应的 Web 搜索集成
- 使用代码高亮显示的 Markdown 渲染
- 屏幕截图生成和共享
- 主题切换（明暗模式）
- 桌面应用程序支持（通过 Electron）

## 技术架构
- 前端: Vue3、Vite5、Electron、ElementPlus
- 后端: Nodejs、Express

## 配置系统
> PureChat 可通过环境变量进行高度配置，允许用户自定义：
1. 核心应用程序设置：

- 本地/云模式
- 路由器历史模式
- 存储前缀
- 基本 URL
2. AI 提供程序设置：

- 各种提供商的 API 密钥
- 基本 URL
- 模型配置
3. 构建配置：

- CDN 使用情况
- 开发工具
- 映射源

## 认证

> PureChat 通过以下方式提供身份验证：

1. 用户名/密码登录
2. GitHub登录

## Web

### @成员功能
- 支持拼音模糊搜索，快速@群成员，提升群聊沟通效率。
- 输入“@”符号激活智能成员搜索，便捷提及特定人。

### 消息免打扰
- 用户可开启免打扰模式，减少干扰。
- 新消息到达时，红点提示确保重要信息不被遗漏。

### 浏览器原生通知
- 支持浏览器原生通知，用户不在聊天窗口时可通过桌面提醒获取重要消息。
- 点击通知可直接定位到指定消息，轻松无缝衔接。

### 文本链接识别
- 自动识别文本中的链接，点击可在新窗口打开，方便获取更多信息。

### 聊天消息功能
- 支持撤回、转发、回复和删除消息，满足多样沟通场景。
- 管理员可撤回成员消息，维护群聊秩序。

### 群管理功能
- 支持灵活创建、解散群聊，及添加和移除成员。

### 多格式消息发送
- 支持发送文字、图片、表情包、文件、自定义消息和链接等多种格式，丰富沟通内容。

### 消息预加载机制
- 消息快速加载，文件上传进度实时显示，提升用户体验。

### 富文本框
- 基于 `wangEditor 5` 的富文本框，支持多类型消息混合发送，满足个性化表达。

### AI大模型
- 集成 OpenAI，Ollama，DeepSeek，零一万物，智谱，等大模型，支持上下文理解，联网搜索，自定义预设提示词，流式输出，需要使用自己的key。

### 会话列表功能
- 切换会话时，输入框草稿自动保存与回填，方便用户继续编辑。

### 文件操作
- 支持直接拖拽文件到消息框，编辑后上传，操作简单便捷。
- 消息框支持拖拽文件发送，或另存为本地文件。

### 消息编辑
- 支持撤回后重新编辑消息，避免内容丢失。

## Elecron

<Callout type='tip'>
  获取源码联系作者
</Callout>

- 桌面图标高亮闪烁提示：直观地识别到有新消息或通知，提升使用体验。
- 自定义截图功能：根据自己的需求进行截图，并方便地分享屏幕内容，增强了应用的实用性，尤其在需要快速交流信息的场景中。
- 支持外部协议打开应用：通过外部协议，可以方便地与其他应用进行交互，例如从浏览器或其他软件中直接打开特定的功能或页面，提升了应用的整合性。
- 文件下载进度显示：用户能够实时查看文件下载的状态，增强了对下载过程的可控性和透明度。
- 自定义 Notification 窗口通知：用户可以根据需要设置通知的样式和内容，使得提醒更加个性化，避免信息的遗漏。
- 托盘功能：应用可以在系统托盘中运行，节省桌面空间，用户可以随时快速访问应用，同时也不影响其他工作的进行。

## tools

PureChat / tools:

<ContentIntegrations />

## Star History

<!-- https://www.star-history.com/ -->

<!-- ![PurerChat Star History](/screenshot/star-history.png) -->

[![Star History Chart](https://api.star-history.com/svg?repos=Hyk260/PureChat&type=Date)](https://www.star-history.com/#Hyk260/PureChat&Date)

## GitHub 活跃度

> 以下使用 https://postspark.app/github-contributions 生成

<img src="/screenshot/liveness.png">

## 截图

<img src="/screenshot/chat.png">

<img src="/screenshot/discover.png">

<img src="/screenshot/config.png">

<img src="/screenshot/screenshot.png">

<!-- <ContentImages /> -->

## 总结

PureChat 是一款全面的聊天应用程序，它将传统的即时消息与高级 AI 功能集成在一起。其模块化架构、可扩展的 AI 集成系统和灵活的配置选项使其成为强大的应用程序，也是 AI 增强通信应用程序的坚实基础。

该系统旨在通过其抽象层和模块化组件轻松扩展新的 AI 模型提供程序和功能。Vue 3 基础提供了一个基于组件的反应式 UI，可在不同平台上提供流畅的用户体验。