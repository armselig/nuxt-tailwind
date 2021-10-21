<template>
  <div class="page">
    <the-header class="page__header bg-primary text-white" />
    <main class="page__main container mx-auto">
      <Nuxt />
    </main>
    <the-footer class="page__footer bg-primary text-white" />
  </div>
</template>

<script>
export default {
  head() {
    return this.$nuxtI18nHead({ addSeoAttributes: true });
  },
};
</script>
