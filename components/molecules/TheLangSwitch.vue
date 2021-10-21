<template>
  <div class="lang-switch flex">
    <span class="lang-switch__label mr-2">{{ $t('TheLangSwitch.label') }}:</span>
    <ul class="lang-switch__list divide-x" :aria-label="$t('TheLangSwitch.ariaLabel')">
      <li
        v-for="locale in availableLocales"
        :key="locale.iso"
        class="lang-switch__item inline px-1 last:pr-0"
      >
        <b v-if="locale.code === currentLocale">{{ locale.code.toUpperCase() }}</b>
        <nuxt-link v-else :to="switchLocalePath(locale.code)" class="lang-switch__link">{{
          locale.code.toUpperCase()
        }}</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    availableLocales() {
      return this.$i18n.locales;
    },
    currentLocale() {
      return this.$i18n.locale;
    },
  },
};
</script>
