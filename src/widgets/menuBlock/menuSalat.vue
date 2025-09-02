<template>
      <div class="menu-label" id="Salat">Салаты</div>
      <div class="menu-container">
        <MenuItem menuName="Лукас" menuDescription="Состав: маринованная говядина, огурцы свежие, пекинская капуста, лук красный маринованный, сухарики, орехово-чесночная заправка."
        menuWeight="(В 100 гр.: 275 ккал/1550 кДж)" imageSrc="/images/menu-item/salad.png">
            <massWeight @update-price="updatePrice" CustomClass="option-none"  title="Лукас"/>
            <counter  :price="menuPrices['Лукас']" />
            <template v-slot:additional-info>
              <massWeight CustomInfoClass="option-info-flex"  CustomClass="option-none" ButtonBlockClass="option-none" title="Лукас"/>
            </template>
        </MenuItem>

        <MenuItem menuName="Цезарь" menuDescription="Состав: курица, помидоры, яйцо перепелиное, сыр пармезан, сухарики, лист салата, пекинская капуста, соус пикантный."
        menuWeight="(В 100 гр.: 275 ккал/1550 кДж)" imageSrc="/images/menu-item/salad.png">
            <massWeight @update-price="updatePrice" CustomClass="option-none"  title="Цезарь"/>
            <counter  :price="menuPrices['Цезарь']" />
            <template v-slot:additional-info>
              <massWeight CustomInfoClass="option-info-flex"  CustomClass="option-none" ButtonBlockClass="option-none" title="Цезарь"/>
            </template>
        </MenuItem>

        <MenuItem menuName="Сомбреро" menuDescription="Состав: маринованная говядина, огурцы свежие, пекинская капуста, лук красный маринованный, сухарики, орехово-чесночная заправка."
        menuWeight="(В 100 гр.: 275 ккал/1550 кДж)" imageSrc="/images/menu-item/salad.png">
            <massWeight @update-price="updatePrice" CustomClass="option-none"  title="Сомбреро"/>
            <counter  :price="menuPrices['Сомбреро']" />
            <template v-slot:additional-info>
              <massWeight CustomInfoClass="option-info-flex"  CustomClass="option-none" ButtonBlockClass="option-none" title="Сомбреро"/>
            </template>
        </MenuItem>

        <MenuItem menuName="Сомбреро" menuDescription="Состав: маринованная говядина, огурцы свежие, пекинская капуста, лук красный маринованный, сухарики, орехово-чесночная заправка."
        menuWeight="(В 100 гр.: 275 ккал/1550 кДж)" imageSrc="/images/menu-item/salad.png">
            <massWeight @update-price="updatePrice" CustomClass="option-none"  title="Сомбреро"/>
            <counter  :price="menuPrices['Сомбреро']" />
            <template v-slot:additional-info>
              <massWeight CustomInfoClass="option-info-flex"  CustomClass="option-none" ButtonBlockClass="option-none" title="Сомбреро"/>
            </template>
        </MenuItem>

        <MenuItem menuName="Сомбреро" menuDescription="Состав: маринованная говядина, огурцы свежие, пекинская капуста, лук красный маринованный, сухарики, орехово-чесночная заправка."
        menuWeight="(В 100 гр.: 275 ккал/1550 кДж)" imageSrc="/images/menu-item/salad.png">
            <massWeight @update-price="updatePrice" CustomClass="option-none"  title="Сомбреро"/>
            <counter  :price="menuPrices['Сомбреро']" />
            <template v-slot:additional-info>
              <massWeight CustomInfoClass="option-info-flex"  CustomClass="option-none" ButtonBlockClass="option-none" title="Сомбреро"/>
            </template>
        </MenuItem>
      </div>
</template>

<style lang="scss" scoped>
@import './style.scss';
</style>

<script setup lang="ts">
  import counter from "@widgets/Counter/ui/counter.vue"; 
  import MenuItem from "@entities/menuItem/ui/menuItem.vue";
  import massWeight from '@widgets/massWeighr/ui/massWeight.vue';
  import { ref } from 'vue';

  const menuPrices = ref<Record<string, number>>({ // Используем Record для типизации объекта цен
    'Дженнифер': 0,
    'Арканзас': 0,
    // Добавьте другие пиццы по мере необходимости
  });

  const totalPrice = ref<number>(0); // Указываем тип для totalPrice

  const updatePrice = (payload: { title: string; price: number }) => { // Указываем тип для параметра
    menuPrices.value[payload.title] = payload.price; // Обновляем цену для конкретного наименования
  };
</script>
