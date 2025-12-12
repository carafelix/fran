// import { defineMiddleware } from 'astro:middleware';
// import {
//   getLangFromUrl,
//   useTranslatedPath,
//   useTranslations
// } from '@/i18n/utils';

// export const onRequest = defineMiddleware((context, next) => {
//   // Get lang from url param
//   const lang = context.currentLocale

//   // If changed
//   if (lang !== 'es') {
//     // Redirect to lang changed or default (en)
//     return context.redirect(`/${lang ?? 'es'}`);
//   }

//   return next();
// });
