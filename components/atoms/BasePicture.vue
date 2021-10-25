<template functional>
  <div
    v-if="$options.handleSrc(props.src).isWebp"
    :ref="data.ref"
    :class="['picture', data.class, data.staticClass]"
    :style="[data.style, data.staticStyle]"
    v-bind="data.attrs"
    v-on="listeners"
  >
    <img
      :src="require(`~/assets/images/${props.src}`)"
      :alt="props.alt"
      :title="props.title ? props.title : props.alt"
      :width="props.width"
      :height="props.height"
      class="picture__img"
    />
  </div>
  <picture
    v-else
    :ref="data.ref"
    :class="['picture', data.class, data.staticClass]"
    :style="[data.style, data.staticStyle]"
    v-bind="data.attrs"
    v-on="listeners"
  >
    <source :srcset="require(`~/assets/images/${props.src}?webp`)" type="image/webp" />
    <source
      :srcset="require(`~/assets/images/${props.src}`)"
      :type="`image/${$options.handleSrc(props.src).fileType}`"
    />
    <img
      :src="require(`~/assets/images/${props.src}`)"
      :alt="props.alt"
      :title="props.title ? props.title : props.alt"
      :width="props.width"
      :height="props.height"
      class="picture__img"
    />
  </picture>
</template>

<script>
export default {
  props: {
    alt: {
      default: '',
      type: String,
    },
    src: {
      required: true,
      type: String,
    },
    title: {
      default: '',
      type: String,
    },
    width: {
      default: undefined,
      type: String,
    },
    height: {
      default: undefined,
      type: String,
    },
  },
  handleSrc(src) {
    const srcArr = src.split('.');
    const fileExt = srcArr.pop().toLowerCase();
    let fileType = fileExt;
    let isWebp = false;

    switch (fileExt) {
      case 'jpg':
        fileType = 'jpeg';
        break;

      case 'webp':
        isWebp = true;
        break;

      default:
        break;
    }

    return { fileType, isWebp };
  },
};
</script>
