# 模型服务商

PureChat 在部署时提供了丰富的模型服务商相关的环境变量，你可以使用这些环境变量轻松定义需要在 PureChat 中开启的模型服务商。

<Callout>
 客户端请求模式，将从浏览器直接发起会话请求，不会记录你的API Key
</Callout>

## OpenAI

### 获取 OpenAI API Key

API Key 是使用 PureChat 进行大语言模型会话的必要信息，本节以 OpenAI 模型服务商为例，简要介绍获取 API Key 的方式。

#### `A` 通过 OpenAI 官方渠道

- 注册一个 [OpenAI 账户](https://platform.openai.com/signup)，你需要使用国际手机号、非大陆邮箱进行注册；
- 注册完毕后，前往 [API Keys](https://platform.openai.com/api-keys) 页面，点击 `Create new secret key` 创建新的 API Key:

- 将此 API Key 填写到 PureChat 的 API Key 配置中，即可开始使用。

<Callout type='warning'>
  账户注册后，一般有 5 美元的免费额度，但有效期只有三个月。
</Callout>

<br/>

#### `B` 通过 OpenAI 第三方代理商

如果你发现注册 OpenAI 账户或者绑定外币信用卡比较麻烦，可以考虑借助一些知名的 OpenAI 第三方代理商来获取 API Key，这可以有效降低获取 OpenAI API Key 的门槛。但与此同时，一旦使用三方服务，你可能也需要承担潜在的风险，
请根据你自己的实际情况自行决策。以下是常见的第三方模型代理商列表，供你参考：

|                                                              | 服务商                                                     | 特性说明                                                     | Proxy 代理地址                           | 链接                            |
| ------------------------------------------------------------ | ---------------------------------------------------------- | ------------------------------------------------------------ | ---------------------------------------- | ------------------------------- |
| <img src="https://github-production-user-asset-6210df.s3.amazonaws.com/17870709/296272721-c3ac0bf3-e433-4496-89c4-ebdc20689c17.jpg" width="48" /> | **AiHubMix**                                               | 使用 OpenAI 企业接口，全站模型价格为官方 **6 折**（含 GPT-4 ） | `https://aihubmix.com/v1`                | [获取](https://lobe.li/XHnZIUP) |
|                                                              | [胜算云](https://www.shengsuanyun.com/?from=CH_XZG5OKZS) | AI模型聚合云服务平台，可访问全球主流大语言模型（如 ChatGPT、Claude、Gemini等） | `https://router.shengsuanyun.com/api/v1` | [获取免费试用额度](https://www.shengsuanyun.com/?from=CH_XZG5OKZS)                              |

> **免责申明**: 在此推荐的 OpenAI API Key 由第三方代理商提供，所以我们不对 API Key 的 **有效性** 和 **安全性** 负责，请你自行承担购买和使用 API Key 的风险。

### `VITE_OPENAI_API_KEY`

- 类型：必选
- 描述：这是你在 OpenAI 账户页面申请的 API 密钥，可以前往 [这里](https://platform.openai.com/api-keys) 查看
- 默认值：-
- 示例：`sk-xxxxxx...xxxxxx`

### `VITE_OPENAI_PROXY_URL`

- 类型：可选
- 描述：如果你手动配置了 OpenAI 接口代理，可以使用此配置项来覆盖默认的 OpenAI API 请求基础 URL
- 默认值：`https://api.openai.com/`
- 示例：`https://api.chatanywhere.cn/` 或 `https://aihubmix.com/`

<Callout type='warning'>
  请检查你的代理服务商的请求后缀，有的代理服务商会在请求后缀添加
  `/v1`，有的则不会。如果你在测试时发现 AI 返回的消息为空，请尝试添加 `/v1` 后缀后重试。
</Callout>

<Callout>
  是否填写 `/v1` 跟模型服务商有很大关系，比如 openai 的默认地址是 `api.openai.com/v1`
  。如果你的代理商转发了 `/v1` 这个接口，那么直接填 `proxy.com` 即可。 但如果模型服务商是直接转发了
  `api.openai.com` 域名，那么你就要自己加上 `/v1` 这个 url。
</Callout>

## DeepSeek (深度求索)

### `VITE_DEEPSEEK_API_KEY`

[DeepSeek](https://www.deepseek.com) 是一款先进的开源大型语言模型（LLM）。最新版本 DeepSeek-V2 在架构和性能上进行了显著优化，同时训练成本降低了 42.5%, 推理成本降低了 93.3%。
- 类型：必选
- 描述：这是你在 DeepSeek AI 服务中申请的 API 密钥 可以前往 [这里](https://platform.deepseek.com/api_keys) 查看
- 默认值：-
- 示例：`sk-xxxxxx...xxxxxx`

## GitHub

### `VITE_GITHUB_API_KEY`

- 类型：必选
- 描述：这是你在 GitHub 申请的 Personal access tokens 可以前往 [这里](https://github.com/settings/tokens) 查看
- 默认值：-
- 示例：`ghp_xxxxxx...xxxxxx=`

## Zhipu ChatGLM (智谱)

### `VITE_ZHIPU_API_KEY`

- 类型：必选
- 描述：这是你在 智谱 AI 服务中申请的 API 密钥， 可以前往 [这里](https://open.bigmodel.cn/usercenter/apikeys) 查看
- 默认值：-
- 示例：`xxxxxx...xxxxxx`

## 01 AI（零一万物）

### `VITE_ZEROONE_API_KEY`

- 类型：必选
- 描述：这是你在零一万物服务中申请的 API 密钥， 可以前往 [这里](https://platform.lingyiwanwu.com/apikeys) 查看
- 默认值：-
- 示例：`xxxxxx...xxxxxx`

## 通义千问

### `VITE_QWEN_API_KEY`

- 类型：必选
- 描述：这是你在阿里云百炼平台上获取的 DashScope API 密钥，可以前往 [这里](https://bailian.console.aliyun.com/?apiKey=1#/api-key) 查看
- 默认值：-
- 示例：`sk-xxxxx...xxxxx`
