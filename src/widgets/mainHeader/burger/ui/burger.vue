<template>
    <div class="burger" @click="$emit('toggle')">
      <div class="line" :class="{ 'active': isOpen }"></div>
      <div class="line" :class="{ 'active': isOpen }"></div>
      <div class="line" :class="{ 'active': isOpen }"></div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      isOpen: {
        type: Boolean,
        default: false, // Значение по умолчанию для открытого/закрытого состояния
      },
    },
  };
  </script>
  
  <style scoped>
  .burger {
    cursor: pointer;
    display: inline-block;
    margin: 16px 0;
    justify-content: center;
  }
  
  .line {
    width: 30px;
    height:2.4px;
    border-radius: 13px;
    background-color:  #eee;
    margin: 6px 0;
    transition: 0.3s;
  }

  .middle-line.active {
    visibility: hidden;
  }
  
  .line.active:nth-child(1) {
    transform: rotate(45deg) translate(6px, 6px);
  }
  
  .line.active:nth-child(2) {
    opacity: 0;
  }
  
  .line.active:nth-child(3) {
    transform: rotate(-45deg) translate(6px, -6px);
  }

  
  .burger {
    display: block; /* Скрываем бургер при ширине экрана более 1288px */
  }

  @media (min-width: 768px) {
    .burger {
    display: block; /* Скрываем бургер при ширине экрана более 1288px */
  }
}

  @media (min-width: 1288px) {
    .burger {
    display: none; /* Скрываем бургер при ширине экрана более 1288px */
  }
}
  </style>