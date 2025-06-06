<template>
    <div class="categoryes">

            <div class="categoryes__title-text"> Browse by category</div>

                <div class="categoryes__img-box">
                    <CategoryItem categoryName="Musical" imageSrc="/images/brouse-by-category/brouse_by_category_13.png"/>
                    <CategoryItem categoryName="Industrial" imageSrc="/images/brouse-by-category/brouse_by_category_12.png" />
                    <CategoryItem categoryName="Movie sounds" imageSrc="/images/brouse-by-category/brouse_by_category_11.png"/>
                    <CategoryItem categoryName="Animal" imageSrc="/images/brouse-by-category/brouse_by_category_10.png" />
                    <CategoryItem categoryName="People" imageSrc="/images/brouse-by-category/brouse_by_category_9.png"/>
                    <CategoryItem categoryName="Vehicles" imageSrc="/images/brouse-by-category/brouse_by_category_2.png" />
                    <CategoryItem categoryName="Sound designs" imageSrc="/images/brouse-by-category/brouse_by_category_8.png"/>
                    <CategoryItem categoryName="Emergency" imageSrc="/images/brouse-by-category/brouse_by_category_7.png" />
                    <CategoryItem categoryName="Bell" imageSrc="/images/brouse-by-category/brouse_by_category_6.png"/>
                    <CategoryItem categoryName="Nature" imageSrc="/images/brouse-by-category/brouse_by_category_5.png" />
                    <CategoryItem categoryName="Cartoon" imageSrc="/images/brouse-by-category/brouse_by_category_4.png"/>
                    <CategoryItem categoryName="Horror" imageSrc="/images/brouse-by-category/brouse_by_category_3.png"/>
                </div>
    

    </div>

</template>

  
<style lang="scss" scoped>
@import './style.scss';
</style>


<script setup lang="ts">
import CategoryItem from "@entities/categoryItem/ui/CategoryItem.vue";


</script>

