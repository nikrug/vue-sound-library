<template>
  <q-layout view="lHh Lpr lFf">
    <MainHeaderComponent />
    <q-page-container>
      <div class="notFound">
        <div class="notFound__block">
            <div class="notFound__block-text">
              <div class="notFound__label">404</div>
              <div class="notFound__text-box">
                <div class="notFound__title">Страница не найдена</div>
                <div class="notFound__subtitle">Воспользуйтесь меню, чтобы заказать доставку<br>
                   свежих и вкусных блюд от ПиццеРио</div>
              </div>
              <a href="/">
              <customButton ButtonText="Перейти в меню" ></customButton>
              </a>
            </div>
            <div class="notFound__block-img">
              <img class="notFound__img" src="/images/not-found/notFound.png">
            </div>
        </div>
      </div>
    </q-page-container>
    <MainFooterComponent />
  </q-layout>
</template>
<script setup lang="ts">
import { MainHeaderComponent } from '@widgets/mainHeader';
import { MainFooterComponent } from '@widgets/mainFooter';
import { customButton } from '@shared/ui';
</script>

<style lang="scss">
.notFound{
  background-image: url("/images/menu-item/pattern.png");
  background-color: #198f30;
  padding: 150px 250px 250px ;
  height: 100vh;
}
.notFound__button{
  padding: 12px 36px;   
   transition: background 0.3s ease, color 0.3s ease;
}


.notFound__block{
  max-width: 1300px;
  margin: auto;
  display: flex;
  flex-direction: row;
  gap:5rem;
}

.notFound__block-img{
  margin-top: 50px;
  width: 510px;
  height: 410px;
}

.notFound__block-text{
  text-align: left;
  display: flex;
  flex-direction: column;
  gap:3rem;
}

.notFound__text-box{
  display: flex;
  flex-direction: column;
  gap:1rem;
}

.notFound__label{
  font-size: 48px;
  color: white;
}

.notFound__title{
  font-size: 36px;
  color: white;
}

.notFound__subtitle{
  font-size: 28px;
  color: white;
}
</style>