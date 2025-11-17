<template>
      <CartList :customclass="'invisible'"  :cartItems="cartItems" :onRemoveItem="removeFromCart"  />
      <div class="menu-label" id="Salat">Салаты</div>
      <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
      <div class="menu-container">
        <MenuItem
        v-for="Salat in Salat"
        :key="Salat.id"
        :menuName="Salat.name"
        :menuDescription="Salat.description"
        :menuWeight="Salat.weight"
        :imageSrc="Salat.imageSrc"
        :overImage="Salat.overImage">
        <template v-slot:weight-counter>
          <div class="menu-options">
            <massWeight CustomClass="option-none" @update-price="updatePrice" :title="Salat.weightName">
              <template v-slot:counter1>
                <counter :id="`${Salat.id}-counter7`" :onAddToCart="() => addToCart(Salat)" :onDeleteToCart="() => removeFromCartt(Salat)" :price="menuPrices[Salat.weightName]" />
              </template>
              <template v-slot:counter2>
                <counter :id="`${Salat.id}-counter7`" :onAddToCart="() => addToCart(Salat)" :onDeleteToCart="() => removeFromCartt(Salat)" :price="menuPrices[Salat.weightName]" />
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
              :title="Salat.weightName"/>
          </template>
      </MenuItem>
       
      </div>
</template>

<style lang="scss" scoped>
@import '../style.scss';
</style>

<script setup lang="ts">
  import counter from "@widgets/counter/ui/counter/counter.vue"; 
  import MenuItem from "@entities/menuItem/ui/menuItem.vue";
  import { getSalat } from '../../api/apiService';
  import massWeight from '@widgets/massWeighr/ui/massWeight.vue';
  import { ref, onMounted } from 'vue';
  import CartList from "@widgets/cartList/ui/cartList.vue";
  import { useQuasar } from 'quasar';
interface Salat {
  id: number;
  name: string;
  description: string;
  weight: string;
  weightName:string;
  imageSrc: string;
  spicyImageSrc: string;
  overImage:string;
}


const Salat = ref<Salat[]>([]);
const menuPrices = ref<Record<string, number>>({});
const errorMessage = ref<string | null>(null);
const cartItems = ref<{ id: number, name: string, price: number, quantity: number,imagesrc:string, }[]>([]);

// Функция для обновления цены
const updatePrice = (payload: { title: string; price: number }) => {
  menuPrices.value[payload.title] = payload.price;
};

const addToCart = (SalatItem: Salat) => {
  const existingItem = cartItems.value.find(item => item.id === SalatItem.id);
  
  // Получаем текущую цену для выбранного веса
  const currentPrice = menuPrices.value[SalatItem.weightName];

  if (existingItem) {
    existingItem.price = currentPrice; // Обновляем цену при необходимости
    existingItem.quantity++;
  } else {
    cartItems.value.push({
      id: SalatItem.id,
      name: SalatItem.name,
      imagesrc: SalatItem.imageSrc,
      price: currentPrice, // Берем цену из menuPrices
      quantity: 1,
    });
  }
};
// Функция удаления пиццы из корзины
const removeFromCartt = (SalatItem: Salat) => {
  const existingItem = cartItems.value.find(item => item.id === SalatItem.id);
  
  if (existingItem) {
    existingItem.quantity--;
    // Удаляем элемент из корзины, если количество стало меньше 1
    if (existingItem.quantity < 1) {
      cartItems.value = cartItems.value.filter(item => item.id !== SalatItem.id);
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

const $q = useQuasar()

// Получаем данные пиццы при монтировании
onMounted(async () => {
  try {
    const data = await getSalat();
    Salat.value = data;
    errorMessage.value = null;
  } catch (error) {
    console.error('Error fetching Salats:', error);
    errorMessage.value = 'Не удалось загрузить данные по Salat. Пожалуйста, попробуйте позже.';
  
    $q.notify({
      color: 'negative', message: 'ERROR fetching Salat', icon: 'report_problem', position:"top-left",
    })
  }
});
</script>