import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [
      vue(),
      tailwindcss(),
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src/'),
        '@component': path.resolve(__dirname, 'src/component/'),
        '@lib': path.resolve(__dirname, 'src/lib/'),
        '@service': path.resolve(__dirname, 'src/service/'),
      }
    },
    define: {
      'process.env.API_URL': JSON.stringify(env.API_URL),
      'process.env.API_KEY': JSON.stringify(env.API_KEY),
      'process.env.CLIENT_HOST': JSON.stringify(env.CLIENT_HOST),
      'process.env.SERVER_HOST': JSON.stringify(env.SERVER_HOST),
    },
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler' // or "modern"
        }
      }
    }
  }
})
