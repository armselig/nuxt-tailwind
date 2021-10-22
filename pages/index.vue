<template>
  <div>
    <h1>Howdy-ho! 👋</h1>
    <div class="flex flex-wrap justify-between">
      <base-picture src="dummy-320-1.jpg" width="320" height="320" alt="JPG dummy" />
      <base-picture src="dummy-320-2.png" alt="PNG dummy" />
      <base-picture src="dummy-320-3.webp" width="320" height="320" alt="WebP dummy" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'Home',
    };
  },
  head() {
    return {
      title: this.title,
      // meta: [{ hid: 'og:title', property: 'og:title', content: this.title }],
    };
  },
};
</script>
