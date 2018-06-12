<template>
    <div :id="elementId"></div>
</template>
<script>
import uuidv1 from 'uuid/v1';
import echarts from 'echarts';

export default {
  name: 'ec-basebar',
  data() {
    return {};
  },
  props: {
    elementId: { type: String, default: uuidv1().replace(/-/g, '') },
    parentSelector: { type: String },
    data: { type: [Array, Object] }
  },
  mounted() {
    const parent = document.querySelector(this.parentSelector);
    const element = document.getElementById(this.elementId);
    element.style.width = parent.offsetWidth - 32 + 'px';
    element.style.height = parent.offsetHeight - 32 + 'px';
    const eChart = echarts.init(element);
    const option = {
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: [{
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line'
      }]
    };
    eChart.setOption(option);
  }
};
</script>