<template>
  <div class="container">About</div>
  <div>{{ data }}</div>
</template>

<script lang="ts" setup>
import {reactive, toRefs} from 'vue';

const data = reactive({
  x: 1,
  y: 2,
  z: {
    z1: 'z1',
    z2: 'z2',
  },
});
const refData = toRefs(data);
console.log(data);
// console.log(refData.x);
console.log(refData.x.value);
refData.x.value = -1;
</script>

<style lang="sass" scoped></style>
