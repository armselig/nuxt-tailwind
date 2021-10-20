<template>
  <div>
    <h1>Howdy-ho! 👋</h1>
    <div class="flex flex-wrap justify-between">
      <base-picture src="dummy-320-1.jpg" alt="JPG dummy" />
      <base-picture src="dummy-320-2.png" alt="PNG dummy" />
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
