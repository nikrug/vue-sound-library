<template>
    <div class="office">
        <div class="office__page">
            <div class="office__label-block">
                <div class="office__label">Личный кабинет</div>
            </div>
            <div class="office__list">
                <div class="office__list-form">
                    <form @submit.prevent="handleSubmit">
                        <div class="office__list-label">Личные данные</div>
                        <inputText
                            v-model="email"
                            inputPlaceholder="Введите адрес электронной почты"
                            inputTextLabel="Ваша электронная почта"
                            :class="{ 'input-error': emailError }"
                        ></inputText>
                        <div v-if="emailError" class="error-message">{{ emailError }}</div>
                        
                        <inputText
                            v-model="phone"
                            inputPlaceholder="Введите номер телефона"
                            inputTextLabel="Ваш телефон"
                            :class="{ 'input-error': phoneError }"
                        ></inputText>
                        <div v-if="phoneError" class="error-message">{{ phoneError }}</div>
                        
                        <div class="office__new-password-label" @click="newPassword = !newPassword">
                            {{ newPassword ? 'Хочу оставить старый пароль' : 'Сменить пароль' }}
                            <img 
                                src="/images/office/rightArrow.svg" 
                                :class="{ 'rotated': newPassword }"
                            />
                        </div>
                        <div class="office__new-password" v-show="newPassword">
                            <inputText
                                v-model="newPasswordValue"
                                inputType="password"
                                inputPlaceholder="Введите новый пароль"
                                inputTextLabel="Новый пароль"
                                PasswordButton="show-button"
                                :class="{ 'input-error': newPasswordError }"
                            ></inputText>
                            <div v-if="newPasswordError" class="error-message">{{ newPasswordError }}</div>

                            <inputText
                                v-model="repeatPassword"
                                inputType="password"
                                inputPlaceholder="Повторите пароль"
                                inputTextLabel="Повторите пароль"
                                PasswordButton="show-button"
                                :class="{ 'input-error': newPasswordError }"
                            ></inputText>
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
import addressWidget from "@widgets/addressWidget/ui/addressWidget/addressWidget.vue";

const newPassword = ref(false);
const email = ref('');
const phone = ref('');
const newPasswordValue = ref('');
const repeatPassword = ref('');

const emailError = ref('');
const phoneError = ref(''); // Ошибка для поля телефона
const newPasswordError = ref('');

// Вычисляемое свойство для текста кнопки
const buttonText = computed(() => {
    return newPassword.value ? 'Сохранить новый пароль' : 'Сохранить изменения';
});

// Обработчик отправки формы
const handleSubmit = () => {
    validateEmail();
    validatePhone(); // Валидация телефона
    validateNewPassword();

    if (!emailError.value && !phoneError.value && !newPasswordError.value) {
        // Отправьте данные, так как нет ошибок
        console.log('Данные отправлены:', { email: email.value, phone: phone.value, newPassword: newPasswordValue.value });
    }
};

// Валидация электронной почты
const validateEmail = () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    emailError.value = emailPattern.test(email.value) ? '' : 'Введите корректный адрес электронной почты.';
};

// Валидация телефона
const validatePhone = () => {
    const phonePattern = /^\+?[1-9]\d{1,14}$/; // Пример простого регулярного выражения для проверки телефону
    phoneError.value = phonePattern.test(phone.value) ? '' : 'Введите корректный номер телефона.';
};

// Валидация нового пароля
const validateNewPassword = () => {
    if (newPasswordValue.value.length < 6) {
        newPasswordError.value = 'Пароль должен содержать минимум 6 символов.';
    } else if (newPasswordValue.value !== repeatPassword.value) {
        newPasswordError.value = 'Пароли не совпадают.';
    } else {
        newPasswordError.value = '';
    }
};

</script>

<style lang="scss" scoped>
@import './style.scss';


</style>
