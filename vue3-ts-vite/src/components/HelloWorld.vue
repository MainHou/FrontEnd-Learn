<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script lang="ts" setup>
import {defineProps} from 'vue';
const props = defineProps({
  msg: {
    type: String,
  },
});
</script>
