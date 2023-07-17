/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_SERIVCE_BASE_URL: string;
    readonly VITE_ACCESS_TOKEN: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
