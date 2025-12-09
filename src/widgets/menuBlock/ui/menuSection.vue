<template>
  <div>
    <CartList 
  :customclass="'invisible'" 
  :cartItems="cartItems" 
  :onRemoveItem="removeFromCart" 
/>
    <div class="menu-label" :id="menuLabelId">{{ props.menuLabel }}</div>

    <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>

    <div class="menu-container">
      <MenuItem
        v-for="item in menuItems"
        :key="item.id"
        :menuName="item.name"
        :menuDescription="item.description"
        :menuWeight="item.weight"
        :imageSrc="item.imageSrc"
        :SpicyimageSrc="item.spicyImageSrc"
        :overImage="item.overImage"
      >
        <template v-slot:weight-counter>
          <div class="menu-options">
            <massWeight :CustomClass="item.CustomClass"  @update-price="updatePrice" :title="item.weightName">
              <template v-slot:counter1>
                <counter
                  :id="`${item.id}-counter1`"
                  :onAddToCart="() => addToCart(item)"
                  :onDeleteToCart="() => removeFromCartt(item)"
                  :price="menuPrices[item.weightName]"
                />
              </template>
              <template v-slot:counter2>
                <counter
                  :id="`${item.id}-counter2`"
                  :onAddToCart="() => addToCart(item)"
                  :onDeleteToCart="() => removeFromCartt(item)"
                  :price="menuPrices[item.weightName]"
                />
              </template>
            </massWeight>
          </div>
        </template>

        <template v-slot:additional-info>
          <massWeight
            menuClass="menu-popup-info"
            CustomInfoClass="option-info-flex"
            CustomClass="option-none"
            ButtonBlockClass="option-none"
            :title="item.name"
          />
        </template>
      </MenuItem>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

import MenuItem from '@entities/menuItem/ui/menuItem.vue';
import CartList from '@widgets/cartList/ui/cartList.vue';
import counter from '@widgets/counter/ui/Counter.vue';
import massWeight from '@widgets/massWeighr/ui/massWeight.vue';

// Определите общие поля для пиццы и мексиканских блюд
interface MenuItem {
  id: number;
  name: string;
  description: string;
  weight: string;
  weightName: string;
  imageSrc: string;
  spicyImageSrc: string;
  overImage: string;
  CustomClass:string;
}

// props с трансформацией для строгой типизации
const props = defineProps<{
  menuItems: MenuItem[],
  menuLabel: string,
  menuLabelId: string,
}>();

// State
const menuPrices = ref<Record<string, number>>({});
const errorMessage = ref<string | null>(null);
const cartItems = ref<{ id: number, name: string, price: number, quantity: number, imagesrc: string, }[]>([]);

// Functions
const updatePrice = (payload: { title: string; price: number }) => {
  menuPrices.value[payload.title] = payload.price;
};

const addToCart = (item: MenuItem) => {
  // Сформируйте уникальный ключ для каждого варианта элемента
  const existingItem = cartItems.value.find(cartItem => cartItem.id === item.id && cartItem.price === menuPrices.value[item.weightName]);

  const currentPrice = menuPrices.value[item.weightName];

  if (existingItem) {
    existingItem.quantity++;
  } else {
    cartItems.value.push({
      id: item.id,
      name: item.name,
      imagesrc: item.imageSrc,
      price: currentPrice,
      quantity: 1,
    });
  }
};

const removeFromCartt = (item: MenuItem) => {
  const existingItem = cartItems.value.find(cartItem => cartItem.id === item.id);
  
  if (existingItem) {
    existingItem.quantity--;
    if (existingItem.quantity < 1) {
      cartItems.value = cartItems.value.filter(cartItem => cartItem.id !== item.id);
    }
  }
};

const removeFromCart = (id: number) => {
  const index = cartItems.value.findIndex(cartItem => cartItem.id === id);
  if (index !== -1) {
    cartItems.value.splice(index, 1);
  }
};

</script>

<style lang="scss" scoped>
@import './style.scss';

</style>
