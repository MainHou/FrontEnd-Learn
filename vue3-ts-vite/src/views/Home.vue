<template>
  <div class="home">
    <div>
      <div>{{ count }}</div>
      <button @click="increment">+</button>
      <button @click="decrease">-</button>
    </div>

    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  onBeforeMount,
  onBeforeUnmount,
  onBeforeUpdate,
  onMounted,
  onUnmounted,
  onUpdated,
} from 'vue';
import HelloWorld from '@/components/HelloWorld.vue';
import {useCounterStore} from '@/store/modules/counter';
import {storeToRefs} from 'pinia';

export default defineComponent({
  name: 'Home',
  setup() {
    const counterStore = useCounterStore();
    const {count} = storeToRefs(counterStore);
    const {increment, decrease} = counterStore;
    // 第一种方式，直接修改store中的state，不推荐
    counterStore.count++;
    // 第二种方式，$patch 可以同时修改多个值
    counterStore.$patch({count: counterStore.count});
    counterStore.$patch((store) => {
      store.count = 1;
    });
    // 第三种方式，直接修改store中的state，不推荐
    increment();

    const resetData = () => {
      counterStore.$reset();
    };

    //生命周期
    console.log('setup');

    onBeforeMount(() => {
      console.log('onBeforeMount');
    });

    onMounted(() => {
      console.log('onMounted');
    });

    onBeforeUpdate(() => {
      console.log('onBeforeUpdate');
    });

    onUpdated(() => {
      console.log('onUpdated');
    });

    onBeforeUnmount(() => {
      console.log('onBeforeUnmount');
    });

    onUnmounted(() => {
      console.log('onUnmounted');
    });

    return {
      count,
      resetData,
      increment,
      decrease,
    };
  },
  beforeCreate() {
    console.log('beforeCreate');
  },
  components: {
    HelloWorld,
  },
});
</script>
