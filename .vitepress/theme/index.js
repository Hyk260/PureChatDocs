// https://vitepress.dev/guide/custom-theme
import DefaultTheme from "vitepress/theme";
import { h, watch } from "vue";
import layout from "./layout.vue";
import Callout from "./components/Callout.vue";
import DeployButton from "./components/DeployButton.vue";
import ContentIntegrations from "./components/ContentIntegrations.vue";
import AsideSponsors from "./components/AsideSponsors.vue";
import TwoslashFloatingVue from "@shikijs/vitepress-twoslash/client";

// import "./style/style.css";
import "./style/overrides.css";
import "./style/rainbow.css";
import "./style/vars.css";
import "./style/iconify.css";
import "./style/index.css";

import "@shikijs/vitepress-twoslash/style.css";
import "virtual:group-icons.css";

let homePageStyle = null;

export default {
  extends: DefaultTheme,
  Layout() {
    // return h(DefaultTheme.Layout, null, {
    //   "aside-ads-before": () => h(AsideSponsors),
    // });
    return h(layout);
  },
  enhanceApp({ app, router, siteData }) {
    if (typeof window === "undefined") return;
    app.component("Callout", Callout);
    app.component("DeployButton", DeployButton);
    app.component("ContentIntegrations", ContentIntegrations);
    app.use(TwoslashFloatingVue);

    watch(
      () => router.route.data.relativePath,
      () => updateHomePageStyle(location.pathname === "/"),
      { immediate: true }
    );
  },
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

function updateHomePageStyle(value) {
  if (value) {
    if (homePageStyle) return;
    homePageStyle = document.createElement("style");
    homePageStyle.innerHTML = `:root { animation: rainbow 12s linear infinite; }`;
    document.body.appendChild(homePageStyle);
  } else {
    if (!homePageStyle) return;
    homePageStyle.remove();
    homePageStyle = undefined;
  }
}
