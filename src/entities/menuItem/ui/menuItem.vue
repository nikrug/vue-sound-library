<script setup>
  import {  ref } from 'vue';
    const Popup =ref(false);
const props = defineProps({
  menuName: {
    type: String,
    default:"Арканзас",
  },
  menuDescription: {
    type: String,
    default:"Состав: рваная свинина, помидоры, сыр, лук красный маринованный, лук фри, перец халапеньо, чесночное масло, соус чипотле, дрожжевое тесто.",
  },
  imageSrc: {
    type: String,
    default:"/images/menu-item/Archcansas.png"
  },
  SpicyimageSrc: {
    type: String,
    default:""
  },
  overImage: {
    type: String,
    default:""
  },
  menuWeight: {
    type: String,
    default:"(В 100 гр.: 290 кКал/1214 кДж)",
  },
});
</script>


<template>
    <div class="menu__item">
      <div class="menu__text-img">
        <div class="menu__item-img-container img-container">
            <img class="menu__over-img" :src="overImage">
            <img @click="Popup = !Popup" class="menu__item-img" :src="imageSrc">
        </div>
        <div class="menu__item-description-container">
            <div class="menu__item-name">{{menuName}}
              <img :src="SpicyimageSrc">
            </div>
            <div class="menu__item-description">{{ menuDescription}}</div>
            <div class="menu__item-description">{{ menuWeight}}</div>
        </div>
        </div>
        <slot class="menu__option"></slot>
    </div>
    <Transition name="v-faid">   
        <div v-show="Popup" class="menu-popup-overlay"  @mousedown="Popup=!Popup">

          <div v-show="Popup" class="menu-popup" @mousedown="Popup=!Popup">
              <div class="menu-popup" @mousedown.stop>

                <span class="menu-close-button" @click="Popup = !Popup">&times;</span>
                <div class="menu__item-img-container">
                    <img class="menu__poup-item-img" :src="imageSrc">
                </div>
                <div class="menu__item-description-container">
                    <div class="menu__item-name-popup">{{menuName}}
                      <img :src="SpicyimageSrc">
                    </div>
                    <div class="menu__item-description">
                      {{ menuDescription}}<br>
                      {{ menuWeight}}
                      </div>
                    <slot name="additional-info"></slot>
                    <img src="/images/menu-item/Group 3611 (1).svg">
                </div>
              </div>
          </div>
        </div>
    </Transition>
</template>

<style lang="scss" scoped>
@import './style.scss';
</style>