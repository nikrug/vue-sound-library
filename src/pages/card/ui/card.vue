<template>
    <div class="card">
        <div class="card__list">
        <div class="card__label">Корзина</div>
            <div class="card__content">
                <Card :cartItems="cartItems" :onRemoveItem="removeFromCart" />
                <form>
                    <div class="card__adres">
                        <div class="popup__choose-block">
                            <span class="popup__text" :class="{'active':  delivery}" @click="yourown = false,  delivery = true">
                                Вход
                            </span>
                            <span class="popup__text" :class="{'active': yourown}"  @click="yourown = true,  delivery = false">
                                Регистрация
                            </span>
                        </div>
                        <div class="card__adres-delivery"v-show="delivery">
                        <inputText inputPlaceholder="+7 (923)-640-12-98" inputTextLabel="Введите номер телефона"></inputText>
                        <inputText inputPlaceholder="Ваши адреса" inputTextLabel="Адрес доставки"></inputText>
                        <inputText inputPlaceholder="Улица" inputTextLabel="Улица"></inputText>
                        <div class="card__adres-street">
                            <inputText inputPlaceholder="Дом" inputTextLabel="Дом" inputLabel="input-label-small"></inputText>
                            <inputText inputPlaceholder="Кв/Офис" inputTextLabel="Кв/Офис" inputLabel="input-label-small"></inputText>
                        </div>
                        <div class="card__adres-house">
                            <inputText inputPlaceholder="Подъезд" inputTextLabel="Подъезд" inputLabel="input-label-small"></inputText>
                            <inputText inputPlaceholder="Этаж" inputTextLabel="Этаж" inputLabel="input-label-small"></inputText>
                            <inputText inputPlaceholder="Домофон" inputTextLabel="Домофон" inputSubtext="необязательно" inputLabel="input-label-small"></inputText>
                        </div> 
                            <div class="card__radioButtons">
                                <div class="card__label-small">Способ оплаты</div>
                                <inputRadiobutton  v-model="selectedOption" value="option1"  label="Оплата пластиковой картой в зале" sublabel=""/>
                                <inputRadiobutton  v-model="selectedOption" value="option2"  label="Оплата наличными в зале" sublabel=""/>
                                <inputRadiobutton  v-model="selectedOption" value="option3"  label="Оплата на сайте" sublabel="Скидки по акциям Доставки неактивны при оплате на сайте"/>
                            </div>
                            <div class="card__comment">
                                <div class="card__comment-textblock">
                                    <div class="card__comment-label">Комментарии к заказу</div>
                                    <div class="card__comment-sublabel">необязательно</div>
                                </div>
                                <inputTextarea></inputTextarea>
                            </div>
                            <inputCheckbox inputCheckboxLabel="Я согласен на обработку персональных данных"></inputCheckbox>
                            <customButton ButtonText="Отправить заказ - ">
                            
                            </customButton>
                        </div>
                        <div class="card__adres-delivery"v-show="yourown">
                        <inputText inputPlaceholder="+7 (923)-640-12-98" inputTextLabel="Введите номер телефона"></inputText>
                            <div class="card__radioButtons">
                                <div class="card__label-small">Адрес самовывоза</div>
                                <inputRadiobutton  v-model="selectedOption" value="option4"  label="Оплата пластиковой картой в зале" sublabel=""/>
                                <inputRadiobutton  v-model="selectedOption" value="option5"  label="Оплата наличными в зале" sublabel=""/>
                                <inputRadiobutton  v-model="selectedOption" value="option6"  label="Оплата на сайте" sublabel="Скидки по акциям Доставки неактивны при оплате на сайте"/>
                            </div>
                            <div class="card__radioButtons">
                                <div class="card__label-small">Способ оплаты</div>
                                <inputRadiobutton  v-model="selectedOption" value="option7"  label="Оплата пластиковой картой в зале" sublabel=""/>
                                <inputRadiobutton  v-model="selectedOption" value="option8"  label="Оплата наличными в зале" sublabel=""/>
                                <inputRadiobutton  v-model="selectedOption" value="option9"  label="Оплата на сайте" sublabel="Скидки по акциям Доставки неактивны при оплате на сайте"/>
                            </div>
                            <div class="card__comment">
                                <div class="card__comment-textblock">
                                    <div class="card__comment-label">Комментарии к заказу</div>
                                    <div class="card__comment-sublabel">необязательно</div>
                                </div>
                                 <inputTextarea></inputTextarea>
                            </div>
                            <inputCheckbox inputCheckboxLabel="Я согласен на обработку персональных данных"></inputCheckbox>
                            <customButton ButtonText="Отправить заказ - ">
                            
                            </customButton>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import './style.scss';
</style>

<script setup lang="ts">
import { ref } from "vue";
import { inputText,inputRadiobutton,inputCheckbox,customButton,inputTextarea} from '@shared/ui';
import Card from '@widgets/Card/card.vue';
const delivery = ref(true);
const yourown = ref(false);
const selectedOption = ref<string>('option1'); // Значение по умолчанию

const cartItems = ref<{ id: number, name: string, price: number, quantity: number,imagesrc:string, }[]>([]);

// Функция удаления элемента из корзины
const removeFromCart = (id: number) => {
  const index = cartItems.value.findIndex(item => item.id === id);
  if (index !== -1) {
    cartItems.value.splice(index, 1); // Удаляем элемент из массива
  }
};
</script>