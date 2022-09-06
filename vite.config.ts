import { resolve } from "path";
import { defineConfig, loadEnv } from 'vite'

import type { UserConfig, ConfigEnv } from 'vite';

import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

import { wrapperEnv } from './build/utils';
import { createProxy } from './build/vite/proxy';

import pkg from './package.json';
import dayjs from 'dayjs'
import { execSync } from 'child_process';

const { name, author, license, version, repository, description, dependencies, devDependencies } = pkg;
const __APP_INFO__ = {
  pkg: { name, author, license, version, repository, description, dependencies, devDependencies },
  lastBuildTime: dayjs().format('YYYY/MM/DD HH:mm:ss'),
  gitTags: execSync('echo $(git rev-parse --short HEAD)').toString().trim(),
};

// naive ui
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }: ConfigEnv): UserConfig => {
  const root = process.cwd();

  const env = loadEnv(mode, root);
  const viteEnv = wrapperEnv(env);

  const { VITE_PORT, VITE_PUBLIC_PATH, VITE_PROXY } = viteEnv;

  return {
    envPrefix: "valkyr_",
    base: VITE_PUBLIC_PATH,
    plugins: [
      vue(),
      vueJsx(),
      Components({
        resolvers: [NaiveUiResolver()]
      })
    ],
    server: {
      port: VITE_PORT,
      host: "0.0.0.0",
      strictPort: true,
      proxy: createProxy(VITE_PROXY),
    },
    preview: {
      port: VITE_PORT,
      host: "0.0.0.0",
      strictPort: true,
      proxy: createProxy(VITE_PROXY),
    },
    build: {
      outDir: "dist",
      manifest: true,
      target: 'esnext',
      sourcemap: "inline",
      assetsDir: "static",
      reportCompressedSize: false, // 启用/禁用 gzip 压缩大小报告
      chunkSizeWarningLimit: 512, // chunk 大小警告的限制（单位kb）
    },
    resolve: {
      alias: {
        "/^": resolve(__dirname, "."),
        "/@": resolve(__dirname, "src"),
        "/#": resolve(__dirname, "types"),
      },
    },
    define: {
      __APP_INFO__: JSON.stringify(__APP_INFO__),
    },
    css: {
      preprocessorOptions: {
        scss: {}
      }
    }
  }
})
