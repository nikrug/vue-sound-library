<script setup>
import { ref } from 'vue';

const props = defineProps({
  inputTextLabel: {
    type: String,
    default: "Пароль",
  },
  inputPlaceholder: {
    type: String,
    default: "Введите пароль",
  },
  PasswordButton: {
    type: String,
    default: "hide-button",
  },
  inputType: {
    type: String,
    default: "text", // значение по умолчанию
  },
});

const password = ref('');         // Хранит значение пароля
const showPassword = ref(false);   // Хранит состояние видимости

// Метод для переключения состояния видимости
const togglePassword = () => {
  showPassword.value = !showPassword.value;
};

</script>

<template>
  <div class="input">
    <div class="input-label">{{ inputTextLabel }}</div>
    <div class="input__container">
      <input
        :type="showPassword ? '' : inputType" 
        class="input-text"
        :placeholder="inputPlaceholder"
        v-model="password" 
        requared="true"
      />
      
        <div :class="PasswordButton" @click="togglePassword">
                <img class="input__show-img"
                :src="showPassword ? '/images/headers/eye.svg' : '/images/headers/eye-close.svg'"
                :key="showPassword"
                />
        </div>
    </div>
  </div>
</template>
<style lang="scss">
@import "./style";
</style>