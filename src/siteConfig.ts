import type {
  SiteConfiguration,
  NavigationLinks,
  SocialLinks,
} from "@/types.ts";

export const SITE: SiteConfiguration = {
  title: "Fran735",
  description:
    "Francisco Benavides Artista Visual",
  href: "https://fran735.cl",
  author: {
    name: 'Hero Protagonist',
    href: 'https://heroprotagonist.is-a.dev/'
  },
  locale: "es-CL",
};

export const NAV_LINKS: NavigationLinks = {
  bio: {
    path: "/bio",
    label: "nav.bio",
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
