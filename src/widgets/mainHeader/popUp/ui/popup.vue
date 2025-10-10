<template>
  <div :class="customClass" @click="Popup = !Popup">
    <img class="popup__logo-button" src="/images/headers/icon LK.svg">
  </div>

    <div v-show="Popup" class="popup-overlay" @mousedown="Popup = !Popup">
      <form > 
        <div class="popup-content" @mousedown.stop>
          <div class="popup__close">
            <img src="/images/headers/logo-popup.svg">
            <span class="close-button" @click="Popup = !Popup"><img src="/images/headers/icon-Close.svg"></span>
          </div>
          <div class="popup__choose-block">
          <span class="popup__text" :class="{'active': login}" @click="regist = false, login = true">
            Вход
          </span>
          <span class="popup__text" :class="{'active': regist}"  @click="regist = true, login = false">
            Регистрация
          </span>
          </div>

          <div class="popup__section" v-show="login">
            <inputText inputPlaceholder="Введите адрес электронной почты" inputTextLabel="Электронная почта"></inputText>
            <inputText inputType="password" PasswordButton="show-button"></inputText>
            <inputCheckbox inputCheckboxLabel="Запомнить меня на сайте"></inputCheckbox>
            <div class="popup__forget-button-block">
              <div class="popup__text-forget-label"  @click="Popup = !Popup, forgetPassword=!forgetPassword">Забыли пароль?</div>
              <customButton @click="handleLogin" ButtonText="Войти"></customButton>
            </div>
          </div>

          <div class="popup__section" v-show="regist">
            <inputText inputPlaceholder="Введите адрес электронной почты" inputTextLabel="Электронная почта"></inputText>
            <inputText inputType="password" PasswordButton="show-button"></inputText>
            <inputText inputType="password" PasswordButton="show-button" inputPlaceholder="Повторно введите пароль" inputTextLabel="Повторите пароль"></inputText>
            <inputCheckbox inputCheckboxLabel="Я согласен на обработку персональных данных"></inputCheckbox>
            <customButton ButtonText="Зарегистрироваться"></customButton>
          </div>
          
        </div>
      </form>
    </div>

              <div v-show="forgetPassword" class="popup-overlay">
                <div class="popup-content">
                            <div class="popup__close">
                              <img src="/images/headers/logo-popup.svg">
                              <span class="close-button" @click="forgetPassword = !forgetPassword"><img src="/images/headers/icon-Close.svg"></span>
                            </div>
                            <div class="popup__text-forget" >Для восстановления пароля введите адрес электронной почты</div>
                            <inputText inputPlaceholder="Введите адрес электронной почты" inputTextLabel="Электронная почта"></inputText>
                            <div class="popup__forget-button-block">
                              
                              <div class="popup__text-forget-label"  @click="Popup = !Popup, forgetPassword=!forgetPassword">Войти</div>
                              <customButton ButtonText="Восстановить пароль"></customButton>
                            </div>
                </div>
            </div>
</template>

<script setup lang="ts">
import { customButton } from '@shared/ui';
import { inputText } from '@shared/ui';
import { inputCheckbox } from '@shared/ui';
import { ref } from 'vue';
import { useRouter } from 'vue-router'; // Импортируйте useRouter

const router = useRouter(); // Получите доступ к роутеру

const Popup = ref(false);
const forgetPassword = ref(false);
const login = ref(true);
const regist = ref(false);

const handleLogin = () => {
  // Здесь вы можете добавить логику проверки данных пользователя.
  // Если данные корректны, перенаправьте на страницу office
  router.push('/office'); // Перенаправление на страницу office
};

const props = defineProps({
  customClass: {
    type: String,
    default: ''
  },
});
</script>

<style lang="scss" scoped>
@import './style.scss';
</style>