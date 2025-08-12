<template>
  <div>
    <burger :isOpen="isOpen" @toggle="toggleDropdown" @click="menuItems = !menuItems"/>
    <div class="overlay" v-if="isOpen"></div>
    <div class="dropdown" :class="{ show: isOpen }" >
      <ul class="dropdown-list" >
        <q-btn class="dropdown-link"
          v-for="link in navMenu"
          stretch 
          flat
          :label="link.label"
          :key="link.link"
          :to="link.link"
        />
        <Popup></Popup>
      </ul>
      <div class="dropdown-footer">
        <div class="dropdown__footer-label">+7 3822 99 02 55</div>
        <div class="dropdown__footer-text">
          Бесплатная доставка<br>
          по Томску от 400 ₽
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';
import Popup from 'src/widgets/mainHeader/popUp/ui/popup.vue';
import burger from 'src/widgets/mainHeader/burger/ui/burger.vue';
import { navMenu } from 'src/widgets/mainHeader/config/navMenu';

const isOpen = ref(false);
const isVisible = ref(false);
const menuItems = ref(true);

const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
  isVisible.value = !isVisible.value;

  // Блокируем или разблокируем прокрутку страницы
  if (isOpen.value) {
    document.body.classList.add('no-scroll');
  } else {
    document.body.classList.remove('no-scroll');
  }
};

// Добавляем обработчики на событие монтирования и размонтирования компонента
onMounted(() => {
  if (isOpen.value) {
    document.body.classList.add('no-scroll');
  }
});

onBeforeUnmount(() => {
  document.body.classList.remove('no-scroll');
});
</script>

<style lang="scss" scoped>
@import './style.scss';


body.no-scroll {
    overflow: hidden; /* Блокирует прокрутку */
}

.dropdown-footer {
  display: flex;
  flex-direction: row;
  padding: 1rem 1rem 5rem 1rem;
  justify-content: space-between;
}

.dropdown__footer-label {
  color: orange;
  font-size: 18px;
}
.q-btn{
  text-align: left;
  align-items: left;
}
.text-center {
    text-align: left !important;
}
span{
  text-align: left;
}
.dropdown-link{
  color: black;
  font-size: large;
  text-align: left;
}
.dropdown__footer-text {
  color: black;
}

@media (min-width:768px) {

.overlay {
    display: flex;
    position: fixed; /* Заставляем подложку занимать весь экран */
    top: 150px;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5); /* Полупрозрачный черный фон */
    z-index: 999; /* Убедитесь, что подложка выше остальных элементов */
}
}

@media (min-width:1244px) {
.overlay {
    display: none;
    position: fixed; /* Заставляем подложку занимать весь экран */
    top: 150px;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5); /* Полупрозрачный черный фон */
    z-index: 999; /* Убедитесь, что подложка выше остальных элементов */
}
}
</style>
