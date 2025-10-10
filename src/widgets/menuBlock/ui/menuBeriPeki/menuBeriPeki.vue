<template>
      <CartList :customclass="'invisible'" :cartItems="cartItems" :onRemoveItem="removeFromCart"  />
      <div class="menu-label" id="Beri-Peki">Заготовка пиццы «Бери-пеки»</div>

      <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
      
      <div class="menu-container">
      <MenuItem
        v-for="BeriPeki in BeriPeki"
        :key="BeriPeki.id"
        :menuName="BeriPeki.name"
        :menuDescription="BeriPeki.description"
        :menuWeight="BeriPeki.weight"
        :imageSrc="BeriPeki.imageSrc"
        :overImage="BeriPeki.overImage">

        <template v-slot:weight-counter>
          <div class="menu-options">
            <massWeight  CustomClass="option-none" @update-price="updatePrice" :title="BeriPeki.weightName">
              <template v-slot:counter1>
                <counter :id="`${BeriPeki.id}-counter3`" :onAddToCart="() => addToCart(BeriPeki)" :onDeleteToCart="() => removeFromCartt(BeriPeki)" :price="menuPrices[BeriPeki.weightName]" />
              </template>
              <template v-slot:counter2>
                <counter :id="`${BeriPeki.id}-counter4`" :onAddToCart="() => addToCart(BeriPeki)" :onDeleteToCart="() => removeFromCartt(BeriPeki)" :price="menuPrices[BeriPeki.weightName]" />
              </template>
              
            </massWeight>
            
          </div>
        </template>
          <template v-slot:additional-info>
            <massWeight CustomInfoClass="option-info-flex" CustomClass="option-none" ButtonBlockClass="option-none" :title="BeriPeki.weightName"/>
          </template>
      </MenuItem>
      
      </div>
</template>


<script setup lang="ts">
  import counter from "@widgets/Counter/ui/counter.vue"; 
  import MenuItem from "@entities/menuItem/ui/menuItem.vue";
  import { getBeriPeki } from '../../api/apiService';
  import massWeight from '@widgets/massWeighr/ui/massWeight.vue';
  import { ref, onMounted } from 'vue';
  import CartList from "@widgets/cartList/ui/cartList.vue";
  import { useQuasar } from 'quasar';

interface BeriPeki {
  id: number;
  name: string;
  description: string;
  weight: string;
  weightName:string;
  imageSrc: string;
  spicyImageSrc: string;
  overImage:string;
}
const BeriPeki = ref<BeriPeki[]>([]);
const menuPrices = ref<Record<string, number>>({});
const errorMessage = ref<string | null>(null);
const cartItems = ref<{ id: number, name: string, price: number, quantity: number,imagesrc:string, }[]>([]);

// Функция для обновления цены
const updatePrice = (payload: { title: string; price: number }) => {
  menuPrices.value[payload.title] = payload.price;
};

const addToCart = (BeriPekiItem: BeriPeki) => {
  const existingItem = cartItems.value.find(item => item.id === BeriPekiItem.id);
  
  // Получаем текущую цену для выбранного веса
  const currentPrice = menuPrices.value[BeriPekiItem.weightName];

  if (existingItem) {
    existingItem.price = currentPrice; // Обновляем цену при необходимости
    existingItem.quantity++;
  } else {
    cartItems.value.push({
      id: BeriPekiItem.id,
      name: BeriPekiItem.name,
      imagesrc: BeriPekiItem.imageSrc,
      price: currentPrice, // Берем цену из menuPrices
      quantity: 1,
    });
  }
};
// Функция удаления пиццы из корзины
const removeFromCartt = (BeriPekiItem: BeriPeki) => {
  const existingItem = cartItems.value.find(item => item.id === BeriPekiItem.id);
  
  if (existingItem) {
    existingItem.quantity--;
    // Удаляем элемент из корзины, если количество стало меньше 1
    if (existingItem.quantity < 1) {
      cartItems.value = cartItems.value.filter(item => item.id !== BeriPekiItem.id);
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


onMounted(async () => {
  try {
    const data = await getBeriPeki();
    BeriPeki.value = data;
    errorMessage.value = null;
  } catch (error) {
    console.error('Error fetching BeriPeki:', error);
    errorMessage.value = 'Не удалось загрузить данные по BeriPeki. Пожалуйста, попробуйте позже.';
    $q.notify({
      color: 'negative', message: 'ERROR fetching BeriPeki', icon: 'report_problem', position:"top-left",
    })
  }
});
</script>



<style lang="scss" scoped>
@import '../style.scss';

</style>