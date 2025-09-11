<template>
  <div class="counter" >
    <div class="count-text" v-if="count < 1">
      {{ price }} ₽
    </div>
    
    <div class="count-text" v-if="count > 0" :class="{ 'active-text': count > 0 }"  >
      {{ total }} ₽
    </div>
    
    <button class="basket-button" v-if="count < 1" @click="increment">в корзину</button>
    
    <div class="buttons" v-if="count > 0" :class="{ 'buttons-active': count > 0 }">
      <button class="count-button" v-if="count > 0" @click="decrement">-</button>
      
      <div class="count-text" v-if="count > 0">{{ count }}</div>
      
      <button class="count-button" v-if="count > 0" @click="increment">+</button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, defineProps } from 'vue';

const props = defineProps({
  price: {
    type: Number,
    default: 0,
  },
});

const count = ref(0);
const total = computed(() => count.value * props.price);

const increment = () => {
  count.value++;
};

const decrement = () => {
  if (count.value > 0) {
    count.value--;
  }
};
</script>

<style lang="scss">
@import "./style";
</style>
