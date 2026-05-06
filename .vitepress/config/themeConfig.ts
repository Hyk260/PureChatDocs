import { Nav, Sidebar } from "../plugins/define";
import { qqSvg } from "../icon/qqSvg";

import type { DefaultTheme } from "vitepress/theme";

export const localSearchOptions: DefaultTheme.LocalSearchOptions = {
  translations: {
    button: {
      buttonText: "搜索",
      buttonAriaLabel: "搜索",
    },
    modal: {
      footer: {
        selectText: "选择",
        navigateText: "切换",
        closeText: "关闭",
      },
    },
  },
};

export const algoliaSearchOptions: DefaultTheme.AlgoliaSearchOptions = {
  appId: "",
  apiKey: "",
  indexName: "pure-chat-docs",
  placeholder: "搜索文档",
  translations: {
    button: {
      buttonText: "搜索",
      buttonAriaLabel: "搜索",
    },
    modal: {
      searchBox: {
        resetButtonTitle: "清除查询条件",
        resetButtonAriaLabel: "清除查询条件",
        cancelButtonText: "取消",
        cancelButtonAriaLabel: "取消",
      },
      startScreen: {
        recentSearchesTitle: "搜索历史",
        noRecentSearchesText: "没有搜索历史",
        saveRecentSearchButtonTitle: "保存到搜索历史",
        removeRecentSearchButtonTitle: "从搜索历史中移除",
        favoriteSearchesTitle: "收藏",
        removeFavoriteSearchButtonTitle: "从收藏中移除",
      },
      errorScreen: {
        titleText: "无法获取结果",
        helpText: "你可能需要检查你的网络连接",
      },
      footer: {
        selectText: "选择",
        navigateText: "切换",
        closeText: "关闭",
        searchByText: "搜索供应商",
      },
      noResultsScreen: {
        noResultsText: "无法找到相关结果",
        suggestedQueryText: "你可以尝试查询",
        reportMissingResultsText: "你认为这个查询应该有结果？",
        reportMissingResultsLinkText: "向我们反馈",
      },
    },
  },
};

const searchOptionsMap = {
  local: localSearchOptions,
  algolia: algoliaSearchOptions,
} as const;

export function setupViteSearch(
  type: "local" | "algolia" = "local",
): DefaultTheme.Config["search"] {
  return {
    provider: type,
    options: searchOptionsMap[type],
  } as DefaultTheme.Config["search"];
}

export const ThemeConfig: DefaultTheme.Config = {
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
  // 搜索
  search: setupViteSearch(),
};
