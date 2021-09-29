export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "sofewareWeb",
    htmlAttrs: {
      lang: "zh"
    },
    bodyAttrs: {
      class: "dark"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    script: [
      {
        src: "/js/lazysize.js", defer: true
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["ant-design-vue/dist/antd.css", "@/scss/main.scss"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ["@/plugins/antd-ui", "@/plugins/permission"],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    ['@nuxtjs/proxy']
  ],
  proxy: {
    '/': {
      target: "https://mb3.729.cn"
    }
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    // extend(config, { isClient }) {
    //   config.externals = {
    //   }
    // }
  },
  // 配置自定义路由
  router: {
    mode: "hash",
    extendRoutes(routes, resolve) {}
  }
};
