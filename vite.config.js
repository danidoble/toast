import {defineConfig} from 'vite';

export default defineConfig({
    build: {
        rollupOptions: {
            output: {
                entryFileNames: `toast.js`,
                chunkFileNames: `toast.js`,
                assetFileNames: `toast.[ext]`
            }
        },
        chunkSizeWarningLimit: 500,
    }
});