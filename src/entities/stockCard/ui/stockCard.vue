<script setup>
  import {  ref } from 'vue';
    const Popup =ref(false);
const props = defineProps({
  stockName: {
    type: String,
    default:"Арканзас",
  },
  stockDescription: {
    type: String,
    default:"Состав: рваная свинина, помидоры, сыр, лук красный маринованный, лук фри, перец халапеньо, чесночное масло, соус чипотле, дрожжевое тесто.(В 100 гр.: 290 кКал/1214 кДж)",
  },
  stockDescription2: {
    type: String,
    default:"Состав: рваная свинина, помидоры, сыр, лук красный маринованный, лук фри, перец халапеньо, чесночное масло, соус чипотле, дрожжевое тесто.(В 100 гр.: 290 кКал/1214 кДж)",
  },
  stockLabel1: {
    type: String,
  },
  stockLabel2: {
    type: String,
  },
  stockLabel3: {
    type: String,
  },
  stockLabelGreen: {
    type: String,
  },
  imageSrc: {
    type: String,
    default:"/images/menu-item/Beri-peki.jpg"
  },
});
</script>


<template>
        <div class="stock__item">
            <img  class="stock__item-img" :src="imageSrc">
            <div class="stock__item-description-container">
              <div class="stock__item-text-block">
                <div class="stock__item-name">{{stockName}}</div>
                <div class="stock__item-description-block">
                  <div class="stock__item-description">{{ stockDescription}}</div>
                  <div class="stock__item-description">{{ stockDescription2}}</div>
                </div>
              </div>
                <div class="stock__item-label-block">
                    <slot></slot>
                </div>
            </div>
        </div>
</template>

  
<style lang="scss" scoped>
@import './style.scss';

.stock__item-text-block{

}
.stock__item-description-block{
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap:1rem;
}
</style>