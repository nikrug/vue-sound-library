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
                <div class="stock__item-name">{{stockName}}</div>
                <div class="stock__item-description">{{ stockDescription}}</div>
                <div class="stock__item-description">{{ stockDescription2}}</div>
                <div class="stock__item-label-block">
                    <slot></slot>
                </div>
            </div>
        </div>
</template>

  
<style lang="scss" scoped>
@import './style.scss';


.stock__item{
    border-radius:10px;
    background-color:#FAFAFA;
    overflow: hidden;
}

.stock__item-img{
}

.stock__item-description-container{
    display:flex;
    flex-direction:column;
    gap:10px;
    padding:20px;

}

.stock__item-label-block{
    display:flex;
    flex-direction:row;
    gap:10px;
}

.stock__item-label{
    display:flex;
    flex-direction:row;
    padding:5px;
    background-color:#FBE7CE;
    color:#FF991F;
    border-radius:10px;
}
.stock__item-name{
    font-size:28px;
}
</style>