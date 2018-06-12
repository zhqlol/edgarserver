<style lang="less" scoped>
@import "index.less";
</style>

<template>
  <div class="edgar-list">
    <div class="edgar-list-meta">
      <div class="edgar-list-meta-title">
        <h4 v-if="vTitle !== ''">{{vTitle}}</h4>
        <div class="edgar-list-meta-title-extra">
          <slot name="extra"></slot>
        </div>
      </div>
      <div class="edgar-list-meta-content" v-if="vContent !== ''">
        {{vContent}}
      </div>
    </div>
  </div>
</template>

<script>
// 没啥大需求，简单封个list，就不引其他UI库了
export default {
  name: 'edgarList',
  data() {
    return {
    };
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    content: {
      type: String,
      default: ''
    }
  },
  computed: {
    vTitle() {
      return this.title;
    },
    vContent() {
      return this.content;
    }
  },
  methods: {
  }
};
</script>
