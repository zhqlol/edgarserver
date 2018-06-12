<template>
  <div class="poptip" :style="vTip">
    <div class="poptip-arrow"><em :style="vEM"></em><span :style="vSPAN"></span></div>
    <div class="poptip-content" :style="vContent">
      <slot name="content"></slot>
    </div>
  </div>
</template>
<style>
@import './popover.css';
</style>
<script type="text/babel">
export default {
  name: 'EdgarPopover',
  props: [ 'backgroundcolor', 'border', 'color' ],
  computed: {
    vBackColor() {
      return this.backgroundcolor || '#fff';
    },
    vBorder() {
      return this.border || '#000';
    },
    vColor() {
      return this.color || '#000';
    },
    vTip() {
      return `border: 1px solid ${this.vBorder}; background: ${this.vBackColor};`;
    },
    vEM() {
      return `border-left-color: ${this.vBorder};`;
    },
    vSPAN() {
      return `border-left-color: ${this.vBackColor};`;
    },
    vContent() {
      return `color: ${this.vColor};`;
    }
  }
};
</script>