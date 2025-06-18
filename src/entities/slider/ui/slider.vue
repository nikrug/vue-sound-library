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
    <img  src="/images/experiens/ri_double-quotes-r.svg" alt="Quote">
    <div class="experiens__customer-card-text">{{quoteText}}</div>
      <img class="experiens__img" :src="imageSrc" >
    <div  class="experiens__text-box">
      <div class="experiens__customer-card-title-text"> {{castomerName}} </div>
      <div class="experiens__customer-card-subtitle-text">{{castomerPosition}}</div>
    </div>
</div>


</template>


<style lang="scss" scoped>
@import './style.scss';
@import '/node_modules/nouislider/dist/nouislider.min.css';

.experiens__text-box{
  display: grid;
  gap: 1px;
}
.experiens__img{
  

}
</style>
