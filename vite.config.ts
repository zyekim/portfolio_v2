import { fileURLToPath, URL } from 'node:url'
import fs from 'node:fs'
import path from 'node:path'

import { defineConfig, type Plugin } from 'vite'
import vue from '@vitejs/plugin-vue'

// Node 24의 fs.rm 재귀 삭제는 OneDrive 동기화 폴더에서 프로세스 크래시를
// 일으킨다. Vite 기본 emptyOutDir가 이 API를 사용하므로, 파일 단위로
// 삭제하는 자체 정리 로직으로 대체한다.
function safeEmptyOutDir(): Plugin {
  const emptyDir = (dir: string) => {
    if (!fs.existsSync(dir)) return
    for (const entry of fs.readdirSync(dir)) {
      const full = path.join(dir, entry)
      if (fs.lstatSync(full).isDirectory()) {
        emptyDir(full)
        fs.rmdirSync(full)
      } else {
        fs.unlinkSync(full)
      }
    }
  }

  return {
    name: 'safe-empty-out-dir',
    apply: 'build',
    configResolved(config) {
      emptyDir(path.resolve(config.root, config.build.outDir))
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [safeEmptyOutDir(), vue()],
  build: {
    emptyOutDir: false,
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
