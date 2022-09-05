/// <reference types="vite/client" />

interface ImportMetaEnv extends Readonly<Record<string, string>> {
    readonly valkyr_app_title: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}
