<template>
  <q-toolbar class="header">
          <HeaderLogo/>
      <q-space />
      <q-btn v-show="menuItems" class="visible-line-tablet header__nav-text" stretch flat label="Меню" key="Меню" link="/" to="/"/>
      <q-btn v-show="menuItems" class="visible-line-tablet header__nav-text" stretch flat label="Доставка" key="Доставка" link="/delivery" to="/delivery"/>
      <q-btn  class="visible-line header__nav-text" stretch flat label="Акции" key="Акции" link="/stock" to="/stock"/>
      <q-btn class="visible-line header__nav-text" stretch flat label="О компании" key="О компании" link="/about" to="/about"/>
      <q-btn class="visible-line header__nav-text" stretch flat label="Карьера" key="Карьера" link="/career" to="/career"/>
      <q-btn class="visible-line header__nav-text" stretch flat label="Контакты" key="Контакты" link="/contacts" to="/contacts"/>
      <q-btn v-show="menuItems" class="visible-line-tablet header__nav-text" stretch flat label="Отследить заказ" key="Отследить заказ" link="/notFound" to="/notFound"/>
      <Popup customClass="visible"></Popup>
      <q-space />

      <div class="header__info-text-block visible">
        <div class="header__orange-text">+7 3822 99 02 55</div>
        <div class="header__text">Бесплатная доставка <br>
          по Томску от 400 ₽</div>
      </div>
      <HeaderDropDown/>
    </q-toolbar>
    <ScrollDownmenu></ScrollDownmenu>
</template>

<script setup lang="ts">
import './style.scss';

import { navMenu } from '../config/navMenu';
import { ref } from 'vue';
import Popup from 'src/widgets/mainHeader/popUp/ui/popup.vue';
import HeaderLogo from 'src/widgets/mainHeader/headerLogo/ui/HeaderLogo.vue';
import HeaderDropDown from 'src/widgets/mainHeader/headerDropdown/ui/headerDropdown.vue'
import ScrollDownmenu from 'src/widgets/mainHeader/scrollDownmenu/ui/scrollDownmenu.vue'
import menuItems from 'src/widgets/mainHeader/headerDropdown/ui/headerDropdown.vue';
</script>

<style>
.q-btn{
  font-size:12px;
}
.display-none{
  display: none;
}
  .visible{
    display: none;
  }
  .visible-line{
    display: none;
  }
.visible-line-tablet{
  display: none;
}
  .header__orange-text{
    color:#FF991F;
    font-size:18px;
    white-space: nowrap;
    font-weight: 700;
  }

  .header__text{
    color:black;
    font-size:12px;
  }

  .header__info-text-block{
    text-align: end;
  }
  @media (min-width: 768px) {
    .visible-line-tablet{
    display: flex;
    }

  }
  @media (min-width: 1244px) {
    .visible{

    display: inline;

  }
  .visible-line-tablet{
  display: flex;
}
    .visible-line{
    display: flex;
  }

  }
</style>
