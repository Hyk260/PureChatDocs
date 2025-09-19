---
title: URL 分享设置参数 - PureChat 配置快速设置
description: 了解如何从外部 URL 导入和导出 PureChat 的设置参数，以及参数格式和类型。
tags:
  - URL 分享
  - 设置参数
  - PureChat
  - keyVaults
  - URL 导入
  - URL 导出
---

# URL 分享设置参数

PureChat 支持从外部 URL 导入设置参数，以便于快速设置 PureChat 的配置。

目前支持的设置项有：

- `keyVaults`: 模型供应商相关秘钥设置

## 从 URL 中导入

使用以下 URL 格式，可以从外部 URL 导入设置参数：

```plaintext
https://purechat.cn/chat?settings=<JSON格式的设置对象>
https://purechat.cn/chat?settings={"keyVaults":{"openai":{"apiKey":"user-key","baseURL":"https://your-proxy.com/v1"}}}
```

## 将设置导出到 URL

```ts
// 生成要导出到 URL 的设置
const settings = {
  keyVaults: {
    openai: {
      apiKey: 'user-key',
      baseURL: 'https://your-proxy.com/v1',
    },
  },
};
// /?settings={"keyVaults":{"openai":{"apiKey":"user-key","baseURL":"https://your-proxy.com/v1"}}}
```

<Callout type='warning'>
PureChat不对URL中的设置参数进行正确性校验，也不提供 URL 的加密、解密方法，请谨慎使用。
</Callout>
