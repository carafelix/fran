import type { CollectionEntry } from 'astro:content'
import type { i18nLabels } from '@/i18n/utils';

export type SiteConfiguration = {
  title: string;
  description: string;
  href: string;
  author: {
    name: string,
    href: string
  }
  locale: string;
};

export type NavigationLinks = {
  [key: string]: NavigationLink;
};

export type NavigationLink = {
  path: string;
  label: i18nLabels;
};

export type SocialLinks = {
  [key: string]: SocialLink;
};

export type SocialLink = {
  label: string;
  href: string;
};

export type Obra = CollectionEntry<'obras'>
