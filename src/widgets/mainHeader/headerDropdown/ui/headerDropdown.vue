<template>
  <div>
    <burger :isOpen="isOpen" @toggle="toggleDropdown" />
    <div class="dropdown" :class="{ show: isOpen }">
      <ul class="dropdown-list">
        <a href="/">Доставка </a>
        <a href="/">Акции</a>
        <a href="/">О компании</a>
        <a href="/">Контакты</a>
        <a href="/">Отследить заказ</a>
        <a href="/">Личный кабинет</a>
        <a href="/">Корзина</a>
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

<script lang="ts">
import { defineComponent, ref } from 'vue';
import Popup from 'src/widgets/mainHeader/popUp/ui/popup.vue';
import burger from 'src/widgets/mainHeader/burger/ui/burger.vue';

export default defineComponent({
  components: {
    Popup,
    burger,
  },
  setup() {
    const isOpen = ref(false);

    const toggleDropdown = () => {
      isOpen.value = !isOpen.value;
    };

    return {
      isOpen,
      toggleDropdown,
    };
  },
});
</script>

<style lang="scss" scoped>
@import './style.scss';


.dropdown-footer {
  display: flex;
  flex-direction: row;
  padding: 1rem;
  justify-content: space-between;
}

.dropdown__footer-label {
  color: orange;
  font-size: 18px;
}

.dropdown__footer-text {
  color: black;
}
</style>
