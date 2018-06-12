<template>
  <i :class="vClazz" :style="vStyle"></i>
</template>
<script type="text/babel">
export default {
  name: 'EIcon',
  props: [ 'type', 'size', 'color' ],
  computed: {
    vSize() {
      return this.size || '16';
    },
    vColor() {
      return this.color || '#495060';
    },
    vClazz() {
      return `ivu-icon iconfont edgaricon-${this.type}`;
    },
    vStyle() {
      return `color: ${this.vColor}; font-size: ${this.vSize}px`;
    }
  }
};
</script>