<template>
  <div class="container">Index Page</div>
  <NuxtLink to="/detail">Detail</NuxtLink>
  <NuxtLink to="/user-admin/1">user-admin/1</NuxtLink>
</template>

<script lang="ts">
import {reactive, toRefs, defineComponent} from 'vue';

export default defineComponent({
  setup() {
    const data = reactive({});
    const refData = toRefs(data);
    return {
      ...refData,
    };
  },
});
</script>

<style lang="sass" scoped></style>
