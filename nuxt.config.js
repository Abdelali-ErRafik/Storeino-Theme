import { plugins } from "storeino-template-core";

export default {
  head: {
    title: 'npm-core',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: [],
  plugins:[
    ...plugins,
    // '~/plugins/tools.js',
    // '~/plugins/http.js',
    // '~/plugins/storeino.js',
    // '~/plugins/init.js',
    // '~/plugins/events.js',
  ],
  serverMiddleware: ['~/server/index'],
  components: true,
  buildModules: [],
  modules: [
    '@nuxtjs/axios',
  ],
  axios: {
    baseURL: '/',
  },
  build: {}
}
