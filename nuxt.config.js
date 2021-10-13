const path = require('path')

console.log(process.env.NODE_ENV);
export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "BaoYUN - 精品mac软件下载",
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
    link: [
      {
        rel: "icon",
        type: "image/x-icon",
        href:
          process.env.NODE_ENV === "production"
            ? "/Templates/html/favicon.ico"
            : "/favicon.ico"
      }
    ],
    script: [
      {
        src:
          process.env.NODE_ENV === "production"
            ? "/Templates/html/js/lazysize.js"
            : "/js/lazysize.js"
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["ant-design-vue/dist/antd.css", "@/scss/main.scss"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ["@/plugins/antd-ui", "@/plugins/permission", "@/plugins/device"],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxtjs/proxy"],
  axios: {
    proxy: true
  },
  proxy: {
    "/include/getdata": {
      target: "http://n0a21fdd.729.cn",
      changeOrigin: true
    }
  },
  devMiddleware: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    // publicPath: "/Templates/html/_nuxt",
    transpile: [/vant.*?less/],
    babel: {
      plugins: [
        [
          "import",
          {
            libraryName: "vant",
            style: name => {
              return `${name}/style/less.js`;
            }
          },
          "vant"
        ]
      ]
    },
    extend(config, { isClient, loaders }) {
      config.output.publicPath = "/Templates/html/_nuxt/";
      // "D:\\chenxiaohong\\软件站\\sofewareWeb\\.nuxt\\dist\\client";
      // config.output.path = path.resolve(__dirname, "../dist");
      // config.output.filename = 'js/[name].js'
      // config.output.chunkFilename = 'js/[name].js'
      console.log('===========',config.output.path);
    }
  },
  // 配置自定义路由
  router: {
    mode: "hash",
    extendRoutes(routes, resolve) {}
  }
};
