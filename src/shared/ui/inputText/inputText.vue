<script setup>
import { ref, defineEmits, defineProps, watch } from 'vue';

const props = defineProps({
  modelValue: {
    type: String,
    default: '',
  },
  inputTextLabel: {
    type: String,
    default: "Пароль",
  },
  inputLabel: {
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
    default: "text",
  },
  inputSubtext: {
    type: String,
    default: "",
  },
  maxLength: {
    type: Number,
    default: 20,
  },
});

const emit = defineEmits(['update:modelValue']);
const password = ref(props.modelValue);
const showPassword = ref(false);

// Метод для переключения состояния видимости
const togglePassword = () => {
  showPassword.value = !showPassword.value;
};

// Эмит при изменении
watch(password, (newValue) => {
  emit('update:modelValue', newValue);
});
</script>

<template>
  <div class="input">
    <div :class="inputLabel">{{ inputTextLabel }}</div>
    <div class="input__container">
      <input
        :type="showPassword ? 'text' : inputType"
        class="input-text"
        :placeholder="inputPlaceholder"
        v-model="password"
        :maxlength="inputType === 'password' ? maxLength : undefined"
        required
      />
      <div :class="PasswordButton" @click="togglePassword">
        <img class="input__show-img"
          :src="showPassword ? '/images/headers/eye.svg' : '/images/headers/eye-close.svg'"
        />
      </div>
    </div>
    <div class="input-subtext">{{ inputSubtext }}</div>
  </div>
</template>

<style lang="scss">
@import "./style";
@media screen and (-webkit-min-device-pixel-ratio:0) {
input[type="password"]:not(:placeholder-shown)  {
  font-size: 23px;
    font-family: Verdana;
    letter-spacing: 1.45px;
    max-height: 50px;
    color: #009b3d;
  padding-right: 55px;
}
}
</style>
