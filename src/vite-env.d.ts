/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />

interface ImportMetaEnv {
    readonly VITE_APP_OPENAI_API_KEY: string;
    readonly VITE_APP_KAKAO_JAVASCRIPT_KEY: string;
    readonly VITE_BACK_END_API_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
