<template>
  <div>
    <burger :isOpen="isOpen" @toggle="toggleDropdown" />
    <div class="dropdown" :class="{ show: isOpen }">
      <ul class="dropdown-list">
      <q-btn class="dropdown-link"
        v-for="link in navMenu"
        stretch 
        flat
        :label="link.label"
        :key="link.link"
        :to="link.link"
        
      />
      <Popup></Popup>
      </ul>
      <div class="dropdown-footer">
        <div class="dropdown__footer-label">+7 3822 99 02 55</div>
        <div class="dropdown__footer-text">
          Бесплатная доставка<br>
          по Томску от 400 ₽
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Popup from 'src/widgets/mainHeader/popUp/ui/popup.vue';
import burger from 'src/widgets/mainHeader/burger/ui/burger.vue';
import { navMenu } from 'src/widgets/mainHeader/config/navMenu';
const isOpen = ref(false);

const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};
</script>

<style lang="scss" scoped>
@import './style.scss';


.dropdown-footer {
  display: flex;
  flex-direction: row;
  padding: 1rem;
  justify-content: space-between;
}

.dropdown__footer-label {
  color: orange;
  font-size: 18px;
}
.q-btn{
  text-align: left;
  align-items: left;
}
.text-center {
    text-align: left !important;
}
span{
  text-align: left;
}
.dropdown-link{
  color: black;
  font-size: large;
  text-align: left;
}
.dropdown__footer-text {
  color: black;
}
</style>
