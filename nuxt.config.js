import axios from 'axios'

export default {
  generate: {
    routes (callback) {
      axios.get('https://my-json-server.typicode.com/damienhensen/nuxt-portfolio/projectsnl')
        .then((res) => {
          const routes = res.data.map((project) => {
            return '/projects/' + project.id
          })
          callback(null, routes)
        })
        .catch(callback)
    }
  },
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    // title: process.env.npm_package_name || '',
    title: 'Damien Hensen | Portfolio',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      // { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
      { hid: 'description', name: 'description', content: 'Portfolio site van Damien Hensen, een webdeveloper. Student aan het Mediacollege Amsterdam' },
      { hid: 'tags', name: 'tags', content: 'Portfolio, Damien Hensen, Damien, Hensen, webdeveloper, web, developer, dev, html, css, js, nuxt, laravel, MA, mediacollege, mediadeveloper, frontend, front-end, backend, back-end, fullstack, full-stack' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa'
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
