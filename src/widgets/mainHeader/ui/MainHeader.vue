<template>
  <q-header>
    <q-toolbar class="header ">
          <HeaderLogo/>
      <q-space />
      <q-btn class="visible-line header__nav-text"
        v-for="link in navMenu"
        stretch 
        flat
        :label="link.label"
        :key="link.link"
        :to="link.link"
        
      />
      <Popup customClass="visible"></Popup>
      <HeaderDropDown/>
    </q-toolbar>
  </q-header>

</template>

<script setup lang="ts">
import './style.scss';

import { navMenu } from '../config/navMenu';
import { ref } from 'vue';
import Popup from 'src/widgets/mainHeader/popUp/ui/popup.vue';
import HeaderLogo from 'src/widgets/mainHeader/headerLogo/ui/HeaderLogo.vue';
import HeaderDropDown from 'src/widgets/mainHeader/headerDropdown/ui/headerDropdown.vue'
</script>

<style>
  .visible{
    display: none;
  }
  .visible-line{
    display: none;
  }


  @media (min-width: 1244px) {
    .visible{

    display: inline;

  }
    .visible-line{
    display: flex;
  }

  }
</style>
