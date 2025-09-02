<template>
      <div class="menu-label" id="Beri-Peki">Заготовка пиццы «Бери-пеки»</div>
      <div class="menu-container">
        <MenuItem menuName="Мичиган" menuDescription="Состав: маринованная говядина, грибы свежие, копченая индейка, помидоры,сыр, соус тар-тар, дрожжевое тесто."
        menuWeight="(В 100 гр.: 314 ккал/1314 кДж)" imageSrc="/images/menu-item/Beri-peki.jpg" overImage="/images/menu-item/new.svg">
          <massWeight @update-price="updatePrice" CustomClass="option-none"  title="Бери-пеки"/>
          <counter :price="menuPrices['Бери-пеки']" />
          <template v-slot:additional-info>
            <massWeight CustomInfoClass="option-info-flex"  CustomClass="option-none" ButtonBlockClass="option-none" title="Бери-пеки"/>
          </template>
        </MenuItem>

        <MenuItem menuName="Джорджия" menuDescription="Состав: кальмары, помидоры, сыр, оливки, соус бешамель с пастой из морепродуктов, соус унаги, дрожжевое тесто."
        menuWeight="(В 100 гр.: 238 ккал/997 кДж)" imageSrc="/images/menu-item/Beri-peki.jpg" overImage="/images/menu-item/hit.svg">
          <massWeight @update-price="updatePrice" CustomClass="option-none"  title="Бери-пеки"/>
          <counter :price="menuPrices['Бери-пеки']" />
          <template v-slot:additional-info>
            <massWeight CustomInfoClass="option-info-flex"  CustomClass="option-none" ButtonBlockClass="option-none" title="Бери-пеки"/>
          </template>
        </MenuItem>

        <MenuItem menuName="Манхетен" menuDescription="Состав: колбаса, грибы свежие, помидоры, маслины, сыр, соус томатный, дрожжевое тесто."
        menuWeight="(В 100 гр.: 304 ккал/1270 кДж)" imageSrc="/images/menu-item/Beri-peki.jpg">
          <massWeight @update-price="updatePrice" CustomClass="option-none"  title="Бери-пеки"/>
          <counter  :price="menuPrices['Бери-пеки']" />
          <template v-slot:additional-info>
            <massWeight CustomInfoClass="option-info-flex"  CustomClass="option-none" ButtonBlockClass="option-none" title="Бери-пеки"/>
          </template>
        </MenuItem>

        <MenuItem menuName="Джорджия" menuDescription="Состав: кальмары, помидоры, сыр, оливки, соус бешамель с пастой из морепродуктов, соус унаги, дрожжевое тесто."
        menuWeight="(В 100 гр.: 238 ккал/997 кДж)"  imageSrc="/images/menu-item/Beri-peki.jpg">
          <massWeight @update-price="updatePrice" CustomClass="option-none"  title="Бери-пеки"/>
          <counter :price="menuPrices['Бери-пеки']" />
          <template v-slot:additional-info>
            <massWeight CustomInfoClass="option-info-flex"  CustomClass="option-none" ButtonBlockClass="option-none" title="Бери-пеки"/>
          </template>
        </MenuItem>

        <MenuItem menuName="Манхетен" menuDescription="Состав: колбаса, грибы свежие, помидоры, маслины, сыр, соус томатный, дрожжевое тесто."
        menuWeight="(В 100 гр.: 304 ккал/1270 кДж)" imageSrc="/images/menu-item/Beri-peki.jpg">
          <massWeight @update-price="updatePrice" CustomClass="option-none"  title="Бери-пеки"/>
          <counter  :price="menuPrices['Бери-пеки']" />
          <template v-slot:additional-info>
            <massWeight CustomInfoClass="option-info-flex"  CustomClass="option-none" ButtonBlockClass="option-none" title="Бери-пеки"/>
          </template>
        </MenuItem>

        <MenuItem menuName="Манхетен" menuDescription="Состав: колбаса, грибы свежие, помидоры, маслины, сыр, соус томатный, дрожжевое тесто."
        menuWeight="(В 100 гр.: 304 ккал/1270 кДж)" imageSrc="/images/menu-item/Beri-peki.jpg">
          <massWeight @update-price="updatePrice" CustomClass="option-none"  title="Бери-пеки"/>
          <counter  :price="menuPrices['Бери-пеки']" />
          <template v-slot:additional-info>
            <massWeight CustomInfoClass="option-info-flex"  CustomClass="option-none" ButtonBlockClass="option-none" title="Бери-пеки"/>
          </template>
        </MenuItem>

        <MenuItem menuName="Манхетен" menuDescription="Состав: колбаса, грибы свежие, помидоры, маслины, сыр, соус томатный, дрожжевое тесто."
         menuWeight="(В 100 гр.: 304 ккал/1270 кДж)" imageSrc="/images/menu-item/Beri-peki.jpg">
          <massWeight @update-price="updatePrice" CustomClass="option-none"  title="Бери-пеки"/>
          <counter  :price="menuPrices['Бери-пеки']" />
          <template v-slot:additional-info>
            <massWeight CustomInfoClass="option-info-flex"  CustomClass="option-none" ButtonBlockClass="option-none" title="Бери-пеки"/>
          </template>
        </MenuItem>

        <MenuItem menuName="Манхетен" menuDescription="Состав: колбаса, грибы свежие, помидоры, маслины, сыр, соус томатный, дрожжевое тесто."
         menuWeight="(В 100 гр.: 304 ккал/1270 кДж)" imageSrc="/images/menu-item/Beri-peki.jpg">
          <massWeight @update-price="updatePrice" CustomClass="option-none"  title="Бери-пеки"/>
          <counter :price="menuPrices['Бери-пеки']" />
          <template v-slot:additional-info>
            <massWeight CustomInfoClass="option-info-flex"  CustomClass="option-none" ButtonBlockClass="option-none" title="Бери-пеки"/>
          </template>
        </MenuItem>

        <MenuItem menuName="Манхетен" menuDescription="Состав: колбаса, грибы свежие, помидоры, маслины, сыр, соус томатный, дрожжевое тесто."
        menuWeight="(В 100 гр.: 304 ккал/1270 кДж)" imageSrc="/images/menu-item/Beri-peki.jpg">
          <massWeight @update-price="updatePrice" CustomClass="option-none"  title="Бери-пеки"/>
          <counter :price="menuPrices['Бери-пеки']" />
          <template v-slot:additional-info>
            <massWeight CustomInfoClass="option-info-flex"  CustomClass="option-none" ButtonBlockClass="option-none" title="Бери-пеки"/>
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