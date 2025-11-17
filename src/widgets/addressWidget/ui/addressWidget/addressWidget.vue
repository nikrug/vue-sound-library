<template>
  <div class="address-widget">
    
    <div class="address-header">
        <div class="address-title-text">Адреса доставки</div>
        <button class="add-button" @click="showPopup = true" :disabled="addresses.length >= 4">
          Добавить адрес
          <div class="icon_normal-popup"></div>
          <div class="icon_hover-popup"></div>

        </button>
    </div>
    <AddressPopup v-if="showPopup" @close="closePopup" @add="handleAddAddress" />
    <div class="address-block">
      <!-- Карточка для заполненного адреса -->
      <div v-for="(address, index) in addresses" :key="index" class="address-item">
        <div class="address-title">{{ address.title || 'Название' }}</div>
        <div class="address-info">
            <div class="address-info">{{ address.street || 'Адрес' }},
              {{ address.building || 'Номер дома' }},
              {{ address.apartment || 'Квартира' }},
              {{ address.floor}}Этаж,
              {{ address.entrance}}Подъезд,
              {{ address.apartment2  }}Домофон
            </div>

        </div>
        <button class="delete-button" @click="removeAddress(index)"></button>
      </div>
      
      <!-- Пустая карточка, если адресов меньше 4 -->
      <div v-if="addresses.length < 4" class="empty-address-item" >
        <div>Ваш адрес</div>
      </div>
      <!-- Пустая карточка, если адресов меньше 3 -->
        <div v-if="addresses.length < 3" class="empty-address-item" >
        <div>Ваш адрес</div>
      </div>
      <!-- Пустая карточка, если адресов меньше 2 -->
      <div v-if="addresses.length < 2" class="empty-address-item" >
        <div>Ваш адрес</div>
      </div>
      <div v-if="addresses.length === 0" class="empty-address-item" >
        <div>Ваш адрес</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import AddressPopup from '@widgets/addressWidget/ui/addressPopup/addressPopup.vue';
import CustomButton from '@shared/ui/customButton/customButton.vue';

interface Address {
  title: string;
  street: string;
  building: string;
  apartment: string;
  floor: string;
  entrance: string;
  apartment2: string;
}

export default defineComponent({
  name: 'AddressWidget',
  components: {
    AddressPopup,
    CustomButton
  },
  setup() {
    const addresses = ref<Address[]>([]);
    const showPopup = ref(false);

    // Функция для загрузки адресов из localStorage
    const loadAddresses = () => {
      const storedAddresses = localStorage.getItem('addresses');
      if (storedAddresses) {
        addresses.value = JSON.parse(storedAddresses);
      }
    };

    // Функция для сохранения адресов в localStorage
    const saveAddresses = () => {
      localStorage.setItem('addresses', JSON.stringify(addresses.value));
    };

    const handleAddAddress = (newAddress: Address) => {
      if (addresses.value.length < 4) {
        addresses.value.push(newAddress);
        saveAddresses(); // Сохраняем адреса при добавлении
      }
      showPopup.value = false;
    };

    const closePopup = () => {
      showPopup.value = false;
    };

    const removeAddress = (index: number) => {
      addresses.value.splice(index, 1);
      saveAddresses(); // Сохраняем адреса при удалении
    };

    // Загружаем адреса при монтировании компонента
    onMounted(() => {
      loadAddresses();
    });

    return {
      addresses,
      showPopup,
      handleAddAddress,
      closePopup,
      removeAddress
    };
  }
});
</script>



<style lang="scss">
@import './style.scss';
</style>

