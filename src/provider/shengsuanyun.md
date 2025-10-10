# 接入胜算云API

### 第一步：获取胜算云 API Key

#### 获取 API Key

1. 注册并登录 [胜算云官网](https://www.shengsuanyun.com/?from=CH_XZG5OKZS) 。
2. 打开[控制台 —— API 密钥管理页面](https://console.shengsuanyun.com/user/keys)，生成 API 密钥。

#### 获取模型信息

访问 [模型列表页面](https://router.shengsuanyun.com/model) 查看可用模型及详细参数，其中涵盖如 Claude Sonnet 4、Gemini 2.5 Pro 等大厂模型，以及 DeepSeek - R1、Llama3.2 - 3B 等定制模型。

---

### 第二步：配置 PureCaht

1. discover 选择模型服务商 以openAI为例

<image src="/shengsuanyun/1.png" />

2. 点击配置 填入API Key 和 API地址
- `API地址`：https://router.shengsuanyun.com/api
- `API Key`：[点击获取](https://console.shengsuanyun.com/user/keys)

<image src="/shengsuanyun/2.png" />

3. 点击`获取模型列表`按钮并添加模型

<image src="/shengsuanyun/3.png" />

4. 选择模型并点击`检查` 测试连接是否正常 成功会提示 `连接成功`

5. 截图

<image src="/shengsuanyun/4.png" />