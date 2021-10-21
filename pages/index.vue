<template>
  <div>
    <h1>{{ $t('PageIndex.h1') }} 👋</h1>
    <div class="flex flex-wrap justify-between">
      <base-picture src="dummy-320-1.jpg" alt="JPG dummy" />
      <base-picture src="dummy-320-2.png" alt="PNG dummy" />
    </div>
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
