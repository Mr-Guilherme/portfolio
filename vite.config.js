const { resolve } = require('path')
const { defineConfig } = require('vite')

module.exports = defineConfig({
  base: '/portfolio/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        projects: resolve(__dirname, '/pages/projects/index.html'),
        contact: resolve(__dirname, '/pages/contact/index.html')
      }
    }
  }
})
