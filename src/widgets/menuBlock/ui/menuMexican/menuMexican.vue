<template>
      <CartList :customclass="'invisible'" :cartItems="cartItemss" :onRemoveItem="removeFromCart"  />
      <div class="menu-label" id="Mexican">Мексиканские блюда</div>

      <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>

      <div class="menu-container">
        <MenuItem
          v-for="Mexican in Mexican"
          :key="Mexican.id"
          :menuName="Mexican.name"
          :menuDescription="Mexican.description"
          :menuWeight="Mexican.weight"
          :imageSrc="Mexican.imageSrc"
          :overImage="Mexican.overImage"
          :SpicyimageSrc="Mexican.spicyImageSrc">
          <template v-slot:weight-counter>
            <div class="menu-options">
              <massWeight :CustomClass="Mexican.CustomClass" @update-price="updatePrice" :title="Mexican.weightName">
                <template v-slot:counter1>
                  <counter :id="`${Mexican.id}-counter7`" :onAddToCart="() => addToCart(Mexican)" :onDeleteToCart="() => removeFromCartt(Mexican)" :price="menuPricesMexican[Mexican.weightName]" />
                </template>
                <template v-slot:counter2>
                  <counter :id="`${Mexican.id}-counter8`" :onAddToCart="() => addToCart(Mexican)" :onDeleteToCart="() => removeFromCartt(Mexican)" :price="menuPricesMexican[Mexican.weightName]" />
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
            :title="Mexican.weightName"/>
          </template>
        </MenuItem>
      </div>
</template>

<style lang="scss" scoped>
@import '../style.scss';
</style>

<script setup lang="ts">
  import counter from "@widgets/counter/ui/counter/counter.vue"; 
  import { getMexican } from '../../api/apiService';
  import MenuItem from "@entities/menuItem/ui/menuItem.vue";
  import massWeight from '@widgets/massWeighr/ui/massWeight.vue';
  import { ref,onMounted } from 'vue';
  import CartList from "@widgets/cartList/ui/cartList.vue";
  import { useQuasar } from 'quasar';

  interface Mexican {
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

 const Mexican = ref<Mexican[]>([]);
const errorMessage = ref<string | null>(null);
const cartItemss = ref<{ id: number, name: string, price: number, quantity: number,imagesrc:string, }[]>([]);
const menuPricesMexican = ref<Record<string, number>>({});

// Измените функцию обновления цены
const updatePrice = (payload: { title: string; price: number }) => {
  menuPricesMexican.value[payload.title] = payload.price;
};


const addToCart = (MexicanItem: Mexican) => {
  const existingItem = cartItemss.value.find(item => item.id === MexicanItem.id);

  const currentPrice = menuPricesMexican.value[MexicanItem.weightName]; // Используем menuPricesMexican

  if (existingItem) {
    existingItem.price = currentPrice; // Обновляем цену при необходимости
    existingItem.quantity++;
  } else {
    cartItemss.value.push({
      id: MexicanItem.id,
      name: MexicanItem.name,
      imagesrc: MexicanItem.imageSrc,
      price: currentPrice, // Берем цену из menuPrices
      quantity: 1,
    });
  }
};
// Функция удаления пиццы из корзины
const removeFromCartt = (MexicanItem: Mexican) => {
  const existingItem = cartItemss.value.find(item => item.id === MexicanItem.id);
  
  if (existingItem) {
    existingItem.quantity--;
    // Удаляем элемент из корзины, если количество стало меньше 1
    if (existingItem.quantity < 1) {
      cartItemss.value = cartItemss.value.filter(item => item.id !== MexicanItem.id);
    }
  }
};
// Функция удаления элемента из корзины
const removeFromCart = (id: number) => {
  const index = cartItemss.value.findIndex(item => item.id === id);
  if (index !== -1) {
    cartItemss.value.splice(index, 1); // Удаляем элемент из массива
  }
};

const $q = useQuasar()

// Получаем данные пиццы при монтировании
onMounted(async () => {
  try {
    const data = await getMexican();
    Mexican.value = data;
    errorMessage.value = null;
  } catch (error) {
    console.error('Error fetching Mexicans:', error);
    errorMessage.value = 'Не удалось загрузить данные по Mexican. Пожалуйста, попробуйте позже.';
    
    $q.notify({
      color: 'negative', message: 'ERROR fetching Mexicans', icon: 'report_problem', position:"top-left",
    })
  }
});
</script>