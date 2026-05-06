import unocss from "unocss/vite";
import {
  groupIconVitePlugin,
  localIconLoader,
} from "vitepress-plugin-group-icons";
import { groupIconMdPlugin } from "vitepress-plugin-group-icons";
import { transformerTwoslash } from "@shikijs/vitepress-twoslash";

import type { MarkdownOptions } from "vitepress";

const ogUrl = "https://docs.purechat.cn";

export function setupVitePlugins(env) {
  const url = import.meta.url;

  const plugins = [
    unocss(),
    groupIconVitePlugin({
      customIcon: {
        github: localIconLoader(url, "../assets/icon/mdi--github.svg"),
        gitee: localIconLoader(url, "../assets/icon/simple-icons--gitee.svg"),
        gitlab: "vscode-icons:file-type-gitlab",
        js: "vscode-icons:file-type-js-official",
        json: "vscode-icons:file-type-json",
      },
    }),
  ];

  return plugins;
}

export function setupMarkdownPlugins(): MarkdownOptions {
  return {
    // math: true,
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
      // 预览代码Demo插件
      // md.use(vitepressDemoPlugin);
    },
    codeTransformers: [transformerTwoslash()],
    theme: {
      light: "vitesse-light",
      dark: "vitesse-dark",
    },
  };
}

export function transformPageData(pageData) {
  const canonicalUrl = `${ogUrl}/${pageData.relativePath.replace(/(?:\/index)?\.md$/, "")}/`;
  pageData.frontmatter.head ??= [];
  pageData.frontmatter.head.unshift(
    ["link", { rel: "canonical", href: canonicalUrl }],
    ["meta", { property: "og:title", content: pageData.title }],
    // Algolia 站点验证
    ["meta", { name: "algolia-site-verification", content: "6B4309EB99653304" }],
  );
  return pageData;
}
