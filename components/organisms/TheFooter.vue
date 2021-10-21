<template functional>
  <footer
    :ref="data.ref"
    :class="[data.class, data.staticClass]"
    :style="[data.style, data.staticStyle]"
    v-bind="data.attrs"
    v-on="listeners"
  >
    <div class="container mx-auto">
      <p>Site footer</p>
    </div>
  </footer>
</template>
