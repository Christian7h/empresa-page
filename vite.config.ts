import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Usar esbuild para mejor performance (más rápido que terser)
    minify: 'esbuild',
    // Code splitting optimizado
    rollupOptions: {
      output: {
        manualChunks: {
          // Separar React en su propio chunk para mejor caching
          'react-vendor': ['react', 'react-dom'],
          // Separar iconos
          'icons-vendor': ['lucide-react']
        },
        // Nombres de archivos optimizados
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: 'assets/[ext]/[name]-[hash].[ext]'
      }
    },
    // Optimizaciones de performance
    target: 'esnext',
    cssCodeSplit: true,
    sourcemap: false, // Sin sourcemaps en producción
    chunkSizeWarningLimit: 1000,
    // Inline assets pequeños
    assetsInlineLimit: 4096,
  },
  optimizeDeps: {
    // Incluir lucide-react para pre-bundling
    include: ['react', 'react-dom', 'lucide-react'],
    // Remover la exclusión
    exclude: [],
  },
  // Configuración del servidor de desarrollo
  server: {
    hmr: {
      overlay: false
    }
  }
});