<template>
  <div id="app" class="app-main">
      <slot name="content"></slot>
  </div>
</template>
<style>
@import "content.css";
</style>
<script type="text/babel">
export default {
  name: 'v-content',
  data() {
    return {

    };
  },
  components: {},
  mounted() {

  }
};
</script>
