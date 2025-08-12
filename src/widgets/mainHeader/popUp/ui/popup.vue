<template>
  <div :class="customClass" @click="Popup = !Popup">
    <img src="/images/headers/icon LK.svg">
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
              <customButton ButtonText="Войти"></customButton>
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
import {  ref } from 'vue';

const Popup = ref(false);
const forgetPassword=ref(false);
const login = ref(true);
const regist = ref(false);
  const props = defineProps({
  customClass: {
    type: String,
    default: ''
  },

});
  </script>
  
  <style lang="scss" scoped>
  @import './style.scss';
  .forget__password{
    position: fixed;
    z-index: 2001;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(#01350B, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .popup__section{
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    justify-content: space-between;
  }

  .popup-label{
    text-align: start;
    @include font-styles('Poppins',500, 1rem, 1.5rem, var(--description-dark));
  }
.popup__text {
  padding: 15px 40px;
  cursor: pointer;
  color: #000000; /* Измените на нужный цвет */
  border-radius: 10px;
  width: 100%;
}
.popup__forget-button-block{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 2rem 0 0 0;
}
.popup__text-forget{
  padding: 15px 0px;
  cursor: pointer;
  color: #000000; /* Измените на нужный цвет */
  border-radius: 10px;
  text-align: left;
}

.popup__text-forget-label{
  padding: 15px 0px;
  cursor: pointer;
  color: #FF991F; /* Измените на нужный цвет */
  border-radius: 10px;
  text-align: end;
}
.popup__button{
  padding: 14px 36px 14px 36px;
  background-color: #FF991F;
  color: white;
  border-radius: 10px;
  margin: 1rem 0;
}

.popup__close{
flex-direction: row;
  display: flex;
  justify-content: space-between;
  padding: 10px;
}
.popup__text.active {
  background-color: white; /* Измените на нужный цвет */
}

.popup__choose-block{
  background-color: #F0F0F0;
  border-radius: 10px;
  display: flex;
  padding: 5px;
  margin: 30px 0;
  justify-content: center;

}
  .popup-overlay {
    position: fixed;
    z-index: 2001;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(#01350B, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  
  .popup-content {
    background: var(--pure-white);
    background-image: url("/images/headers/pattern.svg");
    padding: 90px 20px;
    border-radius: 0px;
    overflow-y: auto;
    width: 100%;
    position: fixed;
    height: 100%;

  }
  
  .close-button {

    color: var(--description-dark);

  }

@media (min-width:#{$br-tablet}px) {
    .forget__password{
    position: fixed;
    z-index: 2001;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(#01350B, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  .popup-overlay {
    position: fixed;
    z-index: 2001;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(#01350B, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  
  .popup-content {
    background: var(--pure-white);
    background-image: url("/images/headers/pattern.svg");
    padding: 2rem 2.5rem;
    border-radius: 24px;
    width: 480px;
    height: fit-content;
  }
    .close-button {
    background: transparent;
    color: var(--description-dark);
    cursor: pointer;

  }

  }
  @media (min-width:#{$br-desktop}px) {
  .popup-overlay {
    background-color: rgba(#01350B, 0.8);
  }
  

  }
  </style>
  