<template>
  <div id="myChart" :style="{width: '300px', height: '300px'}"></div>
</template>
<script>
export default {
  name: "hello",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  mounted() {
    this.drawLine();
  },
  methods: {
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById('myChart'))
      // 绘制图表
      myChart.setOption({
          title: { text: '在Vue中使用echarts' },
          series: [{
            radius:'55%',
             tooltip: {},
              name: '销量',
              type: 'pie',
              data: [
                {value:100,name:'蓝色'},
                {value:140,name:'黑色'},
                {value:200,name:'红色'},
                {value:300,name:'绿色'},
                {value:80,name:'黄色'},
              ],
          }]
      });
    }
  }
};
</script>