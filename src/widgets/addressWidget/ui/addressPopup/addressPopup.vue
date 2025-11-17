<template>
  <div class="popup-overlay">
    <div class="popup">
      <div class="popup-header">
        <div class="popup-title">Добавить адрес</div>
        <button class="popup-close">
          <img @click="$emit('close')" src="images/office/delete (1).svg"></img>
        </button>
      </div>
      <div class="popup-input">
      <inputText 
        v-model="newAddress.title"
        inputTextLabel="Введите название"
        inputPlaceholder="Домой, На работу" 
      />
      <inputText 
        v-model="newAddress.street"
        inputTextLabel="Улица"
        inputPlaceholder="Название улицы" 
      />
      <div class="row-input">
      <inputText 
        v-model="newAddress.building"
        inputTextLabel="Дом"
        inputPlaceholder="Дом" 
      />
      <inputText 
        v-model="newAddress.apartment"
        inputTextLabel="Кв/Офис"
        inputPlaceholder="Кв/Офис" 
      />
      </div>
      <div class="row-input">
      <inputText 
        v-model="newAddress.entrance"
        inputTextLabel="Подъезд"
        inputPlaceholder="Подъезд" 
      />
      <inputText 
        v-model="newAddress.floor"
        inputTextLabel="Этаж"
        inputPlaceholder="Этаж" 
      />
      <inputText 
        v-model="newAddress.apartment2"
        inputTextLabel="Домофон"
        inputPlaceholder="Домофон" 
        inputSubtext="необязательно"
      />
      </div>
      </div>
      <CustomButton @click="addAddress" ButtonText="Сохранить адрес" ></CustomButton>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import inputText from '@shared/ui/inputText/inputText.vue';
import CustomButton from '@shared/ui/customButton/customButton.vue';

export default defineComponent({
  name: 'AddressPopup',
  emits: ['close', 'add'],
  components: {
    inputText,
    CustomButton
  },
  setup(_, { emit }) {
    const newAddress = ref({
      title: '',
      street: '',
      building: '',
      apartment: '',
      entrance: '',
      floor:'',
      apartment2:'',
    });

    const addAddress = () => {
      // Проверяем, заполнены ли обязательные поля
      if (newAddress.value.title || newAddress.value.street || newAddress.value.building) {
        emit('add', { ...newAddress.value }); // Отправляем новый адрес в родительский компонент
        newAddress.value = { title: '', street: '', building: '', apartment: '', entrance: '',floor:'',apartment2:'' }; // Сбрасываем поля
      }
    };

    return {
      newAddress,
      addAddress
    };
  }
});
</script>

<style lang="scss">
@import './style.scss';

</style>
