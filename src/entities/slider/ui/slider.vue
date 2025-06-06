<script setup>
const props = defineProps({
  castomerName: {
    type: String,
  },
   castomerPosition: {
    type: String,
  },
   quoteText: {
    type: String,
  },
  imageSrc: {
    type: String,
    default:"/images/experiens/customer_1.svg"
  },
});
</script>

<template>
<div class="experiens__customer">
    <img src="/images/experiens/ri_double-quotes-r.svg" alt="Quote">
    <p class="experiens__customer-card-text">{{quoteText}}</p>
    <img :src="imageSrc" >
    <p class="experiens__customer-card-title-text"> {{castomerName}} </p>
    <p class="experiens__customer-card-subtitle-text">{{castomerPosition}}</p>
</div>


</template>


<style lang="scss" scoped>
@import './style.scss';
@import '/node_modules/nouislider/dist/nouislider.min.css';
</style>
