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
<style>
.input__container{
 position: relative;              /* Создаем относительное положение для контейнера */
  display: inline-block; 
}

.input-label{
    color:black;
    font-weight: normal;
}
.input{
    display: flex;
    flex-direction: column;
    text-align: left;
    gap: .6rem;
}
.input-text{

    padding: 13px 16px;
    border-radius: 10px;
    width: 100%;
    border: 1px solid #d8d8d8;
}
.input__show-img{
  width: auto;
  height: auto;
}
.input-text {
    outline: none; /* Убираем стандартный outline */
    transition: outline 0.3s ease; /* Плавный переход для outline */
}

.input-text:active {
    outline: 1px solid rgb(105, 105, 105);
}

.input-text:focus {
    outline: 1px solid green;
}

.input-text::placeholder {
    transition: color 0.3s ease; /* Плавный переход для цвета placeholder */
}

.input-text:focus::placeholder {
    color: white; /* Цвет placeholder при фокусе */
}
.hide-button{
  display:none;

}

.show-button {
    display: flex;
    position: absolute;              /* Абсолютное позиционирование для кнопки */
    right: 10px;                    /* Отступ от правого края */
    top: 50%;                       /* Центрирование по вертикали */
    transform: translateY(-50%);    /* Компенсация вертикального центрирования */
    background: none;               /* Убираем фон */
    border: none;                   /* Убираем рамки */
    cursor: pointer;                /* Указываем, что это кнопка */
    padding: 0;   
    width: 40px; /* Установите фиксированную ширину */
    height: 40px; /* Установите фиксированную высоту */
    display: flex;
    align-items: center;
    justify-content: center;

}
</style>