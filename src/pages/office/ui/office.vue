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
                        <div class="office__new-password-label" @click="newPassword = !newPassword">
                            {{ newPassword ? 'Хочу оставить старый пароль' : 'Сменить пароль' }}
                            <img 
                                src="/images/office/rightArrow.svg" 
                                :class="{ 'rotated': newPassword }"
                            />
                        </div>
                        <div class="office__new-password" v-show="newPassword">
                            <inputText inputType="password" inputPlaceholder="Введите новый пароль" inputTextLabel="Новый пароль" PasswordButton="show-button"></inputText>
                            <inputText inputType="password" inputPlaceholder="Повторно введите новый пароль" inputTextLabel="Повторите пароль" PasswordButton="show-button"></inputText>
                        </div>
                        <div class="office__buttonn">
                            <customButton :ButtonText="buttonText"></customButton>
                        </div>

                    </form>
                </div>
                <div class="office__list-addres">
                    <addressWidget></addressWidget>
                </div>
            </div> 
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { customButton } from '@shared/ui';
import { inputText } from '@shared/ui';
import { inputCheckbox } from '@shared/ui';
import addressWidget from "@widgets/addressWidget/ui/addressWidget/addressWidget.vue";

const newPassword = ref(false);

// Вычисляемое свойство для текста кнопки
const buttonText = computed(() => {
    return newPassword.value ? 'Сохранить новый пароль' : 'Сохранить изменения';
});


</script>

<style lang="scss" scoped>
@import './style.scss';
.office__buttonn{
display: flex;
        width: 100%;
        flex-direction: column;
        justify-items: left;
        text-align: left;
margin: 1.5rem 0  0;
}

</style>
