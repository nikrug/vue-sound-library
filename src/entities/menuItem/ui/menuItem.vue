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
<script>
import massWeight from '@widgets/massWeighr/ui/massWeight.vue';
</script>
  
<style lang="scss" scoped>
@import './style.scss';

.menu__text-img{
  display: flex;
  flex-direction: row-reverse;
}
.menu__option{
  width: 100%;
  padding:12px;
}
.menu-popup{
  position: fixed;
  display: flex;
  flex-direction: column; /* Лучше использовать column для упорядочивания контента */
  width: 100%;
  height: 100%;
  background-color: white;
  z-index: 30; /* Поверх фона */
    overflow: auto;
}
/* Контейнер для фона */
.menu-popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(1, 53, 11, 0.5); 
  z-index: 10000;
}

.menu-close-button{
position: absolute;
    display: relative;
    border-radius: 120px;
    height: 40px;
    width: 40px;
    z-index: 1;
    display: flex;
    text-align: center;
    top: 20px;
    right: 20px;
    font-size: 40px;
    background-color: #ffffff;
    und-color: #ff0000;
    display: absolute;
    justify-content: center;
    align-content: flex-end;
    flex-wrap: nowrap;
    flex-direction: column;
    cursor:pointer;
}

.menu-close-button:hover{
    background-color: #E17B00;
}

.menu__item-button{
    padding:13px 40px;
    gap:12px;
    border-radius:10px;
    background-color:#FF991F;
    color:white;
    cursor: pointer;
}

.menu__item-button:hover{
    background-color:#E17B00;
}

.menu__button-block{
    display:flex;
    justify-content:space-between;
}

.menu__price{
    font-size:24px;
    font-weight: 700;
}

.img-container {
  position: relative; /* Позволяет позиционировать вложенные элементы относительно этого контейнера */
  display: inline-block; /* Чтобы элементы занимали минимально необходимое пространство */
}


.menu__over-img {
  position: absolute; /* Позволяет наложить изображение поверх другого */
  top: 20px; /* Положение сверху 0 */
  left: 20px; /* Положение слева 0 */
  pointer-events: none; /* Отключает взаимодействие с наложенным изображением, позволяет кликами проходить к нижнему */
}

@media(min-width:#{$br-tablet}px) {
  .menu__text-img{
  display: flex;
  flex-direction: column;
}
  .menu__over-img {
  position: absolute; /* Позволяет наложить изображение поверх другого */
  top: 20px; /* Положение сверху 0 */
  left: 20px; /* Положение слева 0 */
  pointer-events: none; /* Отключает взаимодействие с наложенным изображением, позволяет кликами проходить к нижнему */
}
  .menu-popup{
  position: fixed;
  display: flex;
  flex-direction: row-reverse; /* Лучше использовать column для упорядочивания контента */
  height: 500px;
  width: 720px;
  margin: auto;
  background-color: white;
  z-index: 30; /* Поверх фона */
  top: 50%; /* Центрировать по вертикали */
  left: 50%; /* Центрировать по горизонтали */
  transform: translate(-50%, -50%); /* Центрирует элемент по его середине */
  border-radius:20px
}
}

@media(min-width:#{$br-desktop}px) {
  .menu__text-img{
  display: flex;
  flex-direction: column;
}
.menu-popup{
  position: fixed;
  display: flex;
  flex-direction: row-reverse; /* Лучше использовать column для упорядочивания контента */
  height: 500px;
  width: 840px;
  background-color: white;
  z-index: 30; /* Поверх фона */
  top: 50%; /* Центрировать по вертикали */
  left: 50%; /* Центрировать по горизонтали */
  transform: translate(-50%, -50%); /* Центрирует элемент по его середине */
  border-radius:20px
}
}
</style>