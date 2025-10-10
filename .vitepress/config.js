import path from "node:path";
import process from "node:process";
import { defineConfig, loadEnv } from "vitepress";
import { groupIconMdPlugin } from "vitepress-plugin-group-icons";
import { transformerTwoslash } from "@shikijs/vitepress-twoslash";
import { qqSvg } from "../src/icon/qqSvg";
import {
  setupVitePlugins,
  setupViteSearch,
  transformPageData,
} from "./plugins/index";
import { Nav, Head, Sidebar } from "./plugins/define";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  return {
    lang: "zh-CN",
    title: "PureChat",
    // https://vitepress.dev/zh/reference/site-config#base
    base: env.VITE_BASE_URL,
    description: "PureChat文档",
    head: Head,
    themeConfig: {
      editLink: {
        pattern: "https://github.com/Hyk260/PureChatDocs/edit/main/src/:path",
        text: "为此页提供修改建议",
      },
      outline: {
        label: "本页目录",
        level: [2, 3],
      },
      // 自定义上次更新的文本和日期格式。
      lastUpdated: {
        text: "上次更新",
        formatOptions: {
          dateStyle: "full",
          timeStyle: "medium",
        },
      },
      // https://vitepress.dev/zh/reference/site-config#cleanurls
      cleanUrls: true,
      // https://vitepress.dev/zh/reference/site-config#ignoredeadlinks
      ignoreDeadLinks: [/^\/play/, /^\/interactive/, /:\/\/localhost/],
      markdown: {
        math: true,
        // 代码块行号显示
        lineNumbers: true,
        // 图片懒加载
        image: {
          lazyLoading: true,
        },
        config(md) {
          // 代码组图标
          md.use(groupIconMdPlugin, {
            titleBar: { includeSnippet: true },
          });
        },
        codeTransformers: [transformerTwoslash()],
        theme: {
          light: "vitesse-light",
          dark: "vitesse-dark",
        },
      },
      transformPageData,
      // 导航栏上显示的 Logo，位于站点标题右侧。
      logo: "/favicon.png",
      socialLinks: [
        { icon: "github", link: "https://github.com/Hyk260/PureChat" },
        {
          icon: { svg: qqSvg },
          link: "https://jq.qq.com/?_wv=1027&k=Cd4Ihd2J",
        },
      ],
      nav: Nav,
      sidebar: Sidebar,
      // https://vitepress.dev/zh/reference/default-theme-footer#footer
      footer: {
        message: "Released under the MIT License.",
        copyright: "Copyright (c) 2023 yongkang",
      },
      search: setupViteSearch(),
    },
    srcDir: path.join(process.cwd(), "src"),
    // 项目的构建输出位置，相对于项目根目录
    outDir: path.join(process.cwd(), "docs"),
    // 缓存文件的目录，相对于项目根目录
    cacheDir: path.join(process.cwd(), "cache"),
    vite: {
      plugins: setupVitePlugins(env),
      server: {
        open: true,
      },
    },
  };
});
