interface ImportMetaEnv {
  readonly VITE_BASE_URL: string;
  readonly VITE_ALGOLIA_APIKEY: string;
  readonly VITE_ALGOLIA_APPID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
