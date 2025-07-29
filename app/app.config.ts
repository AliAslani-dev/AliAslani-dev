export default defineAppConfig({
  global: {
    meetingLink: 'https://cal.com/aliaslani/15min', // اگر لینک شخصی داری اینو عوض کن
    available: true,
  },
  profile: {
    name: 'Ali Aslani',
    job: 'Full-stack Developer',
    email: 'contact@aliaslani.com', // ایمیل خودتو بزار
    phone: '09140336422', // شماره خودتو بزار
    picture: '/profile/photo_2025-07-26_16-23-07.jpg', // آدرس عکس پروفایلت، می‌تونی لینک یا مسیر پروژه بذاری
  },
  socials: {
    github: 'https://github.com/aliaslani', // لینک گیت‌هابت
    linkedin: 'https://linkedin.com/in/aliaslani', // لینکدینت
    instagram: 'https://instagram.com/aliaslani', // اگر داری
  },
  seo: {
    title: 'Ali Aslani - Full-stack Developer Portfolio',
    description: 'Portfolio of Ali Aslani, a skilled full-stack developer delivering reliable and user-friendly web solutions.',
    url: 'https://portfolio-production-67bf.up.railway.app', // آدرس سایتت
  },
  ui: {
    colors: {
      primary: 'emerald',
      neutral: 'neutral',
    },
    notifications: {
      position: 'top-0 bottom-auto',
    },
    notification: {
      progress: {
        base: 'absolute bottom-0 end-0 start-0 h-0',
        background: 'bg-transparent dark:bg-transparent',
      },
    },
    button: {
      slots: {
        base: 'cursor-pointer',
      },
      defaultVariants: {
        color: 'neutral',
      },
    },
    input: {
      defaultVariants: {
        color: 'neutral',
      },
    },
    textarea: {
      defaultVariants: {
        color: 'neutral',
      },
    },
    icons: {
      loading: 'lucide:loader',
    },
  },
  link: [
    {
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      href: '/apple-touch-icon.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      href: '/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      href: '/favicon-16x16.png',
    },
    {
      rel: 'manifest',
      href: '/site.webmanifest',
    },
  ],
})
