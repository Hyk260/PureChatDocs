# 在 PureChat 中使用 Ollama

Ollama 是一款强大的本地运行大型语言模型（LLM）的框架，支持多种语言模型，包括 Llama 2, Mistral 等。现在，PureChat 已经支持与 Ollama 的集成，这意味着你可以在 PureChat 中轻松使用 Ollama 提供的语言模型来增强你的应用。

本文档将指导你如何在 PureChat 中使用 Ollama：

## 在 macOS 下使用 Ollama

### 本地安装 Ollama

[下载 Ollama for macOS](https://ollama.com/download?utm_source=purechat&utm_medium=docs&utm_campaign=download-macos) 并解压、安装。

### 配置 Ollama 允许跨域访问

由于 Ollama 的默认参数配置，启动时设置了仅本地访问，所以跨域访问以及端口监听需要进行额外的环境变量设置 `OLLAMA_ORIGINS`。使用 `launchctl` 设置环境变量：

```bash
launchctl setenv OLLAMA_ORIGINS "*"
```

完成设置后，需要重启 Ollama 应用程序。

### 在 PureChat 中与本地大模型对话

接下来，你就可以使用 PureChat 与本地 LLM 对话了。

## 在 windows 下使用 Ollama

### 本地安装 Ollama

[下载 Ollama for Windows](https://ollama.com/download?utm_source=purechat&utm_medium=docs&utm_campaign=download-windows) 并安装。

### 配置 Ollama 允许跨域访问

由于 Ollama 的默认参数配置，启动时设置了仅本地访问，所以跨域访问以及端口监听需要进行额外的环境变量设置 `OLLAMA_ORIGINS`。

在 Windows 上，Ollama 继承了您的用户和系统环境变量。

1. 首先通过 Windows 任务栏点击 Ollama 退出程序。
2. 从控制面板编辑系统环境变量。
3. 为您的用户账户编辑或新建 Ollama 的环境变量 `OLLAMA_ORIGINS`，值设为 `*` 。
4. 点击`OK/应用`保存后重启系统。
5. 重新运行`Ollama`。

### 在 PureChat 中与本地大模型对话

接下来，你就可以使用 PureChat 与本地 LLM 对话了。

## 安装 Ollama 模型

Ollama 支持多种模型，你可以在 [Ollama Library](https://ollama.com/library) 中查看可用的模型列表，并根据需求选择合适的模型。

### 用 Ollama 拉取模型到本地

当然，你也可以通过在终端执行以下命令安装模型，以 llama3 为例：

```bash
ollama pull llama3
```

::: tip
  你可以前往 [与 Ollama 集成](/guides/ollama) 了解如何部署 PureChat，以满足与 Ollama 的集成需求。
::: 
 