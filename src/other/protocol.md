# 使用指南

支持通过自定义链接配置 API 设置。

## 如何使用配置工具？

1. **输入 API Key**: 在第一个输入框中输入你的 OpenAI API Key
2. **输入 Base URL**: 在第二个输入框中输入 API 的基础 URL
3. **生成链接**: 工具会自动生成完整的 PureChat 链接
4. **复制或跳转**: 使用按钮复制链接或直接跳转

## 示例配置

```json
{
  "keyVaults": {
    "openai": {
      "apiKey": "sk-your-api-key-here",
      "baseURL": "https://aihubmix.com"
    }
  }
}
```

## 截图

<img src="/protocol.png">

## 注意事项

- 请确保 API Key 的安全性，不要在公共场所暴露
- Base URL 必须是有效的 HTTPS 地址
- 生成的链接包含敏感信息，请谨慎分享

## PureChat 链接生成器
<ConfigTool />