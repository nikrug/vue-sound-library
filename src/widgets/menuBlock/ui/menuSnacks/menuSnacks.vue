<template>
      <CartList :customclass="'invisible'" :cartItems="cartItems" :onRemoveItem="removeFromCart"  />
      <div class="menu-label" id="Snacks">Закуски</div>
      <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
      <div class="menu-container">
      <MenuItem
        v-for="Snacks in Snacks"
        :key="Snacks.id"
        :menuName="Snacks.name"
        :menuDescription="Snacks.description"
        :menuWeight="Snacks.weight"
        :imageSrc="Snacks.imageSrc"
        :overImage="Snacks.overImage">
        <template v-slot:weight-counter>
          <div class="menu-options">
            <massWeight :CustomClass="Snacks.CustomClass" @update-price="updatePrice" :title="Snacks.weightName">
              <template v-slot:counter1>
                <counter :id="`${Snacks.id}-counter5`" :onAddToCart="() => addToCart(Snacks)" :onDeleteToCart="() => removeFromCartt(Snacks)" :price="menuPrices[Snacks.weightName]" />
              </template>
              <template v-slot:counter2>
                <counter :id="`${Snacks.id}-counter6`" :onAddToCart="() => addToCart(Snacks)" :onDeleteToCart="() => removeFromCartt(Snacks)" :price="menuPrices[Snacks.weightName]" />
              </template>
              
            </massWeight>
            
          </div>
        </template>
        <template v-slot:additional-info>
          <massWeight CustomInfoClass="option-info-flex" CustomClass="option-none" ButtonBlockClass="option-none" :title="Snacks.weightName"/>
        </template>
      </MenuItem>
      </div>
      <cardButton :cartItems="cartItems" :onRemoveItem="removeFromCart"/>
</template>

<style lang="scss" scoped>
@import '../style.scss';

</style>

<script setup lang="ts">
  import counter from "@widgets/Counter/ui/counter.vue"; 
  import { getSnacks } from '../../api/apiService';
  import MenuItem from "@entities/menuItem/ui/menuItem.vue";
  import massWeight from '@widgets/massWeighr/ui/massWeight.vue';
  import { ref,onMounted } from 'vue';
  import CartList from "@widgets/cartList/ui/cartList.vue";
  interface Snacks {
    id: number;
    name: string;
    description: string;
    weight: string;
    weightName:string;
    imageSrc: string;
    CustomClass:string;
    spicyImageSrc: string;
    overImage:string;
  }
const Snacks = ref<Snacks[]>([]);
const menuPrices = ref<Record<string, number>>({});
const errorMessage = ref<string | null>(null);
const cartItems = ref<{ id: number, name: string, price: number, quantity: number,imagesrc:string, }[]>([]);

// Функция для обновления цены
const updatePrice = (payload: { title: string; price: number }) => {
  menuPrices.value[payload.title] = payload.price;
};

const addToCart = (SnacksItem: Snacks) => {
  const existingItem = cartItems.value.find(item => item.id === SnacksItem.id);
  
  // Получаем текущую цену для выбранного веса
  const currentPrice = menuPrices.value[SnacksItem.weightName];

  if (existingItem) {
    existingItem.price = currentPrice; // Обновляем цену при необходимости
    existingItem.quantity++;
  } else {
    cartItems.value.push({
      id: SnacksItem.id,
      name: SnacksItem.name,
      imagesrc: SnacksItem.imageSrc,
      price: currentPrice, // Берем цену из menuPrices
      quantity: 1,
    });
  }
};
// Функция удаления пиццы из корзины
const removeFromCartt = (SnacksItem: Snacks) => {
  const existingItem = cartItems.value.find(item => item.id === SnacksItem.id);
  
  if (existingItem) {
    existingItem.quantity--;
    // Удаляем элемент из корзины, если количество стало меньше 1
    if (existingItem.quantity < 1) {
      cartItems.value = cartItems.value.filter(item => item.id !== SnacksItem.id);
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
    const data = await getSnacks();
    Snacks.value = data;
    errorMessage.value = null;
  } catch (error) {
    console.error('Error fetching Snacks:', error);
    errorMessage.value = 'Не удалось загрузить данные по Snacks. Пожалуйста, попробуйте позже.';
    
    // Показываем всплывающее окно с сообщением об ошибке
    alert(errorMessage.value);
  }
});
</script>
