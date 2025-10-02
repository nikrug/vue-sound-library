<template>
  <div class="skeleton-loader">
    <div :class="CustomClass"></div>
  </div>
</template>

<style lang="scss">
@import './style.scss';
</style>

<script setup lang="ts">
import { onMounted, onBeforeUnmount,ref } from 'vue';
const props = defineProps({
  CustomClass: {
    type: String,
    default: "skeleton-img",

  },
});
</script>
