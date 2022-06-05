<template>
  <div class="container">user page</div>
  <p>group:{{ $route.params.group }}</p>
  <p>id:{{ $route.params.id }}</p>
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
