export const SITE_CONFIG = {
  name: "Your Name",
  title: "Your Name — Product Engineer",
  description:
    "I build real products, launch them, learn from users, and improve them through iteration.",
  url: "https://yoursite.com",
  cta: {
    primary:   { label: "Book a Call", href: "https://cal.com/yourhandle" },
    secondary: { label: "WhatsApp",    href: "https://wa.me/yournumber"   },
    tertiary:  { label: "Email",       href: "mailto:you@yourdomain.com"  },
  },
  social: {
    github:   "https://github.com/yourhandle",
    linkedin: "https://linkedin.com/in/yourhandle",
    twitter:  "https://twitter.com/yourhandle",
  },
} as const;

export type SiteConfig = typeof SITE_CONFIG;
