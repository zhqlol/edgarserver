<template>
  <LayoutContent>
    <slot slot="content" name="main"></slot>
  </LayoutContent>
</template>
<style>
@import '../../../asset/fonts/iconfont.css';
</style>
<script type="text/babel">
import LayoutContent from './content/content';
export default {
  components: {
    LayoutContent
  }
};
</script>
