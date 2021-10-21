/* eslint-disable-next-line import/no-extraneous-dependencies */
import { defineNuxtConfig } from '@nuxt/bridge';
import { SITE } from './constants/site';

export default defineNuxtConfig({
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: SITE.title,
    titleTemplate: `%s | ${SITE.title}`,
    htmlAttrs: {
      lang: SITE.langs[0],
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: SITE.description },
      { hid: 'author', name: 'author', content: SITE.author },
      { hid: 'publisher', name: 'publisher', content: SITE.publisher },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        hid: 'canonical',
        rel: 'canonical',
        href: SITE.host,
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/styles/main.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  // components: true,
  components: {
    dirs: [
      // https://nuxtjs.org/docs/features/component-discovery
      '@/components',
      '@/components/atoms',
      '@/components/molecules',
      '@/components/organisms',
    ],
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/eslint-module', // https://go.nuxtjs.dev/eslint
    '@nuxtjs/stylelint-module', // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/tailwindcss', // https://go.nuxtjs.dev/tailwindcss
    '@aceforth/nuxt-optimized-images', // https://marquez.co/docs/nuxt-optimized-images/
    '@nuxtjs/html-validator', // https://html-validator.nuxtjs.org/
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/pwa', // https://go.nuxtjs.dev/pwa
    '@nuxtjs/sitemap', // * needs to be last (https://sitemap.nuxtjs.org/)
  ],

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      name: SITE.title,
      short_name: SITE.shortname,
      description: SITE.description,
      lang: SITE.langs[0],
    },
    meta: {
      name: SITE.title,
      author: SITE.author,
      description: SITE.description,
      theme_color: SITE.primaryColor,
      lang: SITE.langs[0],
      ogHost: SITE.host,
      // ogTitle: SITE.title,
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  // Nuxt Loader (https://nuxtjs.org/docs/2.x/features/loading)
  loading: {
    color: SITE.primaryColor,
  },

  // https://marquez.co/docs/nuxt-optimized-images/
  optimizedImages: {
    optimizeImages: true,
  },

  // Nuxt HTML Validator (https://html-validator.nuxtjs.org/)
  // htmlValidator: {
  //   options: {
  //     rules: {
  //       // validator complains that doctype should be uppercase although it is
  //       'doctype-style': 'off',
  //     },
  //   },
  // },

  // https://sitemap.nuxtjs.org/guide/configuration
  sitemap: {
    hostname: SITE.host,
    gzip: true,
  },

  tailwindcss: {
    configPath: 'tailwind.config.cjs',
    viewer: false, // Applied patch, but still not working. See also: https://github.com/nuxt-community/tailwindcss-module/issues/389
  },
});
