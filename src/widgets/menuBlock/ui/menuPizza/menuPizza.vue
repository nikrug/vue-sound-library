<template>
  <div>
    <Card :customclass="'invisible'" :cartItems="cartItems" :onRemoveItem="removeFromCart"  />

    <div class="menu-label" id="Pizza">Пицца</div>

    <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>

    <div class="menu-container">
      <MenuItem
        v-for="pizzaItem in pizza"
        :key="pizzaItem.id"
        :menuName="pizzaItem.name"
        :menuDescription="pizzaItem.description"
        :menuWeight="pizzaItem.weight"
        :imageSrc="pizzaItem.imageSrc"
        :SpicyimageSrc="pizzaItem.spicyImageSrc"
        :overImage="pizzaItem.overImage"
      >
        <template v-slot:weight-counter>
          <div class="menu-options">
            <massWeight @update-price="updatePrice" :title="pizzaItem.weightName">
              <template v-slot:counter1>
                <counter :onAddToCart="() => addToCart(pizzaItem)" :onDeleteToCart="() => removeFromCartt(pizzaItem)" :price="menuPrices[pizzaItem.weightName]" />
              </template>
              <template v-slot:counter2>
                <counter :onAddToCart="() => addToCart(pizzaItem)" :onDeleteToCart="() => removeFromCartt(pizzaItem)" :price="menuPrices[pizzaItem.weightName]" />
              </template>
              
            </massWeight>
            
          </div>
        </template>
        <template v-slot:additional-info>
          <massWeight
            CustomInfoClass="option-info-flex"
            CustomClass="option-none"
            ButtonBlockClass="option-none"
            :title="pizzaItem.name"
          />
        </template>
        <cardButton :cartItems="cartItems" :onRemoveItem="removeFromCart"/>
      </MenuItem>
    </div>
    
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import { getPizzas } from '../../api/apiService';
import MenuItem from '@entities/menuItem/ui/menuItem.vue';
import counter from '@widgets/Counter/ui/counter.vue';
import massWeight from '@widgets/massWeighr/ui/massWeight.vue';
import Card from '@widgets/Card/card.vue';

interface Pizza {
  id: number;
  name: string;
  description: string;
  weight: string;
  weightName: string;
  imageSrc: string;
  spicyImageSrc: string;
  overImage: string;
  customclass:string;
}

const pizza = ref<Pizza[]>([]);
const menuPrices = ref<Record<string, number>>({});
const errorMessage = ref<string | null>(null);
const cartItems = ref<{ id: number, name: string, price: number, quantity: number,imagesrc:string, }[]>([]);

// Функция для обновления цены
const updatePrice = (payload: { title: string; price: number }) => {
  menuPrices.value[payload.title] = payload.price;
};

const addToCart = (pizzaItem: Pizza) => {
  const existingItem = cartItems.value.find(item => item.id === pizzaItem.id);
  
  // Получаем текущую цену для выбранного веса
  const currentPrice = menuPrices.value[pizzaItem.weightName];

  if (existingItem) {
    existingItem.price = currentPrice; // Обновляем цену при необходимости
    existingItem.quantity++;
  } else {
    cartItems.value.push({
      id: pizzaItem.id,
      name: pizzaItem.name,
      imagesrc: pizzaItem.imageSrc,
      price: currentPrice, // Берем цену из menuPrices
      quantity: 1,
    });
  }
};
// Функция удаления пиццы из корзины
const removeFromCartt = (pizzaItem: Pizza) => {
  const existingItem = cartItems.value.find(item => item.id === pizzaItem.id);
  
  if (existingItem) {
    existingItem.quantity--;
    // Удаляем элемент из корзины, если количество стало меньше 1
    if (existingItem.quantity < 1) {
      cartItems.value = cartItems.value.filter(item => item.id !== pizzaItem.id);
    }
  }
};
// Функция удаления элемента из корзины
const removeFromCart = (id: number) => {
  const index = cartItems.value.findIndex(item => item.id === id);
  if (index !== -1) {
    cartItems.value.splice(index, 1); // Удаляем элемент из массива
  }
};

// Получаем данные пиццы при монтировании
onMounted(async () => {
  try {
    const data = await getPizzas();
    pizza.value = data;
    errorMessage.value = null;
  } catch (error) {
    console.error('Error fetching pizzas:', error);
    errorMessage.value = 'Не удалось загрузить данные. Пожалуйста, попробуйте позже.';
  }
});
</script>

<style lang="scss" scoped>
@import '../style.scss';
.invisible{
  display: none;
}

</style>
