<template>
    <div class="stock">
        <div class="stock__page">
        <div class="stock__label-block">
                <div class="stock__label">Акции</div>
                <div class="stock__sublabel">Акции и скидки не суммируются</div>
        </div>
        <div class="stock-list">
                <StockCard
                        v-for="stock in stock"
                        :key="stock.id"
                        :stock-name="stock.name"
                        :stock-description="stock.description1"
                        :stock-description2="stock.description2"
                        :imageSrc="stock.imageSrc"
                        :stockLabelClass1="stock.stockLabelClass1"
                        :stockLabelClass2="stock.stockLabelClass2"
                        :stockLabelClass3="stock.stockLabelClass3"
                        :stockLabel1="stock.stockLabel1"
                        :stockLabel2="stock.stockLabel2"
                        :stockLabel3="stock.stockLabel3"
                        >
                </StockCard>
        </div> 
    </div>
    </div>
</template>

<script setup lang="ts">
import StockCard from  '@entities/stockCard/ui/stockCard.vue';
import { getStock } from '@widgets/menuBlock/api/apiService';
import { ref, onMounted } from 'vue';
import card from '@widgets/Card/card.vue';
import Card from '@widgets/Card/card.vue';
interface Stock {
  id: number;
  name: string;
  description1: string;
  description2: string;
  imageSrc: string;
  stockLabelClass1:string;
  stockLabelClass2:string;
  stockLabelClass3:string;
  stockLabel1:string;
  stockLabel2:string;
  stockLabel3:string;
}
const cartItems = ref<{ id: number, name: string, price: number, quantity: number,imagesrc:string, }[]>([]);



// Функция удаления элемента из корзины
const removeFromCart = (id: number) => {
  const index = cartItems.value.findIndex(item => item.id === id);
  if (index !== -1) {
    cartItems.value.splice(index, 1); // Удаляем элемент из массива
  }
};

// Данные пиццы
const stock = ref<Stock[]>([]);
// Получаем данные пиццы при монтировании
onMounted(async () => {
  try {
    const data = await getStock();
    stock.value = data; // Убедитесь, что data - это массив пицц
  } catch (error) {
    console.error('Error fetching stock:', error);
  }
});
</script>

<style lang="scss" scoped>
@import './style.scss';

</style>

