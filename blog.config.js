const BLOG = {
  title: 'Cassiano Gobbet',
  author: 'Cassiano Gobbet',
  email: 'cassiano@zeitgeist.digital',
  link: 'https://zeitgeist.digital',
  newsletter: 'Digital Zeitgeist',
  description: 'Digital | Media | Tech',
  lang: 'en-US', // ['en-US', 'fr-FR', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES']
  timezone: 'Europe/Paris', // See https://en.wikipedia.org/wiki/List_of_tz_database_time_zones for all options.
  appearance: 'dark', // ['light', 'dark', 'auto'],
  font: 'sans-serif', // ['sans-serif', 'serif']
  lightBackground: '#bfbfbf', // use hex value, don't forget '#' e.g #fffefc
  darkBackground: '#212936', // use hex value, don't forget '#'
  path: '', // leave this empty unless you want to deploy Notionic in a folder
  since: 2022, // If leave this empty, current year will be used.
  postsPerPage: 10,
  sortByDate: true,
  pagesShow: {
    newsletter: false,
    notes: false,
    projects: true,
    contact: true,
    books: true,
    friends: false
  },
  showWeChatPay: false,
  previewImagesEnabled: true,
  autoCollapsedNavBar: false, // The automatically collapsed navigation bar
  ogImageGenerateHost: 'og-gobbet.vercel.app', // The link to generate OG image, don't end with a slash
  defaultCover: '/public/cover.png',
  socialLink: {
    twitter: 'https://twitter.com/cassianogobbet',
    github: 'https://github.com/kneescars',
    telegram: 'https://t.me/cassiano_telegram'
  },
  seo: {
    keywords: ['Cassiano Gobbet', 'Blog', 'portfolio', 'digital','media'],
    googleSiteVerification: '' // Remove the value or replace it with your own google site verification code
  },
  notionPageId: process.env.NOTION_PAGE_ID, // DO NOT CHANGE THIS! Edit .env file!
  notionSpacesId: process.env.NOTION_SPACES_ID, // DO NOT CHANGE THIS! Edit .env file!
  notionAccessToken: process.env.NOTION_ACCESS_TOKEN, // Useful if you prefer not to make your database public
  notionDomain: 'troovr.notion.site',
  telegramToken: process.env.TELEGRAM_TOKEN, // The token of your Telegram bot
  telegramChatId: '1836406539', // The chat id of your Telegram bot
  telegramChannelUrl: 'https://t.me/digitalzeitgeist', // The link of your Telegram channel
  telegramChannelName: 'Digital Zeitgeist', // The name of your Telegram channel
  craftConfigShareUrl: 'https://www.craft.do/s/kQtcWqkv98cHhB', // The link to share your craft config
  analytics: {
    provider: 'ga', // Currently we support Google Analytics, Ackee, Umami and Cloudflare Insights, please fill with 'ga' or 'ackee' or 'umami' or 'cf', leave it empty to disable it.
    ackeeConfig: {
      tracker: '', // e.g 'https://ackee.example.com/tracker.js'
      dataAckeeServer: '', // e.g https://ackee.example.com , don't end with a slash
      domainId: '' // e.g '0e2257a8-54d4-4847-91a1-0311ea48cc7b'
    },
    cfConfig: {
      scriptUrl: 'https://static.cloudflareinsights.com/beacon.min.js', // Default
      token: '' // Like '{"token": "xxxxxxxxxxxxxxxxxx"}'
    },
    gaConfig: {
      measurementId: '' // e.g: G-XXXXXXXXXX
    },
    umamiConfig: {
      scriptUrl: '', // The url of your Umami script
      websiteId: '' // The website id of your Umami instance
    }
  },
  comment: {
    // support provider: utterances, supacomments
    provider: '', // leave it empty if you don't need any comment plugin
    supaCommentsConfig: {
      supabaseUrl: '', // The url of your Supabase instance
      supabaseAnonKey: '' // The anonymous key of your Supabase instance
    },
    utterancesConfig: {
      repo: ''
    }
  },
  isProd: process.env.VERCEL_ENV === 'production' // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
}
// export default BLOG
module.exports = BLOG
