# PureChat 每日构建工作流

这是一个用于自动构建 PureChat Electron 应用的 GitHub Actions 工作流，支持多平台构建和自动化发布。

## 使用说明

1. 将文件保存为 `.github/workflows/nightly-build.yml`
2. 工作流会自动在每天 UTC 00:00 运行
3. 构建完成后可在 Actions 页面：
   - 查看构建日志
   - 下载构建产物
   - 获取构建摘要
4. 手动触发：在 GitHub Actions 页面点击 "Run workflow"

### 🚀 多平台支持
- **Windows 平台**
  - Windows x64 架构
  - Windows ARM64 架构
- **macOS 平台**
  - macOS ARM64 架构（Apple Silicon）
  - macOS x64 架构（Intel）

### 📦 构建产物
工作流会生成以下两个主要附件：
- `pure-chat-nightly-windows-latest` - 包含所有 Windows 版本
- `pure-chat-nightly-macos-latest` - 包含所有 macOS 版本

### 🔄 触发条件
- **自动触发**：推送到 `main` 分支时
- **手动触发**：通过 GitHub Actions 页面手动运行

### 🛠️ 技术栈
- **Node.js**: 20.x
- **包管理器**: Yarn 1.22.19
- **构建工具**: Electron Builder
- **运行环境**:
  - Windows: `windows-latest`
  - macOS: `macos-latest`

### ⚡ 性能优化
- **依赖缓存**: 使用 Yarn 缓存加速构建
- **并行构建**: Windows 和 macOS 平台并行构建
- **矩阵策略**: 同平台不同架构并行构建
- **临时文件管理**: 临时构建产物自动清理

### 🔒 安全特性
- **锁定依赖**: 使用 `--frozen-lockfile` 确保依赖一致性
- **环境隔离**: 每个构建任务在独立环境中运行
- **权限控制**: 使用 GitHub Token 进行安全认证

### 📊 构建监控
- **详细日志**: 每个步骤都有详细的中文日志输出
- **文件验证**: 构建完成后列出所有生成的文件
- **大小统计**: 显示构建产物的文件大小
- **构建摘要**: 自动生成包含警告信息的构建报告

### 🎯 用户体验
- **中文界面**: 所有步骤名称和日志都使用中文
- **清晰警告**: 明确标识这是测试版本，不建议生产使用
- **下载便利**: 提供直接的下载链接
- **版本标识**: 文件名包含构建日期便于识别

### 📋 构建摘要格式
每次构建完成后会自动生成包含以下信息的摘要：

## Build-Summary 摘要

此版本为自动构建的不稳定版本，仅供测试使用。不建议在生产环境中使用。

**构建日期：2025-01-07**

## Windows 安装包
```
pure-chat-nightly-20250107-arm64-portable.exe
pure-chat-nightly-20250107-arm64-setup.exe
pure-chat-nightly-20250107-x64-portable.exe
pure-chat-nightly-20250107-x64-setup.exe
latest.yml
```

## macOS 安装包
```
pure-chat-nightly-20250107-arm64.dmg
pure-chat-nightly-20250107-x64.dmg
latest-mac.yml
```

## 截图
<img src="/nightly-build/nightly-1.png">