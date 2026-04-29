import { nextTick } from "vue";
import type { Theme } from "vitepress";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

const EXCLUDE_ALTS = new Set(["Deploy to Vercel"]);
const GALLERY_SELECTOR = '[data-fancybox="gallery"]';
const DOC_IMAGE_SELECTOR = ".vp-doc img";

type FancyboxModule = typeof import("@fancyapps/ui");
let fancyboxModulePromise: Promise<FancyboxModule> | null = null;

const getFancybox = async () => {
  if (!fancyboxModulePromise) {
    fancyboxModulePromise = import("@fancyapps/ui");
  }
  const { Fancybox } = await fancyboxModulePromise;
  return Fancybox;
};

const findNearestHeading = (imgElement: HTMLElement): string => {
  let currentElement: HTMLElement | null = imgElement;

  while (currentElement && currentElement !== document.body) {
    let previousSibling =
      currentElement.previousElementSibling as HTMLElement | null;
    while (previousSibling) {
      const tag = previousSibling.tagName;
      if (/^H[1-6]$/.test(tag)) {
        const text = previousSibling.textContent || "";
        return text.replace(/\u200B/g, "").trim();
      }
      previousSibling =
        previousSibling.previousElementSibling as HTMLElement | null;
    }
    currentElement = currentElement.parentElement;
  }

  return "";
};

const shouldSkipImage = (image: HTMLImageElement) => {
  const alt = image.getAttribute("alt") || "";
  for (const item of EXCLUDE_ALTS) {
    if (alt.includes(item)) return true;
  }
  return false;
};

const ensureImageAttrs = (image: HTMLImageElement) => {
  if (!image.hasAttribute("data-fancybox")) {
    image.setAttribute("data-fancybox", "gallery");
  }

  const alt = image.getAttribute("alt") || "";
  if (!alt) {
    const heading = findNearestHeading(image);
    if (heading) {
      image.setAttribute("alt", heading);
    }
  }

  const finalAlt = image.getAttribute("alt") || "";
  image.setAttribute("data-caption", finalAlt);
};

const collectGalleryImages = () => {
  return Array.from(
    document.querySelectorAll<HTMLImageElement>(DOC_IMAGE_SELECTOR),
  ).filter((image) => !shouldSkipImage(image));
};

export const bindFancybox = () => {
  nextTick(async () => {
    const Fancybox = await getFancybox();
    const images = collectGalleryImages();
    images.forEach(ensureImageAttrs);

    // 每次路由切换后重新绑定，先解绑避免重复监听。
    if (typeof Fancybox.unbind === "function") {
      Fancybox.unbind(GALLERY_SELECTOR);
    }

    const options = {
      Hash: false, // 禁用hash导航
      Thumbs: {
        type: "classic",
        showOnStart: false,
      },
      Images: {
        Panzoom: {
          maxScale: 4,
        },
      },
      Carousel: {
        transition: "slide",
      },
      Toolbar: {
        display: {
          left: ["infobar"],
          middle: [
            "zoomIn",
            "zoomOut",
            "toggle1to1",
            "rotateCCW",
            "rotateCW",
            "flipX",
            "flipY",
          ],
          right: ["slideshow", "thumbs", "close"],
        },
      },
    } as any;

    Fancybox.bind(GALLERY_SELECTOR, options);
  });
};

export const destroyFancybox = async () => {
  const Fancybox = await getFancybox();
  if (typeof Fancybox.destroy === "function") {
    Fancybox.destroy();
  }
};

export const setupImageViewerHooks = (
  router: Parameters<NonNullable<Theme["enhanceApp"]>>[0]["router"],
) => {
  router.onBeforeRouteChange = () => {
    destroyFancybox();
  };
  router.onAfterRouteChange = () => {
    bindFancybox();
  };
};
