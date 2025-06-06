<template>
  <button class="simple-btn" :class="customClass" @click="Popup = !Popup">Login</button>
      <Transition name="v-faid">
        <div v-show="Popup" class="popup-overlay" @mousedown="Popup=!Popup">
          <div class="popup-content" @mousedown.stop>
            <button class="close-button" @click="Popup = !Popup">&times;</button>
            <p class="popup__title-text">Login</p>
            <div class="popup__img-block">
              <a href="https://www.google.ru/?hl=ru">
                <img class="modal__login-icons" src="/images/headers/google.svg" alt="Login with Google">
              </a>
              <a href="https://www.facebook.com/?locale=ru_RU">
                <img class="modal__login-icons" src="/images/headers/facebook.svg" alt="Login with Facebook">
              </a>
              <a href="https://twitter.com/">
                <img class="modal__login-icons" src="/images/headers/twitter.svg" alt="Login with Twitter">
              </a>
            </div>
            <p class="popup__text">Or use your mail</p>

            <p class="popup-label">Email</p>

            <div class="modal__email-name-container email-container">
              <input type="text" placeholder="Email " required autocomplete="off">
            </div>

            <p class="popup-label">Password</p>
            <div class="modal__email-name-container name-container">
              <input  type="email" class="email-input" placeholder="Password" required autocomplete="none">
            </div>

    
            <div class="modal__attach-block">
              <input class="modal__input" type="checkbox" name="favorite">
              <p type="file" class="modal__email-password-text remember-margin modal__email-message-text">Remember Me</p>
            </div>
            
            <button type="submit" class="popup__button" >Login</button>
            <p class="popup__sign-text">or Sign up</p>
            <p class="popup__text">Forgot password?</p>
          </div>
        </div>
      </Transition>
</template>
  
  <script setup lang="ts">
  import {  ref } from 'vue';
    const Popup =ref(false);

  const props = defineProps({
  customClass: {
    type: String,
    default: ''
  },

});
  </script>
  
  <style lang="scss" scoped>
  @import './style.scss';
  .popup-label{
    text-align: start;
    @include font-styles('Poppins',500, 1rem, 1.5rem, var(--description-dark));
  }
  .popup-overlay {
    position: fixed;
    z-index: 2001;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  
  .popup-content {
    background: var(--pure-white);
    padding: 90px 20px;
    border-radius: 0px;
    overflow-y: auto;
    width: 100%;
    position: fixed;
    height: 100%;

  }
  
  .close-button {
    background: transparent;
    color: var(--description-dark);
    border: none;
    font-size: 25px;
    cursor: pointer;
    position: absolute;
    top: 10px;
    right: 15px;
  }

@media (min-width:#{$br-tablet}px) {
  .popup-overlay {
    position: fixed;
    z-index: 2001;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  
  .popup-content {
    background: var(--pure-white);
    padding: 2rem 2.5rem;
    border-radius: 24px;
    width: 480px;
    height: fit-content;
  }
    .close-button {
    background: transparent;
    color: var(--description-dark);
    border: none;
    font-size: 25px;
    cursor: pointer;
    position: relative;
    top: -15px;
    left: 191px;
  }

  }
  </style>
  