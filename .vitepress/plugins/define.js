export const Nav = [
  { text: "介绍", link: "/preface/" },
  { text: "常见问题", link: "/feedback/questions" },
  {
    text: "v0.8.4",
    items: [
      { text: "更新日志", link: "/other/logs" }
    ]
  },
  {
    text: "链接",
    items: [
      { text: "在线预览", link: "https://purechat.cn" },
      { text: "Electron", link: "https://github.com/Hyk260/PureChat/releases" },
      { text: "gitee仓库", link: "https://gitee.com/H260788/PureChat" },
      { text: "github仓库", link: "https://github.com/Hyk260/PureChat" },
    ],
  },
];

export const Head = [
  ["link", { rel: "icon", href: "./favicon.ico" }],
  [
    "meta",
    {
      name: "keywords",
      content: "purechat, purechat docs",
    },
  ],
  [
    "meta",
    {
      name: "viewport",
      content: "width=device-width,initial-scale=1,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no",
    },
  ],
  ["meta", { name: "author", content: "yongkang" }],
  // ["link", { rel: "preconnect", href: "https://fonts.googleapis.com" }],
];

export const Sidebar = [
  {
    text: "前言",
    items: [
      { text: "介绍", link: "/preface/" },
      { text: "快速上手", link: "/preface/start" },
      { text: "项目配置", link: "/preface/config" },
      { text: "目录结构", link: "/preface/directory" },
      { text: "提交规范", link: "/preface/commitlint" },
      { text: "客户端下载", link: "/preface/download" },
      { text: "自动化发布工作流", link: "/preface/actions" },
    ],
  },
  {
    text: "其他",
    // collapsed: true,
    items: [
      // { text: "技术网站", link: "/other/recommendation" },
      { text: "更新日志", link: "/other/logs" },
      { text: "私有化部署", link: "/other/deploy" },
    ],
  },
  {
    text: "问题&反馈",
    items: [
      { text: "常见问题", link: "/feedback/questions" },
      {
        text: "知识科普", link: "/feedback/knowledge"
      }
    ],
  },
  {
    text: "AI指南",
    items: [
      { text: "OpenAI 相关问题", link: "/guides/openai" },
      { text: "大语言模型指南", link: "/guides/model" },
      { text: "提示词指南", link: "/guides/prompts" },
      { text: "模型服务商", link: "/guides/model-provider" },
      { text: "Ollama集成", link: "/guides/ollama" },
      { text: "Ollama使用", link: "/guides/olama-usage" },
    ],
  },
];