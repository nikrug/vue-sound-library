<template>
  <div :class="[customclass, 'card-box']">
    <ul>
      <li class="card-item" v-for="item in cartItems" :key="item.id">
        <div class="card-name">
          <img :src="item.imagesrc" alt="Изображение товара" />
          {{ item.name }} 
        </div>
        <div class="card-counter">
          <button class="count-button" @click="updateItemQuantity(item, -1)">-</button>
            <div class="count-quantity">{{ item.quantity }}</div>
          <button class="count-button" @click="updateItemQuantity(item, 1)">+</button>
          <span class="count-price">{{ item.price * item.quantity }}₽</span>
        </div>
      </li>
    </ul>
    <div class="card-bottom">
      <inputCheckbox inputCheckboxLabel="Не перезванивать для подтверждения заказа" inputCheckboxSubLabel="(кроме заказов, оформленных впсервые)"></inputCheckbox>
      <div class="card-bottom__total">
        <div>Сумма заказа:</div>
        <div class="total-text">{{ total }}₽</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { inputCheckbox } from '@shared/ui';
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
  customclass?: string; // Добавляем customclass как опциональный пропс
}>();

const total = computed(() => {
  return props.cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
});

// Экспортируем computed свойство total
defineExpose({ total });

// Функция для обновления количества товара
const updateItemQuantity = (item: CartItem, delta: number) => {
  item.quantity += delta; // Увеличиваем или уменьшаем количество на delta
  if (item.quantity <= 0) {
    props.onRemoveItem(item.id);
  }
  return total;
};

// Восстанавливаем корзину из localStorage
const restoreCartFromStorage = () => {
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
    return total;
};

// Сохраняем состояние корзины в localStorage при изменениях
const saveCartToStorage = (newCartItems: CartItem[]) => {
  localStorage.setItem('cartItems', JSON.stringify(newCartItems));
};

// Восстанавливаем корзину при инициализации компонента
restoreCartFromStorage();

// Следим за изменением корзины и сохраняем в localStorage
watch(() => props.cartItems, saveCartToStorage, { deep: true });
</script>

<style lang="scss">
@import "./style.scss" ;
.invisible{
  display: none;
}

.cart {
  padding: 1rem;
}

h2 {
  margin-bottom: 1rem;
}

ul {
  list-style-type: none;
  padding: 0;
  font-size:20px;
  font-weight: 500;
}

li {
  margin-bottom: 0.5rem;
}



</style>
