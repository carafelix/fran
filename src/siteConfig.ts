import type {
  SiteConfiguration,
  NavigationLinks,
  SocialLinks,
} from "@/types.ts";

export const SITE: SiteConfiguration = {
  title: "Fran735",
  description:
    "A barebones starter theme. Built with Astro, Tailwind CSS, and Markdown.",
  href: "https://barebones.superwebthemes.com",
  author: {
    name: 'Hero Protagonist',
    href: 'https://heroprotagonist.is-a.dev/'
  },
  locale: "es-CL",
};

export const NAV_LINKS: NavigationLinks = {
  blog: {
    path: "/blog",
    label: "Biografía",
  },
};

export const SOCIAL_LINKS: SocialLinks = {
  email: {
    label: "Email",
    href: "yo@fran735.cl",
  },
  instagram: {
    label: "Instagram",
    href: "https://www.instagram.com/fraani3/",
  }
};
