import { useData } from "vitepress";
import { nextTick, provide } from "vue";

type ToggleAppearancePayload = {
  clientX: number;
  clientY: number;
};

type ViewTransitionDocument = Document & {
  startViewTransition: (callback: () => Promise<void> | void) => {
    ready: Promise<void>;
  };
};

const TOGGLE_APPEARANCE_KEY = "toggle-appearance";
const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: no-preference)";

export function useToggleTheme() {
  const transitionDocument = document as ViewTransitionDocument;

  function canUseViewTransitions() {
    return (
      "startViewTransition" in transitionDocument &&
      window.matchMedia(REDUCED_MOTION_QUERY).matches
    );
  }

  const { isDark } = useData();

  provide(
    TOGGLE_APPEARANCE_KEY,
    async ({ clientX: x, clientY: y }: ToggleAppearancePayload) => {
      if (!canUseViewTransitions()) {
        isDark.value = !isDark.value;
        return;
      }

      const startClipPath = `circle(0px at ${x}px ${y}px)`;
      const endClipPath = `circle(${Math.hypot(
        Math.max(x, innerWidth - x),
        Math.max(y, innerHeight - y),
      )}px at ${x}px ${y}px)`;
      const clipPath = [startClipPath, endClipPath];
      const reverseClipPath = [endClipPath, startClipPath];

      await transitionDocument.startViewTransition(async () => {
        isDark.value = !isDark.value;
        await nextTick();
      }).ready;

      const isNewDarkMode = isDark.value;
      document.documentElement.animate(
        { clipPath: isNewDarkMode ? reverseClipPath : clipPath },
        {
          duration: 300,
          easing: "ease-in",
          pseudoElement: `::view-transition-${isNewDarkMode ? "old" : "new"}(root)`,
        },
      );
    },
  );
}
