<template>
  <div>
    <h1>{{ $t('PageIndex.h1') }} 👋</h1>
    <section>
      <ul class="list-disc pl-4">
        <li><base-link to="subpage">Internal link</base-link></li>
        <li>
          <base-link to="#top">Internal anchor link</base-link>
        </li>
        <li>
          <base-link to="https://duckduckgo.com/" target="_blank">External link</base-link>
        </li>
        <li>
          <base-link to="mailto:foo@bar.net" title="Send email to foo@bar.net"
            >Email link</base-link
          >
        </li>
      </ul>
    </section>
    <section class="flex flex-wrap justify-between">
      <base-picture src="dummy-320-1.jpg" width="320" height="320" alt="JPG dummy" />
      <base-picture src="dummy-320-2.png" alt="PNG dummy" />
      <base-picture src="dummy-320-3.webp" width="320" height="320" alt="WebP dummy" />
    </section>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: this.pageTitle,
      // meta: [{ hid: 'og:title', property: 'og:title', content: this.title }],
    };
  },
  computed: {
    pageTitle() {
      return this.$t('PageIndex.title');
    },
  },
};
</script>
