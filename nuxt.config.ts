export default defineNuxtConfig({
  modules: [
    "@vueuse/nuxt",
    "@nuxt/ui",
    "@nuxtjs/i18n",
    "@nuxtjs/seo",
    "@nuxt/content",
    "@nuxt/image",
    "@nuxt/scripts",
  ],
  app: {
    head: {
      meta: [
        {
          name: "google-site-verification",
          content: "2BuTHfopV8ybp0zU8UE1xRrYpeoBN4XusMoRn6ZXSNI",
        },
      ],
    },
  },

  imports: {
    presets: [
      {
        from: "vue-sonner",
        imports: ["toast"],
      },
    ],
  },

  devtools: {
    enabled: true,
  },

  css: ["~/assets/style/main.css"],

  site: {
    url: "https://ali-aslani-dev.vercel.app",
    defaultLocale: "en",
    indexable: true,
  },

  colorMode: {
    preference: "dark",
    fallback: "dark",
  },

  content: {
    renderer: {
      anchorLinks: false,
    },
    preview: {
      api: "https://ali-aslani-dev.vercel.app",
      dev: true,
    },
  },

  mdc: {
    highlight: {
      theme: {
        dark: "github-dark",
        default: "github-dark",
        light: "github-light",
      },
    },
  },

  runtimeConfig: {
    public: {
      resend: !!process.env.NUXT_PRIVATE_RESEND_API_KEY,
    },
  },

  routeRules: {
    // Needed to activate preview on Nuxt Studio
    "/": { prerender: false },
  },

  future: {
    compatibilityVersion: 4,
  },

  experimental: {
    viewTransition: true,
  },

  compatibilityDate: "2025-01-05",

  nitro: {
    experimental: {
      websocket: true,
    },
    prerender: {
      autoSubfolderIndex: false,
      crawlLinks: true,
      routes: ["/en", "/fa"],
    },
  },

  hooks: {
    "nitro:config": (config) => {
      if (process.env.NUXT_PRIVATE_RESEND_API_KEY) {
        config.handlers?.push({
          method: "post",
          route: "/api/emails/send",
          handler: "~~/server/emails/send.ts",
        });
      }
    },
  },

  i18n: {
    locales: [
      { code: "en", name: "English", language: "en-US" },
      { code: "fa", name: "Farsi", language: "fa-IR", dir: "rtl" },
    ],
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
      redirectOn: "root",
    },
    strategy: "prefix",
    defaultLocale: "fa",
  },

  icon: {
    customCollections: [
      {
        prefix: "custom",
        dir: "./app/assets/icons",
      },
    ],
    clientBundle: {
      scan: true,
      includeCustomCollections: true,
    },
    provider: "iconify",
  },

  ogImage: {
    zeroRuntime: true,
  },
});
