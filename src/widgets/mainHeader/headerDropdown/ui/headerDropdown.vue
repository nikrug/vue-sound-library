<template>
  <div>
    <burger :isOpen="isOpen" @toggle="toggleDropdown" />
    <div class="dropdown" :class="{ show: isOpen }">
            <ul class="dropdown-list">
                <a href="/">Home </a>
                <a href="/">About</a>
                <a href="/">Services</a>
                <a href="/">Projects</a>
                <Popup></Popup>
            </ul>
          </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import Popup from 'src/widgets/mainHeader/popUp/ui/popup.vue';
import burger from 'src/widgets/mainHeader/burger/ui/burger.vue';

export default defineComponent({
  components: {
    Popup,
    burger,
  },
  setup() {
    const isOpen = ref(false);

    const toggleDropdown = () => {
      isOpen.value = !isOpen.value;
    };

    return {
      isOpen,
      toggleDropdown,
    };
  },
});
</script>

<style lang="scss" scoped>
@import './style.scss';
</style>
