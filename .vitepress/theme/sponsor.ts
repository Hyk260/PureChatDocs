import { onMounted, onUnmounted, ref } from "vue";

const data = ref();

const dataHost = "https://sponsors.vuejs.org";
const dataUrl = `${dataHost}/vite.json`;

const viteSponsors = {
  special: [
    {
      name: "StackBlitz",
      url: "https://stackblitz.com",
      img: "/stackblitz.svg",
    },
    {
      name: "NuxtLabs",
      url: "https://nuxtlabs.com",
      img: "/nuxtlabs.svg",
    },
    {
      name: "Astro",
      url: "https://astro.build",
      img: "/astro.svg",
    },
  ],
  gold: [],
};

function toggleDarkLogos() {
  if (data.value) {
    const isDark = document.documentElement.classList.contains("dark");
    data.value.forEach(({ items }) => {
      items.forEach((s) => {
        if (s.hasDark) {
          s.img = isDark
            ? s.img.replace(/(\.\w+)$/, "-dark$1")
            : s.img.replace(/-dark(\.\w+)$/, "$1");
        }
      });
    });
  }
}

export function useSponsor() {
  onMounted(async () => {
    const ob = new MutationObserver((list) => {
      for (const m of list) {
        if (m.attributeName === "class") {
          toggleDarkLogos();
        }
      }
    });
    ob.observe(document.documentElement, { attributes: true });
    onUnmounted(() => {
      ob.disconnect();
    });

    if (data.value) {
      return;
    }

    const result = await fetch(dataUrl);
    const json = await result.json();

    data.value = mapSponsors(json);
    toggleDarkLogos();
  });

  return {
    data,
  };
}

function mapSponsors(sponsors) {
  return [
    {
      tier: "合作伙伴",
      size: "big",
      items: viteSponsors["special"],
    },
    {
      tier: "铂金赞助商",
      size: "big",
      items: mapImgPath(sponsors["platinum"]),
    },
    {
      tier: "黄金赞助商",
      size: "medium",
      items: [...mapImgPath(sponsors["gold"]), ...viteSponsors["gold"]],
    },
  ];
}

const viteSponsorNames = new Set(
  Object.values(viteSponsors).flatMap((sponsors) => sponsors.map((s) => s.name))
);

function mapImgPath(sponsors) {
  return sponsors
    .filter((sponsor) => !viteSponsorNames.has(sponsor.name))
    .map((sponsor) => ({
      ...sponsor,
      img: `${dataHost}/images/${sponsor.img}`,
    }));
}
