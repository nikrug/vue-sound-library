<template>
    <div class="office">
        <div class="office__page">
        <div class="office__label-block">
                <div class="office__label">Личный кабинет</div>
        </div>
        <div class="office__list">
                <div class="office__list-form">
                    <form>
                        <div class="office__list-label">Личные данные</div>
                        <inputText inputPlaceholder="Введите адрес электронной почты" inputTextLabel="Ваша электронная почта"></inputText>
                        <inputText inputPlaceholder="Введите номер телефона" inputTextLabel="Ваш телефон"></inputText>
                        <div class="office__new-password-label" @click="newPassword=!newPassword">хочу оставить старый пароль</div>
                        <div class="office__new-password" v-show="newPassword">
                            <inputText inputType="password" inputPlaceholder="Введите новый пароль" inputTextLabel="Новый пароль" PasswordButton="show-button"></inputText>
                            <inputText inputType="password" inputPlaceholder="Повторно введите новый пароль" inputTextLabel="Повторите пароль" PasswordButton="show-button"></inputText>
                        </div>
                        <customButton ButtonText="Зарегистрироваться"></customButton>
                    </form>
                </div>
                <div class="office__list-addres">
                   
                </div>
        </div> 
    </div>
    </div>
</template>

<script setup lang="ts">
 import { customButton } from '@shared/ui';
 import { inputText } from '@shared/ui';
 import { inputCheckbox } from '@shared/ui';
 import {  ref } from 'vue';
 const newPassword = ref(false);
</script>

<style lang="scss" scoped>
@import './style.scss';
.imggg{
    height: 10px;
    width: 10px;
}
</style>

