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
  PasswordButton: {
    type: String,
    default: "hide-button",
  },
  inputType: {
    type: String,
    default: "text", // значение по умолчанию
  },
  inputSubtext: {
    type: String,
    default: "", // значение по умолчанию
  },
  maxLength: {
    type: Number,
    default: 20, // Установите значение по умолчанию
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
    <div :class="inputLabel">{{ inputTextLabel }}</div>
    <div class="input__container">
      <input
        :type="showPassword ? '' : inputType" 
        class="input-text"
        :placeholder="inputPlaceholder"
        v-model="password"
        :maxlength="inputType === 'password' ? maxLength : undefined"
        requared="true"
      />
      
        <div :class="PasswordButton" @click="togglePassword">
                <img class="input__show-img"
                :src="showPassword ? '/images/headers/eye.svg' : '/images/headers/eye-close.svg'"
                :key="showPassword"
                />
        </div>
    </div>
    <div class="input-subtext">{{ inputSubtext }}</div>
  </div>
</template>
<style lang="scss">
@import "./style";

.input{
  width: 100%;
}
</style>