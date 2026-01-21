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
                <CartTestt></CartTestt>
            </div> 
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';

import { customButton } from '@shared/ui';
import { inputText } from '@shared/ui';
import addressWidget from '@widgets/addressWidget/ui/addressWidget/addressWidget.vue';

interface User {
    email: string;
    phone?: string; // Поле phone может быть не обязательным
    // Добавьте другие поля, если нужно
}

const newPassword = ref(false);
const email = ref('');
const phone = ref('');
const newPasswordValue = ref('');
const repeatPassword = ref('');

const emailError = ref('');
const phoneError = ref('');
const newPasswordError = ref('');
const users = ref<User[]>([]); // Указываем, что это массив объектов типа User

const buttonText = computed(() => {
    return newPassword.value ? 'Сохранить новый пароль' : 'Сохранить изменения';
});

// Загружаем пользователей из db.json
const fetchUsers = async () => {
    try {
        const response = await fetch('http://localhost:3000/users'); // Укажите путь к вашему db.json
        if (!response.ok) {
            throw new Error('Ошибка загрузки данных');
        }
        const data = await response.json();
        users.value = data.users; // Предполагая, что ваши данные находятся в поле "users"
    } catch (error) {
        console.error(error);
    }
};



const handleSubmit = async () => {
    validateEmail();
    validatePhone();
    validateNewPassword();

    if (!emailError.value && !phoneError.value && !newPasswordError.value) {
        if (newPassword.value) {
            // If a new password is being set, make a request to update it.
            try {
                const response = await fetch('http://localhost:3000/users', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        email: email.value,
                        newPassword: newPasswordValue.value,
                    }),
                });
                
                if (!response.ok) {
                    throw new Error('Ошибка при смене пароля');
                }
                
                const result = await response.json();
                console.log('Пароль успешно изменен:', result);
                // Optionally, clear the password fields
                newPasswordValue.value = '';
                repeatPassword.value = '';
                newPassword.value = false; // Reset the password change toggle
            } catch (error) {
                 console.error(error); // Log the error
            }
        } else {
            // Handle case where only email and phone updates are needed
            console.log('Данные отправлены:', { email: email.value, phone: phone.value });
        }
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

// Lifecycle hook for mounting the component
onMounted(() => {
    fetchUsers(); // Загружаем пользователей при монтировании компонента
});
</script>



<style lang="scss" scoped>
@import './style.scss';


</style>
