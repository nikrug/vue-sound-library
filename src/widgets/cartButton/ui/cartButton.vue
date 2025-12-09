<template>
  <button class="scrollDownmenu__cart-button">
    <img src="/images/drop-down-menu/icon-basket.svg">
    <div class="cou" v-if="total > 0" :class="{ 't': total > 1 }">
      {{ total }}₽
    </div> 
    <div class="button-text" v-else :class="{ 't': total < 1 }">Корзина</div>
  </button>
</template>

<script setup lang="ts">
import { computed, defineProps, defineExpose, ref, watch } from 'vue';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  imagesrc: string;
}

const props = defineProps<{
  cartItems: CartItem[];
  onRemoveItem: (id: number) => void; // Функция для удаления элемента из корзины
}>();

// Создаем локальное состояние для корзины
const localCartItems = ref<CartItem[]>([...props.cartItems]);

const total = computed(() => {
  return localCartItems.value.reduce((sum, item) => sum + (item.price * item.quantity), 0);
});

// Экспортируем computed свойство total
defineExpose({ total });

// Восстанавливаем корзину из localStorage
const restoreCartFromStorage = () => {
  const savedCart = localStorage.getItem('cartItems');
  if (savedCart) {
    const parsedCart: CartItem[] = JSON.parse(savedCart);
    parsedCart.forEach(item => {
      const existingItem = localCartItems.value.find(cartItem => cartItem.id === item.id);
      if (existingItem) {
        existingItem.quantity = item.quantity; // Обновляем количество
      } else {
        localCartItems.value.push(item); // Добавляем новый элемент
      }
    });
  }
};

// Сохраняем состояние корзины в localStorage при изменениях
watch(localCartItems, (newCartItems) => {
  localStorage.setItem('cartItems', JSON.stringify(newCartItems));
}, { deep: true });

// Восстанавливаем корзину при инициализации компонента
restoreCartFromStorage();

// Если вам нужно синхронизировать локальные изменения с родительским компонентом
watch(localCartItems, () => {
  // Здесь вы можете вызывать метод для обновления состояния в родительском компоненте
}, { deep: true });
</script>

<style lang="scss">
@import "./style.scss";
</style>
