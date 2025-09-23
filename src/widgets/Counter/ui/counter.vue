<template>
  <div class="counter">
    <div class="count-text" v-if="count < 1">
      {{ price }} ₽
    </div>

    <div class="count-text" v-if="count > 0" :class="{ 'active-text': count > 0 }">
      {{ total }} ₽
    </div>

    <button class="basket-button" v-if="count < 1" @click="handleAddToCart">в корзину</button>

    <div class="buttons" v-if="count > 0" :class="{ 'buttons-active': count > 0 }">
      <button class="count-button" v-if="count > 0" @click="handleDeleteToCart">-</button>

      <div class="count-text" v-if="count > 0">{{ count }}</div>

      <button class="count-button" v-if="count > 0" @click="handleAddToCart">+</button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, defineProps } from 'vue';

const props = defineProps({
  price: {
    type: Number,
    default: 0,
  },
  onAddToCart: {
    type: Function,
    default: () => {},
  },
  onDeleteToCart: {
    type: Function,
    default: () => {},
  },
});

const count = ref(0);
const total = computed(() => count.value * props.price);

const increment = () => {
  count.value++;
};

const decrement = () => {
  if (count.value > 0) {
    count.value--;
  }
};

// Обработчик для добавления в корзину
const handleAddToCart = () => {
  increment(); // Увеличиваем счетчик
  props.onAddToCart(); // Вызываем переданную функцию
};

// Обработчик для добавления в корзину
const handleDeleteToCart = () => {
  decrement(); // Увеличиваем счетчик
  props.onDeleteToCart(); // Вызываем переданную функцию
};
</script>

<style lang="scss">
@import "./style";
</style>
