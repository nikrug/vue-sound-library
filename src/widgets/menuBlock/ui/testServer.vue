<template>
    <div>
    <div class="menu-label" id="Pizza">Пицца</div>
    <div class="menu-container">
        <MenuItem
        v-for="pizza in pizza"
        :key="pizza.id"
        :menuName="pizza.name"
        :menuDescription="pizza.description"
        :menuWeight="pizza.weight"
        :imageSrc="pizza.imageSrc"
        :SpicyimageSrc="pizza.spicyImageSrc"
        :overImage="pizza.overImage">
        <template v-slot:weight-counter>
          <div class="menu-options">
            <massWeight  @update-price="updatePrice" :title="pizza.weightName"/>
            <counter :price="menuPrices[pizza.weightName]" />
          </div>
        </template>

        <template v-slot:additional-info>
          <massWeight CustomInfoClass="option-info-flex" CustomClass="option-none" ButtonBlockClass="option-none" :title="pizza.name"/>
        </template>
      </MenuItem>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import './style.scss';
</style>
<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { getPizzas } from '../api/apiService';
import MenuItem from "@entities/menuItem/ui/menuItem.vue";
import counter from "@widgets/Counter/ui/counter.vue"; 
import massWeight from '@widgets/massWeighr/ui/massWeight.vue';
interface Pizza {
  id: number;
  name: string;
  description: string;
  weight: string;
  weightName:string;
  imageSrc: string;
  spicyImageSrc: string;
  overImage:string;
}

// Данные пиццы
const pizza = ref<Pizza[]>([]);

// Цены на меню
const menuPrices = ref<Record<string, number>>({
  'Дженнифер': 0,
  'Арканзас': 0,
  // Добавьте другие пиццы по мере необходимости
});

// Общая цена
const totalPrice = ref<number>(0);

// Функция для обновления цены
const updatePrice = (payload: { title: string; price: number }) => {
  menuPrices.value[payload.title] = payload.price; // Обновляем цену для конкретного наименования
  totalPrice.value = Object.values(menuPrices.value).reduce((sum, price) => sum + price, 0); // Обновляем общую цену
};

// Получаем данные пиццы при монтировании
onMounted(async () => {
  try {
    const data = await getPizzas();
    pizza.value = data; // Убедитесь, что data - это массив пицц
  } catch (error) {
    console.error('Error fetching pizzas:', error);
  }
});
</script>
