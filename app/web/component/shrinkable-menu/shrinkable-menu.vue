<style lang="less" scoped>
@import "./styles/menu.less";
</style>

<template>
  <div :style="{background: bgColor}" class="ivu-shrinkable-menu">
    <slot name="top"></slot>
    <sidebar-menu v-show="!shrink" :menu-theme="theme" :menu-list="menuList" :open-names="openNames" @on-change="handleChange"></sidebar-menu>
    <sidebar-menu-shrink v-show="shrink" :menu-theme="theme" :menu-list="menuList" :icon-color="shrinkIconColor" @on-change="handleChange"></sidebar-menu-shrink>
  </div>
</template>

<script>
import sidebarMenu from './components/sidebarMenu.vue';
import sidebarMenuShrink from './components/sidebarMenuShrink.vue';
import util from 'framework/utils/utils';
export default {
  name: 'shrinkableMenu',
  components: {
    sidebarMenu,
    sidebarMenuShrink
  },
  props: {
    shrink: {
      type: Boolean,
      default: false
    },
    menuList: {
      type: Array,
      required: true
    },
    theme: {
      type: String,
      default: 'dark',
      validator(val) {
        return util.oneOf(val, ['dark', 'light']);
      }
    },
    openNames: {
      type: Array
    }
  },
  computed: {
    bgColor() {
      return this.theme === 'dark' ? '#495060' : '#fff';
    },
    shrinkIconColor() {
      return this.theme === 'dark' ? '#fff' : '#495060';
    }
  },
  methods: {
    handleChange(name) {
      this.$router.push({
        name
      });
      this.$emit('on-change', name);
    }
  }
};
</script>
