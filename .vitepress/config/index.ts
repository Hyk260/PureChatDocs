import path from "node:path";
import process from "node:process";
import { fileURLToPath, URL } from "node:url";
import { defineConfig, loadEnv } from "vitepress";
// import { Locales } from "../config/locales";
import { setupVitePlugins, setupMarkdownPlugins, transformPageData } from "../plugins/index";
import { ThemeConfig } from "../config/themeConfig";
import { Head } from "../plugins/define";

const env = loadEnv(process.env.NODE_ENV ?? "development", process.cwd(), "");

export default defineConfig({
  lang: "zh-CN",
  title: "PureChat",
  // https://vitepress.dev/zh/reference/site-config#base
  base: env.VITE_BASE_URL || "/",
  description: "PureChat文档",
  head: Head,
  // https://vitepress.dev/zh/reference/site-config#cleanurls
  cleanUrls: true,
  // https://vitepress.dev/zh/reference/site-config#ignoredeadlinks
  ignoreDeadLinks: true,
  markdown: setupMarkdownPlugins(),
  transformPageData: transformPageData,
  themeConfig: ThemeConfig,
  // locales: Locales,
  srcDir: path.join(process.cwd(), "src"),
  // 项目的构建输出位置，相对于项目根目录
  outDir: path.join(process.cwd(), "docs"),
  // 缓存文件的目录，相对于项目根目录
  cacheDir: path.join(process.cwd(), "cache"),
  // 静态资产目录，相对于项目根目录
  // assetsDir: path.join(process.cwd(), "public"),
  vite: {
    plugins: setupVitePlugins(env),
    server: {
      open: true,
    },
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("../../.vitepress", import.meta.url)),
      },
    },
  },
});
