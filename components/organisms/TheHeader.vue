<template functional>
  <header
    :ref="data.ref"
    :class="[data.class, data.staticClass]"
    :style="[data.style, data.staticStyle]"
    v-bind="data.attrs"
    v-on="listeners"
  >
    <div class="container mx-auto">
      <p>Site header</p>
    </div>
  </header>
</template>
