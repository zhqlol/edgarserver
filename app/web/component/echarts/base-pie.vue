<template>
    <div :id="elementId"></div>
</template>
<script>
import uuidv1 from 'uuid/v1';
import echarts from 'echarts';

export default {
  name: 'ec-basepie',
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
    console.log(parent.offsetWidth);
    const element = document.getElementById(this.elementId);
    element.style.width = parent.offsetWidth - 32 + 'px';
    element.style.height = parent.offsetHeight - 32 + 'px';
    const eChart = echarts.init(element);
    const option = {
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
      },
      legend: {
        orient: 'vertical',
        left: 'left',
        data: ['尚未提交', '审批通过', '审批失败']
      },
      series: [
        {
          name: '访问来源',
          type: 'pie',
          radius: '55%',
          center: ['50%', '60%'],
          data: [
            { value: 335, name: '尚未提交' },
            { value: 310, name: '审批通过' },
            { value: 234, name: '审批失败' }
          ],
          itemStyle: {
            emphasis: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    };
    eChart.setOption(option);
  }
};
</script>