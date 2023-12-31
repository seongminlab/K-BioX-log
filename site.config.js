const CONFIG = {
  // profile setting (required)
  profile: {
    name: "K-BioX",
    image: "/kbiox_logo.png", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "K-BioX PhD Students",
    bio: "Mix and Match",
    email: "",
    linkedin: "",
    github: "Kbiox-log",
    instagram: "",
  },
  projects: [
    {
      name: `K-BioX`,
      href: "http://kbiox.org",
    },
  ],
  // blog setting (required)
  blog: {
    title: "K-BioX log",
    description: "welcome to K-BioX 대학원생 당장만나",
    theme: "auto", // ['light', 'dark', 'auto']
  },
  // CONFIG configration (required)
  link: "K-BioX log",
  since: 2023, // If leave this empty, current year will be used.
  lang: "en-US", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-playground.vercel.app", // The link to generate OG image, don't end with a slash
  seo: {
    keywords: ["Blog", "Website", "Notion","K-BioX","Kbiox","summit"],
  },
  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },
  // plugin configuration (optional)
  googleAnalytics: {
    enable: true,
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
    enable: true,
    config: {
      repo: "seongminlab/K-BioX-log",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "73b10a3f-c2b2-478b-a7fc-096fc4164153", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
}
module.exports = { CONFIG }
