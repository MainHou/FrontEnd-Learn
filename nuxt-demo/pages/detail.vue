<template>
  <div class="container">Detail Page</div>
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
