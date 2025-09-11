<template>
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
            <massWeight @update-price="updatePrice" CustomClass="option-none" :title="BeriPeki.weightName"/>
            <counter :price="menuPrices[BeriPeki.weightName]" />
          </template>

          <template v-slot:additional-info>
            <massWeight CustomInfoClass="option-info-flex" CustomClass="option-none" ButtonBlockClass="option-none" :title="BeriPeki.weightName"/>
          </template>
      </MenuItem>
      
      </div>
</template>

<style lang="scss" scoped>
@import '../style.scss';
</style>

<script setup lang="ts">
  import counter from "@widgets/Counter/ui/counter.vue"; 
  import MenuItem from "@entities/menuItem/ui/menuItem.vue";
  import { getBeriPeki } from '../../api/apiService';
  import massWeight from '@widgets/massWeighr/ui/massWeight.vue';
  import { ref, onMounted } from 'vue';
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

// Данные пиццы
const BeriPeki = ref<BeriPeki[]>([]);
  const menuPrices = ref<Record<string, number>>({ // Используем Record для типизации объекта цен
    'Дженнифер': 0,
    'Арканзас': 0,
    // Добавьте другие пиццы по мере необходимости
  });

  const totalPrice = ref<number>(0); // Указываем тип для totalPrice

  const updatePrice = (payload: { title: string; price: number }) => { // Указываем тип для параметра
    menuPrices.value[payload.title] = payload.price; // Обновляем цену для конкретного наименования
  };
  // Сообщение об ошибке
  const errorMessage = ref<string | null>(null);

// Получаем данные пиццы при монтировании
onMounted(async () => {
  try {
    const data = await getBeriPeki();
    BeriPeki.value = data; // Убедитесь, что data - это массив пицц
    errorMessage.value = null; // Сбрасываем сообщение об ошибке
  } catch (error) {
    console.error('Error fetching BeriPeki:', error);
    errorMessage.value = 'Не удалось загрузить данные. Пожалуйста, попробуйте позже.'; // Устанавливаем сообщение об ошибке
  }
});
</script>