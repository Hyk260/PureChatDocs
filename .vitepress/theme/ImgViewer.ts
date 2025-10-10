import { nextTick } from "vue";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

const EXCLUDE_ALTS = ["Deploy to Vercel"];
const GALLERY_SELECTOR = '[data-fancybox="gallery"]';

const findNearestHeading = (imgElement: HTMLElement): string => {
  let currentElement: HTMLElement | null = imgElement;

  while (currentElement && currentElement !== document.body) {
    let previousSibling = currentElement.previousElementSibling as HTMLElement | null;
    while (previousSibling) {
      const tag = previousSibling.tagName;
      if (/^H[1-6]$/.test(tag)) {
        const text = previousSibling.textContent || "";
        return text.replace(/\u200B/g, "").trim();
      }
      previousSibling = previousSibling.previousElementSibling as HTMLElement | null;
    }
    currentElement = currentElement.parentElement;
  }

  return "";
};

export const bindFancybox = () => {
  nextTick(async () => {
    const { Fancybox } = await import("@fancyapps/ui");

    const imgs = Array.from(document.querySelectorAll<HTMLImageElement>(".vp-doc img"));

    imgs.forEach((image) => {
      const alt = image.getAttribute("alt") || "";

      if (EXCLUDE_ALTS.some((item) => alt.includes(item))) return;

      if (!image.hasAttribute("data-fancybox")) image.setAttribute("data-fancybox", "gallery");

      if (!alt) {
        const heading = findNearestHeading(image);
        if (heading) image.setAttribute("alt", heading);
      }

      // 赋予 data-caption 属性以便显示图片标题
      const altString = image.getAttribute("alt") || "";
      image.setAttribute("data-caption", altString);
    });

    Fancybox.bind(GALLERY_SELECTOR, {
      Hash: false, // 禁用hash导航
      caption: false, // 更换标题
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
  } as any);
  });
};

export const destroyFancybox = async () => {
  const mod = await import("@fancyapps/ui");
  const Fancybox = (mod as any).Fancybox;
  if (Fancybox && typeof Fancybox.destroy === "function") {
    Fancybox.destroy();
  }
};
