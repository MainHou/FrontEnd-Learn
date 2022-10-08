<script setup lang="ts">
import { onMounted, ref } from "vue";
import * as echarts from "echarts";

const getData = () => {
  return new Promise((resolve, reject) => {
    resolve({
      a: 1,
      b: 2
    })
  })

}
await getData();
const option = {
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [150, 230, 224, 218, 135, 147, 260],
      type: 'line'
    }
  ]
};

const mainDom = ref()

onMounted(() => {
  const chart = echarts.init(mainDom.value, '', {
    width: '290',
    height: '600',
  });
  chart.setOption(option);
})
</script>

<template>
  <div style="
      width: 100vw;
      height: 100vh;
      display: flex;
      align-items: center;
      justify-items: center;
    ">
    <div id="main" ref="mainDom" style="width: 100%; height: 300px" />
  </div>
</template>

<style>
body,
html {
  margin: 0;
  padding: 0;
}
</style>