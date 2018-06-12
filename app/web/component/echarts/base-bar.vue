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
      color: ['#3398DB'],
      tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
          type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          axisTick: {
            alignWithLabel: true
          }
        }
      ],
      yAxis: [
        {
          type: 'value'
        }
      ],
      series: [
        {
          name: '发油',
          type: 'bar',
          barWidth: '60%',
          data: [10, 52, 200, 334, 390, 330, 220]
        }
      ]
    };
    eChart.setOption(option);
  }
};
</script>