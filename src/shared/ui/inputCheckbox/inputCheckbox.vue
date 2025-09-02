<script setup>
import { ref } from 'vue';
const props = defineProps({
  inputCheckboxLabel: {
    type: String,
    default: "Заголовок",
  },
});
const isChecked = ref(false);

function toggleCheckbox() {
  isChecked.value = !isChecked.value;
}
</script>

<template>
  <div class="input-checkbox__block" @click="toggleCheckbox">
    <input class="input-checkbox" type="checkbox" v-model="isChecked" ref="checkbox">
    <div class="custom-checkbox" ></div>
    <div class="input-checkbox__label">{{ inputCheckboxLabel }}</div>
  </div>
</template>

<style lang="scss">
@import "./style";
</style>
