// https://vitepress.dev/zh/guide/custom-theme
import DefaultTheme from "vitepress/theme";
import { h, watch } from "vue";
import { useElementPlus } from "./elementPlus";
import { setupImageViewerHooks } from "@/hooks/useImageView";
import Layout from "./components/Layout.vue";
import ConfigTool from "./components/ConfigTool.vue";
import Callout from "./components/Callout.vue";
import Confetti from "./components/Confetti.vue";
import DownloadLink from "./components/DownloadLink.vue";
import DeployButton from "./components/DeployButton.vue";
import ContentIntegrations from "./components/ContentIntegrations.vue";

import TwoslashFloatingVue from "@shikijs/vitepress-twoslash/client";

import type { Theme } from "vitepress";

// import "./style/style.css";
// import './style/link.scss'
import "./style/overrides.css";
import "./style/rainbow.css";
import "./style/vars.css";
import "./style/iconify.css";
import "./style/index.css";

import "uno.css";
import "@shikijs/vitepress-twoslash/style.css";
import "virtual:group-icons.css";

let homePageStyle: HTMLElement | null = null;
const GLOBAL_COMPONENTS = {
  Callout,
  Confetti,
  DeployButton,
  DownloadLink,
  ContentIntegrations,
  ConfigTool,
};

if (typeof window !== "undefined") {
  const browser = navigator.userAgent.toLowerCase();
  if (browser.includes("chrome")) {
    document.documentElement.classList.add("browser-chrome");
  } else if (browser.includes("firefox")) {
    document.documentElement.classList.add("browser-firefox");
  } else if (browser.includes("safari")) {
    document.documentElement.classList.add("browser-safari");
  }
}

function updateHomePageStyle(value: boolean) {
  if (value) {
    if (homePageStyle) return;
    homePageStyle = document.createElement("style");
    homePageStyle.innerHTML = `:root { animation: rainbow 12s linear infinite; }`;
    document.body.appendChild(homePageStyle);
  } else {
    if (!homePageStyle) return;
    homePageStyle.remove();
    homePageStyle = null;
  }
}

const setupHomePageStyleWatcher = (
  router: Parameters<NonNullable<Theme["enhanceApp"]>>[0]["router"],
) => {
  watch(
    () => router.route.data.relativePath,
    () => updateHomePageStyle(location.pathname === "/"),
    { immediate: true },
  );
};

const theme: Theme = {
  extends: DefaultTheme,
  Layout() {
    return h(Layout);
  },
  enhanceApp({ app, router }) {
    if (typeof window === "undefined") return;
    Object.entries(GLOBAL_COMPONENTS).forEach(([name, component]) => {
      app.component(name, component);
    });
    app.use(TwoslashFloatingVue);
    useElementPlus(app);
    setupImageViewerHooks(router);
    setupHomePageStyleWatcher(router);
  },
};

export default theme
