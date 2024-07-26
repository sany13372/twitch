import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // resolve: {
  //   alias: {
  //     '@assets': path.resolve(__dirname, './src/assets'),
  //     '@fonts': path.resolve(__dirname, './src/assets/fonts'),
  //     '@styles': path.resolve(__dirname, './src/assets/styles'),
  //     '@img': path.resolve(__dirname, './src/assets/img'),
  //     '@features': path.resolve(__dirname, './src/features'),
  //     '@layouts': path.resolve(__dirname, './src/layouts'),
  //     '@providers': path.resolve(__dirname, './src/providers'),
  //
  //     '@components': path.resolve(__dirname, './src/components'),
  //     '@context': path.resolve(__dirname, './src/context'),
  //     '@data': path.resolve(__dirname, './src/data'),
  //     '@hooks': path.resolve(__dirname, './src/hooks'),
  //     '@pages': path.resolve(__dirname, './src/pages'),
  //     '@services': path.resolve(__dirname, './src/services'),
  //     '@types': path.resolve(__dirname, './src/types'),
  //     '@utils': path.resolve(__dirname, './src/utils'),
  //     '@api': path.resolve(__dirname, './src/api'),
  //   }
  // }
})
