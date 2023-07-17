import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import eslint from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        // eslint plugin breaking the build: https://github.com/gxmari007/vite-plugin-eslint#usage
        {
            ...eslint(),
            apply: 'build',
        },
    ],
    server: {
        port: 3000,
    },
    preview: {
        port: 4000,
    },
    build: {
        outDir: 'build'
    },
})
