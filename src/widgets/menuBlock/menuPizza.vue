<template>
      <div class="menu-label" id="Pizza">Пицца</div>
      <div class="menu-container">
        <MenuItem menuName="Дженнифер" 
        menuDescription="Состав: копченая курица, творожный сыр, кабачки, грибы свежие, помидоры, сыр, соус сырный, соус пикантный, дрожжевое тесто."
        menuWeight="(100 гр: 244 Ккал/1020 кДж)"
        imageSrc="/images/menu-item/Jeniffer.jpg"
        SpicyimageSrc="/images/menu-item/Exclamation Mark.svg" >
            <massWeight @update-price="updatePrice"  title="Дженнифер"/>
            <counter :price="menuPrices['Дженнифер']" />
            <template v-slot:additional-info>
                <massWeight CustomInfoClass="option-info-flex"  CustomClass="option-none" ButtonBlockClass="option-none" title="Дженнифер"/>
            </template>
        </MenuItem>

        <MenuItem SpicyimageSrc="/images/menu-item/Exclamation Mark.svg">
          <massWeight  @update-price="updatePrice"  title="Арканзас"/>
          <counter :price="menuPrices['Арканзас']" />
          <template v-slot:additional-info>
            <massWeight CustomInfoClass="option-info-flex"  CustomClass="option-none" ButtonBlockClass="option-none" title="Арканзас" />
          </template>
        </MenuItem>

        <MenuItem menuName="Мичиган" menuDescription="Состав: маринованная говядина, грибы свежие, копченая индейка, помидоры,сыр, соус тар-тар, дрожжевое тесто."
        menuWeight="(100 гр: 244 Ккал/1020 кДж)" imageSrc="/images/menu-item/Michigan.png"
        SpicyimageSrc="/images/menu-item/Exclamation Mark.svg" >
            <massWeight  @update-price="updatePrice" title="Мичиган"/>
            <counter :price="menuPrices['Мичиган']" />
            <template v-slot:additional-info>
              <massWeight CustomInfoClass="option-info-flex"  CustomClass="option-none" ButtonBlockClass="option-none" title="Мичиган"/>
            </template>
        </MenuItem>

        <MenuItem menuName="Пепперони" 
        menuDescription="Состав: колбаса пепперони, огурцы маринованные, сыр, перец халапеньо, томатный соус, дрожжевое тесто." 
        menuWeight="(В 100 гр.: 330 ккал/1382 кДж)" imageSrc="/images/menu-item/Peperoni.jpg"  SpicyimageSrc="/images/menu-item/Exclamation Mark.svg">
          <massWeight @update-price="updatePrice"  title="Пепперони"/>
          <counter :price="menuPrices['Пепперони']" />
          <template v-slot:additional-info>
              <massWeight CustomInfoClass="option-info-flex"  CustomClass="option-none" ButtonBlockClass="option-none" title="Пепперони"/>
          </template>
        </MenuItem>

        <MenuItem menuName="Джорджия" menuDescription="Состав: кальмары, помидоры, сыр, оливки, соус бешамель с пастой из морепродуктов, соус унаги, дрожжевое тесто."
        menuWeight="(В 100 гр.: 238 ккал/997 кДж)" imageSrc="/images/menu-item/Jorjia.jpg" SpicyimageSrc="/images/menu-item/Exclamation Mark.svg">
          <massWeight @update-price="updatePrice"  title="Джорджия"/>
           <counter :price="menuPrices['Джорджия']" />
          <template v-slot:additional-info>
            <massWeight CustomInfoClass="option-info-flex"  CustomClass="option-none" ButtonBlockClass="option-none" title="Джорджия"/>
          </template>
        </MenuItem>

        <MenuItem menuName="Манхеттен" menuDescription="Состав: колбаса, грибы свежие, помидоры, маслины, сыр, соус томатный, дрожжевое тесто."
        menuWeight="(В 100 гр.: 304 ккал/1270 кДж)" imageSrc="/images/menu-item/Manhattan.jpg" SpicyimageSrc="/images/menu-item/Exclamation Mark.svg">
          <massWeight @update-price="updatePrice"  title="Манхетен"/>
            <counter :price="menuPrices['Манхетен']" />
          <template v-slot:additional-info>
            <massWeight CustomInfoClass="option-info-flex"  CustomClass="option-none" ButtonBlockClass="option-none" title="Манхеттен"/>
          </template>
        </MenuItem>

        <MenuItem menuName="Пепперони" 
        menuDescription="Состав: колбаса пепперони, огурцы маринованные, сыр, перец халапеньо, томатный соус, дрожжевое тесто." 
        menuWeight="(В 100 гр.: 330 ккал/1382 кДж)" imageSrc="/images/menu-item/Peperoni.jpg">
          <massWeight @update-price="updatePrice" title="Пепперони2"/>
           <counter :price="menuPrices['Пепперони2']" />
          <template v-slot:additional-info>
              <massWeight CustomInfoClass="option-info-flex"  CustomClass="option-none" ButtonBlockClass="option-none" title="Пепперони2"/>
          </template>
        </MenuItem>

        <MenuItem menuName="Джорджия" menuDescription="Состав: кальмары, помидоры, сыр, оливки, соус бешамель с пастой из морепродуктов, соус унаги, дрожжевое тесто."
         menuWeight="(В 100 гр.: 238 ккал/997 кДж)" imageSrc="/images/menu-item/Jorjia.jpg" SpicyimageSrc="/images/menu-item/Exclamation Mark.svg">
          <massWeight @update-price="updatePrice" title="Джорджия"/>
           <counter :price="menuPrices['Джорджия']" />
            <template v-slot:additional-info>
              <massWeight CustomInfoClass="option-info-flex"  CustomClass="option-none" ButtonBlockClass="option-none" title="Джорджия"/>
          </template>
        </MenuItem>

        <MenuItem menuName="Манхеттен" menuDescription="Состав: колбаса, грибы свежие, помидоры, маслины, сыр, соус томатный, дрожжевое тесто."
        menuWeight="(В 100 гр.: 304 ккал/1270 кДж)" imageSrc="/images/menu-item/Manhattan.jpg">
          <massWeight @update-price="updatePrice"  title="Манхетен2"/>
            <counter :price="menuPrices['Манхетен2']" />
          <template v-slot:additional-info>
            <massWeight CustomInfoClass="option-info-flex"  CustomClass="option-none" ButtonBlockClass="option-none" title="Манхеттен2"/>
          </template>
        </MenuItem>

        <MenuItem menuName="Манхеттен" menuDescription="Состав: колбаса, грибы свежие, помидоры, маслины, сыр, соус томатный, дрожжевое тесто."
        menuWeight="(В 100 гр.: 304 ккал/1270 кДж)" imageSrc="/images/menu-item/Manhattan.jpg"  SpicyimageSrc="/images/menu-item/Exclamation Mark.svg">
           <massWeight @update-price="updatePrice"  title="Манхетен"/>
            <counter :price="menuPrices['Манхетен']" />
          <template v-slot:additional-info>
            <massWeight CustomInfoClass="option-info-flex"  CustomClass="option-none" ButtonBlockClass="option-none" title="Манхеттен"/>
          </template>
        </MenuItem>

        <MenuItem>
          <massWeight @update-price="updatePrice"  title="Арканзас2"  SpicyimageSrc="/images/menu-item/Exclamation Mark.svg"/>
          <counter :price="menuPrices['Арканзас2']" />
          <template v-slot:additional-info>
            <massWeight CustomInfoClass="option-info-flex"  CustomClass="option-none" ButtonBlockClass="option-none" title="Арканзас2"/>
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
  import { defineComponent, ref, onMounted } from 'vue';
  import { getPizzas } from './apiService';
  interface Pizza {
    id: number;
    title: string;
    author: string;
}
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
