import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {

    plugins: [vue()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src/'),
        '@component': path.resolve(__dirname, 'src/component'),
        '@lib': path.resolve(__dirname, 'src/lib'),
        '@service': path.resolve(__dirname, 'src/service'),
      }
    },
    define: {
      'process.env.SERVER_HOST': JSON.stringify(env.SERVER_HOST),
    }
  }
})
