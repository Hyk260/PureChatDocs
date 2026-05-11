# PureChat Docs

PureChat 的官方文档网站，使用 VitePress 构建。

## 项目介绍

PureChat 是一个基于 Vue3、Vite6、Electron 构建的聊天应用与 AI 开发框架，集成了 OpenAI、Ollama、DeepSeek 等大语言模型，并基于腾讯 IM SDK 实现即时通信功能。

## 技术栈

- **框架**: Vue 3 + TypeScript
- **构建工具**: Vite 6
- **文档引擎**: VitePress 1.6
- **样式**: UnoCSS + SCSS
- **UI 组件**: Element Plus

## 快速开始

### 安装依赖

```bash
pnpm install
```

### 开发模式

```bash
pnpm dev
```

### 构建生产版本

```bash
pnpm build
```

### 预览构建结果

```bash
pnpm serve
```

### GitHub Pages 构建

```bash
pnpm github:pages:build
```

## 项目结构

```
├── .github/           # GitHub 配置
│   └── workflows/     # CI/CD 工作流
├── .vitepress/        # VitePress 配置
│   ├── assets/        # 静态资源
│   ├── components/    # 自定义组件
│   ├── config/        # 配置文件
│   ├── hooks/         # 自定义 hooks
│   ├── icon/          # 图标资源
│   ├── plugins/       # 插件
│   ├── styles/        # 全局样式
│   └── theme/         # 主题定制
├── src/               # 文档内容
│   ├── dev/           # 开发相关文档
│   ├── feedback/      # 反馈与问答
│   ├── guides/        # 使用指南
│   ├── other/         # 其他文档
│   ├── preface/       # 前言与入门
│   ├── provider/      # 服务商文档
│   └── public/        # 公共资源
└── package.json       # 项目配置
```

## 功能特性

- 🧠 **AI 集成**: 支持 OpenAI、Ollama、DeepSeek 等大语言模型
- 💬 **即时通信**: 基于腾讯 IM SDK
- 🖥️ **跨平台**: 支持 macOS 和 Windows
- 📝 **Markdown**: 支持 Markdown 渲染和代码高亮
- 📸 **截屏分享**: 聊天记录截图与一键复制

## 文档内容

- **前言**: 项目介绍、快速开始、配置说明
- **指南**: 模型配置、API 使用、提示词管理
- **其他**: 部署指南、日志说明、协议文档

## 许可证

MIT License
