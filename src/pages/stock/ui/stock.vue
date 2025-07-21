<template>
    <div class="stock">
        <div class="stock__page">
        <div class="stock__label">Акции</div>
        <div class="stock-list">
            <StockCard>
                    <div class="stock__item-label-green">в зале</div>
                    <div class="stock__item-label-green">только навынос</div>
            </StockCard>
            <StockCard>
                    <div class="stock__item-label">доставка</div>
                    <div class="stock__item-label">только навынос</div>
            </StockCard>
            <StockCard>
                    <div class="stock__item-label-green">в зале</div>
                    <div class="stock__item-label-green">при заказе в одном чеке</div>
            </StockCard>
            <StockCard>
                    <div class="stock__item-label">доставка</div>
                    <div class="stock__item-label">розыгрыш</div>
            </StockCard>
            <StockCard>
                    <div class="stock__item-label-green">в зале</div>
                    <div class="stock__item-label-green">только навынос</div>
            </StockCard>
            <StockCard>
                    <div class="stock__item-label">доставка</div>
                    <div class="stock__item-label">оплата наличными</div>
            </StockCard>
            <StockCard>
                    <div class="stock__item-label">доставка</div>
                    <div class="stock__item-label">только в будние дни</div>
                    <div class="stock__item-label">оплата наличными</div>
            </StockCard>
            <StockCard>
                    <div class="stock__item-label">доставка</div>
            </StockCard>
        </div> 
    </div>
    </div>
</template>

<script setup lang="ts">
import StockCard from  '@entities/stockCard/ui/stockCard.vue';


</script>

<style lang="scss" scoped>
@import './style.scss';

.stock__page{
    max-width: 1300px;
    margin: auto;
}

.stock__item-label{
    display:flex;
    flex-direction:row;
    padding:5px;
    background-color:#FBE7CE;
    color:#FF991F;
    border-radius:10px;
}

.stock__item-label-green{
    display:flex;
    flex-direction:row;
    padding:5px;
    background-color:#CDE5D2;
    color:#009B3D;
    border-radius:10px;
}

.stock__label{
    font-size:48px;
    color:white
}

</style>

