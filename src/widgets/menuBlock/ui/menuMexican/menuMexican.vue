<template>
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
              <massWeight @update-price="updatePrice" :CustomClass="Mexican.CustomClass" :title="Mexican.weightName"/>
              <counter :price="menuPrices[Mexican.weightName]" />
            </div>
          </template>

          <template v-slot:additional-info>
            <massWeight CustomInfoClass="option-info-flex" CustomClass="option-none" ButtonBlockClass="option-none" :title="Mexican.weightName"/>
          </template>
        </MenuItem>
      </div>
</template>

<style lang="scss" scoped>
@import '../style.scss';
</style>

<script setup lang="ts">
  import counter from "@widgets/Counter/ui/counter.vue"; 
  import { getMexican } from '../../api/apiService';
  import MenuItem from "@entities/menuItem/ui/menuItem.vue";
  import massWeight from '@widgets/massWeighr/ui/massWeight.vue';
  import { ref,onMounted } from 'vue';
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
    const data = await getMexican();
    Mexican.value = data; // Убедитесь, что data - это массив пицц
    errorMessage.value = null; // Сбрасываем сообщение об ошибке
  } catch (error) {
    console.error('Error fetching Mexican:', error);
    errorMessage.value = 'Не удалось загрузить данные. Пожалуйста, попробуйте позже.'; // Устанавливаем сообщение об ошибке
  }
});
</script>