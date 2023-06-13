const CONFIG = {
  // profile setting (required)
  profile: {
    name: "Minari🌿",
    image: "/scientist.svg", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "from Laptop to Bench",
    bio: "Evolution and Proteogenomics",
    email: "s.cheon1995@gmail.com",
    linkedin: "",
    github: "seongminlab",
    instagram: "",
  },
  projects: [
    {
      name: `Profile`,
      href: "https://minari-blog.vercel.app/about",
    },
  ],
  // blog setting (required)
  blog: {
    title: "🌿Minari`s Blog",
    description: "welcome to my blog!",
    theme: "auto", // ['light', 'dark', 'auto']
  },

  // CONFIG configration (required)
  link: "https://minari-blog.vercel.app",
  since: 2023, // If leave this empty, current year will be used.
  lang: "en-US", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash
  seo: {
    keywords: ["Blog", "Website", "Notion","프로테오믹스","프로테오지노믹스","Minari","미나리"],
  },

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: false,
    config: {
      repo: "morethanmin/morethan-log",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: true,
    config: {
      host: "https://cusdis.com",
      appid: "8b573158-38b1-46da-a1ce-0dd7caedc91c", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
}

module.exports = { CONFIG }
