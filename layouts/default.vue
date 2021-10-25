<template>
  <div id="top" class="page">
    <the-header class="page__header bg-primary text-white" />
    <main class="page__main container mx-auto">
      <Nuxt />
    </main>
    <the-footer class="page__footer bg-primary text-white" />
  </div>
</template>

<script>
import { SITE } from '~/constants/site';

export default {
  head() {
    return {
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: SITE.host + this.$route.path,
        },
      ],
      // meta: [{ hid: 'og-title', property: 'og:title', content: this.pageTitle }],
    };
  },
};
</script>
