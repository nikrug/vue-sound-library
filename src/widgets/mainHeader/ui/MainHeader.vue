<template>
  <q-header>
    <q-toolbar class="header ">
          <HeaderLogo/>
      <q-space />
      <q-btn class="visible-line"
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
import Popup from 'src/widgets/mainHeader/popUp/popup/popup.vue';
import HeaderLogo from 'src/widgets/mainHeader/headerLogo/ui/HeaderLogo.vue';
import HeaderDropDown from 'src/widgets/mainHeader/headerDropdown/ui/headerDropdown.vue'
const posts = ref([
  /* ... */
])

const postFontSize = ref(1)
// Определяем реактивную ссылку для попапа
const submit =ref(0);
const popup = ref<InstanceType<typeof Popup> | null>(null);
const awesome =ref(false);
function warn(message: any, event: { preventDefault: () => void; }) {
  // теперь есть доступ к нативному событию
  if (event) {
    event.preventDefault()
  }
  alert(message)
}
const ok =ref(true);



</script>

<style>
  .visible{
    display: none;
  }
  .visible-line{
    display: none;
  }


  @media (min-width: 1288px) {
    .visible{

    display: inline;

  }
    .visible-line{
    display: flex;
  }

  }
</style>
