<template>
      <div class="menu-label" id="Mexican">Мексиканские блюда</div>
      <div class="menu-container">
        <MenuItem menuName="Кесадия куриная" menuDescription="Состав: курица, помидоры, перец болгарский, сыр, соус, кетчуп, майонез с зеленью, пресная лепешка"
          menuWeight="(В 100 гр.: 330 ккал/1382 кДж)" imageSrc="/images/menu-item/Kesadilia.png">
              <massWeight @update-price="updatePrice"  title="Кесадия"/>
              <counter  :price="menuPrices['Кесадия']" />
              <template v-slot:additional-info>
                <massWeight CustomInfoClass="option-info-flex"  CustomClass="option-none" ButtonBlockClass="option-none" title="Кесадия"/>
              </template>
        </MenuItem>

        <MenuItem menuName="Кесадия грибная" menuDescription="Состав: грибы, сыр, помидоры, маслины, соус Чили, майонез, пресная лепешка."
         menuWeight="(В 100 гр.: 238 ккал/997 кДж)" imageSrc="/images/menu-item/Kesadilia.png">
                <massWeight  @update-price="updatePrice" title="Кесадия"/>
                <counter  :price="menuPrices['Кесадия']" />
                <template v-slot:additional-info>
                  <massWeight CustomInfoClass="option-info-flex"  CustomClass="option-none" ButtonBlockClass="option-none" title="Кесадия"/>
                </template>
        </MenuItem>

        <MenuItem menuName="Кесадия мясная" menuDescription="Состав: грибы, сыр, помидоры, маслины, соус Чили, майонез, пресная лепешка."
         menuWeight="(В 100 гр.: 238 ккал/997 кДж)" imageSrc="/images/menu-item/Kesadilia.png">
                <massWeight @update-price="updatePrice"  title="Кесадия"/>
                <counter  :price="menuPrices['Кесадия']" />
                <template v-slot:additional-info>
                  <massWeight CustomInfoClass="option-info-flex"  CustomClass="option-none" ButtonBlockClass="option-none" title="Кесадия"/>
                </template>
        </MenuItem>

        <MenuItem menuName="Цезарь ролл" menuDescription="Состав: тортилья-гриль, курица, маринованная в соевом соусе, помидоры, сыра, лист салата, соус горчичный."
         menuWeight="(В 100 гр.: 238 ккал/997 кДж)" imageSrc="/images/menu-item/Kesadilia.png">
                <massWeight @update-price="updatePrice" CustomClass="option-none"  title="Кесадия-ролл"/>
                <counter  :price="menuPrices['Кесадия-ролл']" />
                <template v-slot:additional-info>
                  <massWeight CustomInfoClass="option-info-flex"  CustomClass="option-none" ButtonBlockClass="option-none" title="Кесадия"/>
                </template>
        </MenuItem>

        <MenuItem menuName="Кесадия куриная" menuDescription="Состав: курица, помидоры, перец болгарский, сыр, соус, кетчуп, майонез с зеленью, пресная лепешка"
          menuWeight="(В 100 гр.: 330 ккал/1382 кДж)" imageSrc="/images/menu-item/Kesadilia.png">
              <massWeight  @update-price="updatePrice" title="Кесадия"/>
              <counter  :price="menuPrices['Кесадия']" />
              <template v-slot:additional-info>
                <massWeight CustomInfoClass="option-info-flex"  CustomClass="option-none" ButtonBlockClass="option-none" title="Кесадия"/>
              </template>
        </MenuItem>

        <MenuItem menuName="Кесадия грибная" menuDescription="Состав: грибы, сыр, помидоры, маслины, соус Чили, майонез, пресная лепешка."
         menuWeight="(В 100 гр.: 238 ккал/997 кДж)" imageSrc="/images/menu-item/Kesadilia.png">
              <massWeight  @update-price="updatePrice" title="Кесадия"/>
              <counter  :price="menuPrices['Кесадия']" />
              <template v-slot:additional-info>
                <massWeight CustomInfoClass="option-info-flex"  CustomClass="option-none" ButtonBlockClass="option-none" title="Кесадия"/>
              </template>
        </MenuItem>

        <MenuItem menuName="Энчиладос" menuDescription="Состав: курица, перец болгарский, кукуруза, лук жареный, рис, сыр, соус Чили, майонез, преcная лепешка. Соус на ваш выбор: Сальса классический/Сальса фирменный."
         menuWeight="(В 100 гр.: 330 ккал/1382 кДж)" imageSrc="/images/menu-item/enchiladoss.png">
                <massWeight @update-price="updatePrice"  title="Энчиладос"/>
                <counter  :price="menuPrices['Энчиладос']" />
                <template v-slot:additional-info>
                  <massWeight CustomInfoClass="option-info-flex"  CustomClass="option-none" ButtonBlockClass="option-none" title="Энчиладос"/>
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