<template>
    <button class="scrollDownmenu__cart-button">
       <div class="cou" v-if="total > 1" :class="{ 't': total > 1 }">
            {{ total }}₽
        </div> 
        <div class="cou" v-if="total < 1" :class="{ 't': total < 1 }">Корзина</div>
        <img src="/images/drop-down-menu/icon-basket.svg">
    </button>
</template>

<script setup lang="ts">
import { computed, defineProps, defineExpose, watch } from 'vue';

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

const total = computed(() => {
  return props.cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
});

// Экспортируем computed свойство total
defineExpose({ total });

// Восстанавливаем корзину из localStorage
const savedCart = localStorage.getItem('cartItems');
if (savedCart) {
  const parsedCart: CartItem[] = JSON.parse(savedCart);
  parsedCart.forEach(item => {
    const existingItem = props.cartItems.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
      existingItem.quantity = item.quantity; // Обновляем количество
    } else {
      props.cartItems.push(item); // Добавляем новый элемент
    }
  });
}

// Сохраняем состояние корзины в localStorage при изменениях
watch(() => props.cartItems, (newCartItems) => {
  localStorage.setItem('cartItems', JSON.stringify(newCartItems));
}, { deep: true });
</script>


<style lang="scss">
@import "./style.scss" ;
</style>
