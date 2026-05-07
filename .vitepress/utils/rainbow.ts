
import { watch } from "vue";
import { isBrowser } from "./platform";

import type { Theme } from "vitepress";
// 首页添加彩虹动画
import "@/theme/style/rainbow.css";

let homePageStyle: HTMLElement | null = null;

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

export const setupHomePageStyleWatcher = (
  router: Parameters<NonNullable<Theme["enhanceApp"]>>[0]["router"],
) => {
  if (!isBrowser) return;
  watch(
    () => router.route.data.relativePath,
    () => updateHomePageStyle(location.pathname === "/"),
    { immediate: true },
  );
};

