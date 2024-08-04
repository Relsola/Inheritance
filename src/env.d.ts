/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_BASE_URL: '/' | '/Inheritance/';
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
