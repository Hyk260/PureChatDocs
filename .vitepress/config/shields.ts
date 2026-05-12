interface Badge {
  label: string;
  message: string;
  color: string;
  labelColor?: string;
  logo?: string;
  logoColor?: string;
  link?: string;
}

const deepwikiLogo =
  "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNy45MyAzMiI+PHBhdGggZD0iTTE5LjMzIDE0LjEyYy42Ny0uMzkgMS41LS4zOSAyLjE4IDBsMS43NCAxYy4wNi4wMy4xMS4wNi4xOC4wN2guMDRjLjA2LjAzLjEyLjAzLjE4LjAzaC4wMmMuMDYgMCAuMTEgMCAuMTctLjAyaC4wM2MuMDYtLjAyLjEyLS4wNS4xNy0uMDhoLjAybDMuNDgtMi4wMWMuMjUtLjE0LjQtLjQxLjQtLjdWOC40YS44MS44MSAwIDAgMC0uNC0uN2wtMy40OC0yLjAxYS44My44MyAwIDAgMC0uODEgMEwxOS43NyA3LjdoLS4wMWwtLjE1LjEyLS4wMi4wMnMtLjA3LjA5LS4xLjE0VjhhLjQuNCAwIDAgMC0uMDguMTd2LjA0Yy0uMDMuMDYtLjAzLjEyLS4wMy4xOXYyLjAxYzAgLjc4LS40MSAxLjQ5LTEuMDkgMS44OC0uNjcuMzktMS41LjM5LTIuMTggMGwtMS43NC0xYS42LjYgMCAwIDAtLjIxLS4wOGMtLjA2LS4wMS0uMTItLjAyLS4xOC0uMDJoLS4wM2MtLjA2IDAtLjExLjAxLS4xNy4wMmgtLjAzYy0uMDYuMDItLjEyLjA0LS4xNy4wN2gtLjAybC0zLjQ3IDIuMDFjLS4yNS4xNC0uNC40MS0uNC43VjE4YzAgLjI5LjE1LjU1LjQuN2wzLjQ4IDIuMDFoLjAyYy4wNi4wNC4xMS4wNi4xNy4wOGguMDNjLjA1LjAyLjExLjAzLjE3LjAzaC4wMmMuMDYgMCAuMTIgMCAuMTgtLjAyaC4wNGMuMDYtLjAzLjEyLS4wNS4xOC0uMDhsMS43NC0xYy42Ny0uMzkgMS41LS4zOSAyLjE3IDBzMS4wOSAxLjExIDEuMDkgMS44OHYyLjAxYzAgLjA3IDAgLjEzLjAyLjE5di4wNGMuMDMuMDYuMDUuMTIuMDguMTd2LjAycy4wOC4wOS4xMi4xM2wuMDIuMDJzLjA5LjA4LjE1LjExYzAgMCAuMDEgMCAuMDEuMDFsMy40OCAyLjAxYy4yNS4xNC41Ni4xNC44MSAwbDMuNDgtMi4wMWMuMjUtLjE0LjQtLjQxLjQtLjd2LTQuMDFhLjgxLjgxIDAgMCAwLS40LS43bC0zLjQ4LTIuMDFoLS4wMmMtLjA1LS4wNC0uMTEtLjA2LS4xNy0uMDhoLS4wM2EuNS41IDAgMCAwLS4xNy0uMDNoLS4wM2MtLjA2IDAtLjEyIDAtLjE4LjAyLS4wNy4wMi0uMTUuMDUtLjIxLjA4bC0xLjc0IDFjLS42Ny4zOS0xLjUuMzktMi4xNyAwYTIuMTkgMi4xOSAwIDAgMS0xLjA5LTEuODhjMC0uNzguNDItMS40OSAxLjA5LTEuODhaIiBzdHlsZT0iZmlsbDojNWRiZjlkIi8+PHBhdGggZD0ibS40IDEzLjExIDMuNDcgMi4wMWMuMjUuMTQuNTYuMTQuOCAwbDMuNDctMi4wMWguMDFsLjE1LS4xMi4wMi0uMDJzLjA3LS4wOS4xLS4xNGwuMDItLjAyYy4wMy0uMDUuMDUtLjExLjA3LS4xN3YtLjA0Yy4wMy0uMDYuMDMtLjEyLjAzLS4xOVYxMC40YzAtLjc4LjQyLTEuNDkgMS4wOS0xLjg4czEuNS0uMzkgMi4xOCAwbDEuNzQgMWMuMDcuMDQuMTQuMDcuMjEuMDguMDYuMDEuMTIuMDIuMTguMDJoLjAzYy4wNiAwIC4xMS0uMDEuMTctLjAyaC4wM2MuMDYtLjAyLjEyLS4wNC4xNy0uMDdoLjAybDMuNDctMi4wMmMuMjUtLjE0LjQtLjQxLjQtLjd2LTRhLjgxLjgxIDAgMCAwLS40LS43bC0zLjQ2LTJhLjgzLjgzIDAgMCAwLS44MSAwbC0zLjQ4IDIuMDFoLS4wMWwtLjE1LjEyLS4wMi4wMi0uMS4xMy0uMDIuMDJjLS4wMy4wNS0uMDUuMTEtLjA3LjE3di4wNGMtLjAzLjA2LS4wMy4xMi0uMDMuMTl2Mi4wMWMwIC43OC0uNDIgMS40OS0xLjA5IDEuODhzLTEuNS4zOS0yLjE4IDBsLTEuNzQtMWEuNi42IDAgMCAwLS4yMS0uMDhjLS4wNi0uMDEtLjEyLS4wMi0uMTgtLjAyaC0uMDNjLS4wNiAwLS4xMS4wMS0uMTcuMDJoLS4wM2MtLjA2LjAyLS4xMi4wNS0uMTcuMDhoLS4wMkwuNCA3LjcxYy0uMjUuMTQtLjQuNDEtLjQuNjl2NC4wMWMwIC4yOS4xNS41Ni40LjciIHN0eWxlPSJmaWxsOiM0NDY4YzQiLz48cGF0aCBkPSJtMTcuODQgMjQuNDgtMy40OC0yLjAxaC0uMDJjLS4wNS0uMDQtLjExLS4wNi0uMTctLjA4aC0uMDNhLjUuNSAwIDAgMC0uMTctLjAzaC0uMDNjLS4wNiAwLS4xMiAwLS4xOC4wMmgtLjA0Yy0uMDYuMDMtLjEyLjA1LS4xOC4wOGwtMS43NCAxYy0uNjcuMzktMS41LjM5LTIuMTggMGEyLjE5IDIuMTkgMCAwIDEtMS4wOS0xLjg4di0yLjAxYzAtLjA2IDAtLjEzLS4wMi0uMTl2LS4wNGMtLjAzLS4wNi0uMDUtLjExLS4wOC0uMTdsLS4wMi0uMDJzLS4wNi0uMDktLjEtLjEzTDguMjkgMTlzLS4wOS0uMDgtLjE1LS4xMWgtLjAxbC0zLjQ3LTIuMDJhLjgzLjgzIDAgMCAwLS44MSAwTC4zNyAxOC44OGEuODcuODcgMCAwIDAtLjM3LjcxdjQuMDFjMCAuMjkuMTUuNTUuNC43bDMuNDcgMi4wMWguMDJjLjA1LjA0LjExLjA2LjE3LjA4aC4wM2MuMDUuMDIuMTEuMDMuMTYuMDNoLjAzYy4wNiAwIC4xMiAwIC4xOC0uMDJoLjA0Yy4wNi0uMDMuMTItLjA1LjE4LS4wOGwxLjc0LTFjLjY3LS4zOSAxLjUtLjM5IDIuMTcgMHMxLjA5IDEuMTEgMS4wOSAxLjg4djIuMDFjMCAuMDcgMCAuMTMuMDIuMTl2LjA0Yy4wMy4wNi4wNS4xMS4wOC4xN2wuMDIuMDJzLjA2LjA5LjEuMTRsLjAyLjAycy4wOS4wOC4xNS4xMWguMDFsMy40OCAyLjAyYy4yNS4xNC41Ni4xNC44MSAwbDMuNDgtMi4wMWMuMjUtLjE0LjQtLjQxLjQtLjdWMjUuMmEuODEuODEgMCAwIDAtLjQtLjdaIiBzdHlsZT0iZmlsbDojNDI5M2Q5Ii8+PC9zdmc+";

export const badges: Badge[] = [
  {
    label: "Docs",
    message: "VitePress",
    color: "646CFF",
    labelColor: "555",
    logo: "vitepress",
    logoColor: "646CFF",
    link: "https://vitepress.vuejs.org/",
  },
  {
    label: "Search",
    message: "Algolia",
    color: "00AEFF",
    labelColor: "555",
    logo: "algolia",
    logoColor: "00AEFF",
    link: "https://www.algolia.com/",
  },
  {
    label: "Framework",
    message: "Vue 3",
    color: "3FB27F",
    labelColor: "555",
    logo: "vuedotjs",
    logoColor: "3FB27F",
    link: "https://vuejs.org/",
  },
  {
    label: "Language",
    message: "TypeScript",
    color: "3178C6",
    labelColor: "555",
    logo: "typescript",
    logoColor: "3178C6",
    link: "https://www.typescriptlang.org/",
  },
  {
    label: "UI",
    message: "Element Plus",
    color: "0170FE",
    labelColor: "555",
    logo: "element-plus",
    logoColor: "0170FE",
    link: "https://element-plus.org/",
  },
  {
    label: "CSS",
    message: "UnoCSS",
    color: "F7DF1E",
    labelColor: "555",
    logo: "unocss",
    logoColor: "000",
    link: "https://unocss.dev/",
  },
  {
    label: "Build Tool",
    message: "Vite",
    color: "646CFF",
    labelColor: "555",
    logo: "vite",
    logoColor: "646CFF",
    link: "https://vitejs.dev/",
  },
  {
    label: "Desktop",
    message: "Electron",
    color: "47848F",
    labelColor: "555",
    logo: "electron",
    logoColor: "47848F",
    link: "https://www.electronjs.org/",
  },
  {
    label: "Icons",
    message: "Lucide Vue",
    color: "FFFFFF",
    labelColor: "555",
    logo: "lucide",
    logoColor: "000",
    link: "https://lucide.dev/",
  },
  {
    label: "Code",
    message: "GitHub",
    color: "181717",
    labelColor: "555",
    logo: "github",
    logoColor: "fff",
    link: "https://github.com/Hyk260",
  },
  {
    label: "Deploy",
    message: "Vercel",
    color: "000000",
    labelColor: "555",
    logo: "vercel",
    logoColor: "fff",
    link: "https://vercel.com/",
  },
  {
    label: "Deepwiki",
    message: "PureChat",
    color: "0088CC",
    labelColor: "555",
    logo: deepwikiLogo,
    logoColor: "fff",
    link: "https://deepwiki.com/Hyk260/PureChat",
  },
  {
    label: "Next",
    message: "Next.js",
    color: "000000",
    labelColor: "555",
    logo: "nextdotjs",
    logoColor: "fff",
  },
];

export const endpoint: Badge[] = [
  {
    label: "Stars",
    message: "GitHub",
    color: "000000",
    labelColor: "555",
    logo: "github",
    logoColor: "fff",
    link: "https://github.com/Hyk260/PureChat/stargazers",
  },
  {
    label: "Forks",
    message: "GitHub",
    color: "000000",
    labelColor: "555",
    logo: "github",
    logoColor: "fff",
    link: "https://github.com/Hyk260/PureChat/network/members",
  },
];

// [![Stars](https://img.shields.io/github/stars/Hyk260/PureChat.svg)](https://github.com/Hyk260/PureChat/stargazers)
// [![Forks](https://img.shields.io/github/forks/Hyk260/PureChat.svg)](https://github.com/Hyk260/PureChat/network/members)
// https://simpleicons.org
// https://shields.io/badges
// [deepwiki-shield]: https://img.shields.io/badge/Deepwiki-PureChat-0088CC?style=flat&labelColor=555&logo=deepwiki&logoColor=fff

export function generateBadgeUrl(badge: Badge): string {
  const { label, message, color, labelColor = "555", logo, logoColor } = badge;
  let url = `https://img.shields.io/badge/${encodeURIComponent(label)}-${encodeURIComponent(message)}-${color}?style=flat&labelColor=${labelColor}`;
  if (logo) url += `&logo=${logo}`;
  if (logoColor) url += `&logoColor=${logoColor}`;
  return url;
}

export function generateEndpointUrl(endpoint: string): string {
  return `https://img.shields.io/${encodeURIComponent(endpoint)}`;
}
