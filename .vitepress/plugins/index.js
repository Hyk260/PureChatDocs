import UnoCSS from 'unocss/vite'
import {
  groupIconVitePlugin,
  localIconLoader,
} from "vitepress-plugin-group-icons";

const ogUrl = "https://docs.purechat.cn";

export function setupVitePlugins(env) {
  const plugins = [
    UnoCSS(),
    groupIconVitePlugin({
      customIcon: {
        github: localIconLoader(import.meta.url, '../assets/icon/mdi--github.svg'),
        gitee: localIconLoader(import.meta.url, '../assets/icon/simple-icons--gitee.svg'),
        gitlab: "vscode-icons:file-type-gitlab",
        js: "vscode-icons:file-type-js-official",
        json: "vscode-icons:file-type-json",
      },
    })
  ]

  return plugins;
}

export function setupViteSearch() {
  return {
    provider: "local",
    options: {
      // appId: '',
      // apiKey: '',
      // indexName: '',
      placeholder: '搜索文档',
      translations: {
        button: {
          buttonText: '搜索',
          buttonAriaLabel: '搜索'
        },
        modal: {
          searchBox: {
            resetButtonTitle: '清除查询条件',
            resetButtonAriaLabel: '清除查询条件',
            cancelButtonText: '取消',
            cancelButtonAriaLabel: '取消'
          },
          startScreen: {
            recentSearchesTitle: '搜索历史',
            noRecentSearchesText: '没有搜索历史',
            saveRecentSearchButtonTitle: '保存到搜索历史',
            removeRecentSearchButtonTitle: '从搜索历史中移除',
            favoriteSearchesTitle: '收藏',
            removeFavoriteSearchButtonTitle: '从收藏中移除'
          },
          errorScreen: {
            titleText: '无法获取结果',
            helpText: '你可能需要检查你的网络连接'
          },
          footer: {
            selectText: '选择',
            navigateText: '切换',
            closeText: '关闭',
            searchByText: '搜索供应商'
          },
          noResultsScreen: {
            noResultsText: '无法找到相关结果',
            suggestedQueryText: '你可以尝试查询',
            reportMissingResultsText: '你认为这个查询应该有结果？',
            reportMissingResultsLinkText: '向我们反馈'
          }
        }
      }
    }
  }
}

export function transformPageData(pageData) {
  const canonicalUrl = `${ogUrl}/${pageData.relativePath}`
    .replace(/\/index\.md$/, "/")
    .replace(/\.md$/, "/");
  pageData.frontmatter.head ??= [];
  pageData.frontmatter.head.unshift(
    ["link", { rel: "canonical", href: canonicalUrl }],
    ["meta", { property: "og:title", content: pageData.title }]
  );
  return pageData;
}