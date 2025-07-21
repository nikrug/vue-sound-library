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

<style>
.input-checkbox__block {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
}

.input-checkbox {
  display: none; /* Скрываем стандартный чекбокс */
}

.custom-checkbox {
  display: inline-block;
  width: 20px;
  height: 20px;
  border:  1px solid #D8D8D8;
  border-radius: 4px;
  background-repeat: no-repeat; /* Не повторяем изображение */
  background-position: center; /* Центрируем изображение */
}

/* Изменяем стиль при отмеченном чекбоксе */
.input-checkbox:checked + .custom-checkbox {
  background-image: url("/images/headers/checkbox.svg"); /* Изображение для отмеченного состояния */
}

.input-checkbox__label {
  color: black;
}
</style>
