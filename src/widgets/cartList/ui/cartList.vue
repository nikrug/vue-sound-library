<template>
  <div :class="[customclass, 'cart-list']">
    <ul>
      <li class="cart-list__item" v-for="item in cart" :key="item.id">
        <div class="cart-list__name">
          <img :src="item.imagesrc" alt="Изображение товара" />
          {{ item.name }} 
        </div>
        <div class="cart-list__counter">
          <button class="count-button" @click="updateItemQuantity(item, -1)">-</button>
          <div class="count-quantity">{{ item.quantity }}</div>
          <button class="count-button" @click="updateItemQuantity(item, 1)">+</button>
          <span class="count-price">{{ item.price * item.quantity }}₽</span>
        </div>
      </li>
    </ul>
    <div class="cart-list__bottom">
      <inputCheckbox inputCheckboxLabel="Не перезванивать для подтверждения заказа" inputCheckboxSubLabel="(кроме заказов, оформленных впсервые)"></inputCheckbox>
      <div class="cart-list__bottom-total">
        <div>Сумма заказа:</div>
        <div class="total-text">{{ total }}₽</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps, defineExpose, ref, watch } from 'vue';

import { inputCheckbox } from '@shared/ui';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  imagesrc: string;
}

const props = defineProps<{
  cartItems: CartItem[];
  onRemoveItem: (id: number) => void;
  customclass?: string;
}>();

const cart = ref<CartItem[]>([...props.cartItems]);

const total = computed(() => {
  return cart.value.reduce((sum, item) => sum + item.price * item.quantity, 0);
});

defineExpose({ total });

const updateItemQuantity = (item: CartItem, delta: number) => {
  const cartItem = cart.value.find(cartItem => cartItem.id === item.id);
  if (cartItem) {
    cartItem.quantity += delta;

    if (cartItem.quantity <= 0) {
      props.onRemoveItem(cartItem.id);
      cart.value = cart.value.filter(cartItem => cartItem.id !== item.id); // Используем item.id
    }
  }
};

const restoreCartFromStorage = () => {
  const savedCart = localStorage.getItem('cartItems');
  if (savedCart) {
    const parsedCart: CartItem[] = JSON.parse(savedCart);
    parsedCart.forEach(item => {
      const existingItem = cart.value.find(cartItem => cartItem.id === item.id);
      if (existingItem) {
        existingItem.quantity = item.quantity;
      } else {
        cart.value.push(item);
      }
    });
  }
};

const saveCartToStorage = (newCartItems: CartItem[]) => {
  localStorage.setItem('cartItems', JSON.stringify(newCartItems));
};

restoreCartFromStorage();

watch(cart, saveCartToStorage, { deep: true });
</script>

<style lang="scss">
@import "./style.scss";
</style>
