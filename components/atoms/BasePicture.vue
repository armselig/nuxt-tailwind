<template>
  <img
    v-if="isWebp"
    :src="require(`~/assets/images/${src}`)"
    :alt="alt"
    :title="title ? title : alt"
    :loading="loading"
  />
  <picture v-else class="picture">
    <source :srcset="require(`~/assets/images/${src}?webp`)" type="image/webp" />
    <source :srcset="require(`~/assets/images/${src}`)" :type="`image/${fileType}`" />
    <img
      :src="require(`~/assets/images/${src}`)"
      :alt="alt"
      :title="title ? title : alt"
      :loading="loading"
    />
  </picture>
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
  mounted() {
    this.handleSrc();
  },
  methods: {
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
  },
};
</script>
