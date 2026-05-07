import { inBrowser } from "vitepress";

import type { Theme } from "vitepress";

/**
 * 网站访问量统计
 *
 * https://events.vercount.one/
 */
export const useVisitData = () => {
  const script = document.createElement("script");
  script.defer = true;
  script.async = true;
  script.src = "https://events.vercount.one/js";
  document.head.appendChild(script);
};

export const setupVisitDataHooks = (
  router: Parameters<NonNullable<Theme["enhanceApp"]>>[0]["router"],
) => {
  if (!inBrowser) return;

  router.onAfterPageLoad = () => {
    useVisitData();
  };
};
