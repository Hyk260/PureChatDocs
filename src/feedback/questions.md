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

## VScode (因为在此系统上禁止运行脚本)报错
[第一次执行脚本报错](https://cloud.tencent.com/developer/article/1746884)

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
