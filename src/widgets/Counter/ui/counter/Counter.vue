<template>
  <div class="counter">
    <div class="count-text" v-if="count < 1">
      {{ price }} ₽
    </div>

    <div class="count-text" v-if="count > 0" :class="{ 'active-text': count > 0 }">
      {{ total }} ₽
    </div>

    <button class="basket-button" v-if="count < 1" @click="handleAddToCart">В корзину</button>

    <div class="buttons" v-if="count > 0" :class="{ 'buttons-active': count > 0 }">
      <button class="count-button" @click="handleDeleteToCart">-</button>
      <div class="count-text">{{ count }}</div>
      <button class="count-button" @click="handleAddToCart">+</button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, defineProps, onMounted } from 'vue';

const props = defineProps({
  price: {
    type: Number,
    default: 0,
  },
  id: { // Добавляем ID для уникальности
    type: String,
    required: true,
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

const loadCount = () => {
  const storedCount = localStorage.getItem(`counter-${props.id}`);
  if (storedCount) {
    count.value = parseInt(storedCount, 10);
  }
};

const saveCount = () => {
  localStorage.setItem(`counter-${props.id}`, count.value);
};
const increment = () => {
  count.value++;
  saveCount(); // Сохраняем после изменения
};

const decrement = () => {
  if (count.value > 0) {
    count.value--;
    saveCount(); // Сохраняем после изменения
  }
};

// Загружаем значение счетчика при монтировании
onMounted(loadCount);

// Обработчик для добавления в корзину
const handleAddToCart = () => {
  increment(); // Увеличиваем счетчик
  props.onAddToCart(); // Вызываем переданную функцию
};

// Обработчик для удаления из корзины
const handleDeleteToCart = () => {
  decrement(); // Уменьшаем счетчик
  props.onDeleteToCart(); // Вызываем переданную функцию
};
</script>

<style lang="scss">
@import "./style";
</style>
