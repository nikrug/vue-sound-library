<script setup>
import { ref } from 'vue';

const props = defineProps({
  inputTextLabel: {
    type: String,
    default: "Пароль",
  },
  inputLabel:{
    type: String,
    default: "input-label",
  },
  inputPlaceholder: {
    type: String,
    default: "Введите пароль",
  },
});


</script>

<template>

        <textarea rows="4" cols="50" class="textarea__container"></textarea>

</template>
<style lang="scss">
@import "./style";
</style>