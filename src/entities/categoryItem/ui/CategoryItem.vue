<script setup>
const props = defineProps({
  categoryName: {
    type: String,
  },
  imageSrc: {
    type: String,
    default:"/images/services/ellipse-blue.svg"
  },
});
</script>


<template>

<a href="/project">
    <div class="categoryes__item">
        <img class="categoryes__img" :src="imageSrc">
        <div class="categoryes__img-text">{{categoryName}}</div>
    </div>
</a>

</template>

  
<style lang="scss" scoped>
@import './style.scss';
</style>