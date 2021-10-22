<template functional>
  <div
    :ref="data.ref"
    :class="['picture', data.class, data.staticClass]"
    :style="[data.style, data.staticStyle]"
    v-bind="data.attrs"
    v-on="listeners"
  >
    <img
      v-if="isWebp"
      :src="require(`~/assets/images/${props.src}`)"
      :alt="props.alt"
      :title="props.title ? props.title : props.alt"
      :loading="props.loading"
      class="picture__img"
    />
    <picture v-else class="picture__pic">
      <source :srcset="require(`~/assets/images/${props.src}?webp`)" type="image/webp" />
      <source :srcset="require(`~/assets/images/${props.src}`)" :type="`image/${fileType}`" />
      <img
        :src="require(`~/assets/images/${props.src}`)"
        :alt="props.alt"
        :title="props.title ? props.title : props.alt"
        :loading="props.loading"
        class="picture__img"
      />
    </picture>
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
    loading: {
      type: String,
      default: 'eager',
    },
  },
  data() {
    return {
      isWebp: false,
      fileType: undefined,
    };
  },
  handleSrc() {
    const srcArr = this.$props.src.split('.');
    const fileExt = srcArr.pop().toLowerCase();
    // const fileName = srcArr.join();

    switch (fileExt) {
      case 'jpg':
        this.fileType = 'jpeg';
        break;

      default:
        this.fileType = fileExt;
        break;
    }
  },
};
</script>
