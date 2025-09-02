<template>
      <div class="menu-label" id="Snacks">Закуски</div>
      <div class="menu-container">
        <MenuItem menuName="Куриные наггетсы" menuDescription="Состав: маринованные в  соевом  соусе кусочки куриного филе в хрустящей панировке, обжаренные во фритюре. Соус на ваш выбор: Кетчуп/ Тар-тар"
         menuWeight="(В 100 гр.: 304 ккал/1270 кДж)" imageSrc="/images/menu-item/nuggets.png" overImage="/images/menu-item/new.svg">
            <massWeight @update-price="updatePrice" CustomClass="option-none"  title="Наггетсы"/>
            <counter  :price="menuPrices['Наггетсы']" />
            <template v-slot:additional-info>
              <massWeight CustomInfoClass="option-info-flex"  CustomClass="option-none" ButtonBlockClass="option-none" title="Наггетсы"/>
          </template>
        </MenuItem>

        <MenuItem menuName="Сырная тортилья" menuDescription="Состав: запеченная пресная лепешка под сыром, сырный соус и орегано"
         menuWeight="(В 100 гр.: 275 ккал/1550 кДж)" imageSrc="/images/menu-item/nuggets.png">
              <massWeight @update-price="updatePrice" CustomClass="option-none"  title="Тортилья"/>
              <counter  :price="menuPrices['Тортилья']" />
              <template v-slot:additional-info>
                <massWeight CustomInfoClass="option-info-flex"  CustomClass="option-none" ButtonBlockClass="option-none" title="Тортилья"/>
              </template>
        </MenuItem>

        <MenuItem menuName="Сухарики к пиву" menuDescription="Состав: запеченная пресная лепешка под сыром, сырный соус и орегано" menuWeight="(В 100 гр.: 304 ккал/1270 кДж)" imageSrc="/images/menu-item/nuggets.png">
              <massWeight @update-price="updatePrice" CustomClass="option-none"  title="Сухарики"/>
              <counter  :price="menuPrices['Сухарики']" />
              <template v-slot:additional-info>
                <massWeight CustomInfoClass="option-info-flex"  CustomClass="option-none" ButtonBlockClass="option-none" title="Сухарики"/>
              </template>
        </MenuItem>

        <MenuItem menuName="Соус Сальса классический" menuDescription="Состав: запеченная пресная лепешка под сыром, сырный соус и орегано"
        menuWeight="(В 100 гр.: 275 ккал/1550 кДж)" imageSrc="/images/menu-item/spicy-sous.png" overImage="/images/menu-item/new.svg">
              <massWeight @update-price="updatePrice"  title="Сальса"/>
              <counter  :price="menuPrices['Сальса']" />
              <template v-slot:additional-info>
                <massWeight CustomInfoClass="option-info-flex"  CustomClass="option-none" ButtonBlockClass="option-none" title="Сальса"/>
              </template>
        </MenuItem>

        <MenuItem menuName="Соус Тар-тар" menuDescription="Состав: запеченная пресная лепешка под сыром, сырный соус и орегано"  menuWeight="(В 100 гр.: 275 ккал/1550 кДж)" imageSrc="/images/menu-item/spicy-sous.png">
              <massWeight @update-price="updatePrice"  title="Тар-Тар"/>
              <counter :price="menuPrices['Тар-Тар']" />
              <template v-slot:additional-info>
                <massWeight CustomInfoClass="option-info-flex"  CustomClass="option-none" ButtonBlockClass="option-none" title="Тар-Тар"/>
              </template>
        </MenuItem>

        <MenuItem menuName="Соус сырный" menuDescription="Состав: запеченная пресная лепешка под сыром, сырный соус и орегано" menuWeight="(В 100 гр.: 275 ккал/1550 кДж)" imageSrc="/images/menu-item/spicy-sous.png">
            <massWeight @update-price="updatePrice" title="Сырный"/>
            <counter  :price="menuPrices['Сырный']" />
            <template v-slot:additional-info>
              <massWeight CustomInfoClass="option-info-flex"  CustomClass="option-none" ButtonBlockClass="option-none" title="Сырный"/>
            </template>
        </MenuItem>

        <MenuItem menuName="Кетчуп / Майонез / Сметана" menuDescription="Состав: запеченная пресная лепешка под сыром, сырный соус и орегано"
         menuWeight="(В 100 гр.: 304 ккал/1270 кДж)" imageSrc="/images/menu-item/sous.png" overImage="/images/menu-item/new.svg">
          <massWeight @update-price="updatePrice" title="Кетчуп Майонез Сметана"/>
          <counter  :price="menuPrices['Кетчуп Майонез Сметана']" />
          <template v-slot:additional-info>
              <massWeight CustomInfoClass="option-info-flex"  CustomClass="option-none" ButtonBlockClass="option-none" title="Кетчуп Майонез Сметана"/>
          </template>
        </MenuItem>

        <MenuItem menuName="Соус Сальса классический" menuDescription="Состав: запеченная пресная лепешка под сыром, сырный соус и орегано"
         menuWeight="(В 100 гр.: 275 ккал/1550 кДж)" imageSrc="/images/menu-item/spicy-sous.png" overImage="/images/menu-item/new.svg">
            <massWeight @update-price="updatePrice" title="Сальса"/>
            <counter  :price="menuPrices['Сырный']" />
            <template v-slot:additional-info>
              <massWeight CustomInfoClass="option-info-flex"  CustomClass="option-none" ButtonBlockClass="option-none" title="Сальса"/>
            </template>
        </MenuItem>

        <MenuItem menuName="Сухарики к пиву" menuDescription="Состав: запеченная пресная лепешка под сыром, сырный соус и орегано" menuWeight="(В 100 гр.: 304 ккал/1270 кДж)" imageSrc="/images/menu-item/nuggets.png">
              <massWeight @update-price="updatePrice" CustomClass="option-none"  title="Сухарики"/>
              <counter  :price="menuPrices['Сырный']" />
              <template v-slot:additional-info>
                <massWeight CustomInfoClass="option-info-flex"  CustomClass="option-none" ButtonBlockClass="option-none" title="Сухарики"/>
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
