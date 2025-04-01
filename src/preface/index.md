# 项目介绍

> PureChat 是一款基于 Vue3 + ElementPlus，结合 AI 和前沿技术的聊天应用，内置OpenAI，Ollama，DeepSeek等大预言模型，支持 Markdown 渲染，聊天记录生成截图，主题切换，助力开发者快速掌握现代技术。
- 体验链接：[网页版](https://purechat.cn)

关注社交账号 获取最新动态: [公众号](http://mmbiz.qpic.cn/sz_mmbiz_jpg/jfyEomMz9MYlSVaNrB0yfPKcGm2OmPfCZiaHR9r1Zo0YzSro1T8MonB6OpkcGiamhHD5Sv0LPLYWS2HdaeUamDqQ/0)

加入社群 [QQ群(194541068)](https://jq.qq.com/?_wv=1027&k=Cd4Ihd2J)

## 特性
[README](https://github.com/Hyk260/PureChat/blob/main/README.md)

## 分支
- main为主分支 基于`Vite5`构建
<!-- - master分支基于`Vue CLI5`构建（不再维护） -->
- electron分支基于main开发使用`electron-vite`构建

## 技术架构
- 前端: Vue3、Vite5、Electron、ElementPlus
- 后端: Nodejs、Express
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
- 集成 OpenAI，Ollama，DeepSeek，零一万物，智谱，等大模型，支持上下文理解，自定义预设提示词，流式输出，需要使用自己的key。

### 会话列表功能
- 切换会话时，输入框草稿自动保存与回填，方便用户继续编辑。

### 文件操作
- 支持直接拖拽文件到消息框，编辑后上传，操作简单便捷。
- 消息框支持拖拽文件发送，或另存为本地文件。

### 消息编辑
- 支持撤回后重新编辑消息，避免内容丢失。

## Elecron

<Callout type='tip'>
  确保应用在桌面平台上拥有良好的兼容性和体验，支持 web 所有功能。
</Callout>

- [Electron](https://github.com/Hyk260/PureChat/tree/electron)
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

![PurerChat Star History](/screenshot/star-history.png)

## GitHub 活跃度

> 以下使用 https://postspark.app/github-contributions 生成

<img src="/screenshot/liveness.png">

## 截图

<img src="/screenshot/chat.png">

<img src="/screenshot/discover.png">

<img src="/screenshot/config.png">

<img src="/screenshot/screenshot.png">

<!-- <ContentImages /> -->