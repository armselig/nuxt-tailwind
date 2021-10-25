<template functional>
  <component
    :is="$options.getLinkType(props.to).element"
    :ref="data.ref"
    :class="[`link link--${$options.getLinkType(props.to).type}`, data.class, data.staticClass]"
    :style="[data.style, data.staticStyle]"
    :href="$options.getLinkType(props.to).element === 'a' ? props.to : undefined"
    :to="$options.getLinkType(props.to).element === 'nuxt-link' ? props.to : undefined"
    :rel="
      $options.getLinkType(props.to).type === 'external'
        ? `external noopener noreferrer${props.rel.length ? ' ' + props.rel : ''}`
        : props.rel
    "
    v-bind="data.attrs"
    v-on="listeners"
  >
    <slot />
  </component>
</template>

<script>
export default {
  props: {
    to: {
      required: true,
      type: String,
    },
    rel: {
      default: '',
      type: String,
    },
  },
  getLinkType(dest) {
    const emailPattern = new RegExp(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/);
    const urlPattern = new RegExp(
      /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()!@:%_+.~#?&//=]*)/
    );
    const isEmail = emailPattern.test(dest);
    const isExternal = urlPattern.test(dest);
    const linkElement = 'a';

    if (isEmail) {
      return { type: 'email', element: linkElement };
    }

    if (isExternal) {
      return { type: 'external', element: linkElement };
    }

    return { type: 'internal', element: 'nuxt-link' };
  },
};
</script>

<style lang="scss" scoped>
.link {
  cursor: pointer;

  &:active,
  &:focus,
  &:hover,
  &.nuxt-link-active {
    text-decoration: underline;
  }
}
</style>
