<template>

    <img class="filter__button " @click="filter = !filter" src="/images/music-img/filter_mobile.svg" alt="Filter button mobile">
                
    <img class="filter__button-tablet "  @click="filter = !filter" src="/images/music-img/filter_tablet.svg" alt="Filter button tablet">
                
    <img class="filter__button-desktop "  @click="filter = !filter" src="/images/music-img/filter_desctop.svg" alt="Filter button desktop">

    <Transition name="v-faid">
      <div v-show="filter" class="music-player__filter filter"> <!-- Change v-if to v-show -->
          <p class="fiter__title-text"> Filter</p>
          <div class="filter__close" @click="filter = !filter"> 
                          <button >
                              <img class="pointer" src="/images/music-img/close.svg">
                          </button>
          </div>
          <p class="fiter__text">Duration</p>
          <SwiperSlider></SwiperSlider>
          <select class="filter__all-category-button fiter__category-text">
              <option >All categories</option>
              <option >z,z,z</option>
              <option >z,z,z</option>
          </select>
          <div class="music__input">
            <input class="music-player__input" type="checkbox" name="subscribe">
            <div class="filter__text">Only free sounds</div>
          </div>
          <div class="music__input">
              <input class="music-player__input" type="checkbox" name="favorite">
                <div class="filter__text">Only my favorite sounds</div>
          </div>
          <button class="filter__apply-button">Apply</button>
          
      </div>
    </Transition>
</template>
  
<style lang="scss" scoped>

@import './style.scss';
</style>

<script setup lang="ts">
import SwiperSlider from '@entities/swiper-slider/ui/SwiperSlider.vue';
import {ref} from 'vue';
const filter = ref(false);
</script>