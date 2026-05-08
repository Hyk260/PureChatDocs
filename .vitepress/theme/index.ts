// https://vitepress.dev/zh/guide/custom-theme
import DefaultTheme from "vitepress/theme";
import { EnhanceAppContext } from "vitepress";
import { h } from "vue";
import { useElementPlus } from "@/utils/elementPlus";
import { setupImageViewerHooks } from "@/hooks/useImageView";
import { setupHomePageStyleWatcher } from "@/utils/rainbow";
import { setupVisitDataHooks } from "@/hooks/useVisitData";
import Layout from "./components/Layout.vue";
import ConfigTool from "./components/ConfigTool.vue";
import Callout from "./components/Callout.vue";
import Confetti from "@/components/Confetti.vue";
import DocTitleMeta from "@/components/DocTitleMeta.vue";
import DownloadLink from "@/components/DownloadLink.vue";
import DeployButton from "./components/DeployButton.vue";
import ContentIntegrations from "./components/ContentIntegrations.vue";

import TwoslashFloatingVue from "@shikijs/vitepress-twoslash/client";

import type { Theme } from "vitepress";

// import "./style/style.css";
// import './style/link.scss'
import "./style/overrides.css";
import "./style/vars.css";
import "./style/iconify.css";
import "./style/index.css";

import "uno.css";
import "@shikijs/vitepress-twoslash/style.css";
import "virtual:group-icons.css";

const GLOBAL_COMPONENTS = {
  Callout,
  Confetti,
  DocTitleMeta,
  DeployButton,
  DownloadLink,
  ContentIntegrations,
  ConfigTool,
};

const theme: Theme = {
  extends: DefaultTheme,
  Layout: () => h(Layout),
  enhanceApp({ app, router }: EnhanceAppContext) {
    Object.entries(GLOBAL_COMPONENTS).forEach(([name, component]) => {
      app.component(name, component);
    });
    app.use(TwoslashFloatingVue);
    useElementPlus(app);
    setupImageViewerHooks(router);
    setupVisitDataHooks(router);
    setupHomePageStyleWatcher(router);
  },
};

export default theme;
