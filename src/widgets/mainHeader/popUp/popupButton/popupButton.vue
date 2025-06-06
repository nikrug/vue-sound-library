<!-- src/components/PopupButton.vue -->
<template>
    <button :class="buttonClass" @click="onClick">{{ buttonText }}</button>
  </template>
  
  <script lang="ts">
  import { defineComponent, PropType } from 'vue';
  
  export default defineComponent({
    props: {
      buttonClass: {
        type: String as PropType<string>,
        default: '',
      },
      buttonText: {
        type: String as PropType<string>,
        required: true,
      },
    },
    methods: {
      onClick() {
        this.$emit('click');
      },
    },
  });
  </script>
  
  <style scoped>

  </style>