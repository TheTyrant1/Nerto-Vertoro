import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
    publicDir: 'assets',
    server: {
        host: '0.0.0.0',
        port: 3000,
        strictPort: true,
        watch: {
            usePolling: true,
        },
    },
    build: {
        outDir: 'dist',
        emptyOutDir: true,
    },
    css: {
        preprocessorOptions: {
            scss: {
                api: 'modern-compiler',
            },
        },
    },
});