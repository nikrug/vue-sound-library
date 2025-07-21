<template>
<div class="header__search">
    <div class="header__title-text">Free download sound effects without copyright</div>
    <div class="header__title-text-gray">Download free copyright sound effect for your YouTube video and any use.</div>
    <div class="header__search-line search">
        <form class="search__input">
            <div class="input-container">
                <svg class="input-icon" width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <path fill-rule="evenodd" clip-rule="evenodd" d="M11.435 3.84316C13.3877 5.79578 13.3877 8.9616 11.435 10.9142C9.48241 12.8668 6.31658 12.8668 4.36396 10.9142C2.41134 8.96161 2.41134 5.79578 4.36396 3.84316C6.31658 1.89054 9.48241 1.89054 11.435 3.84316ZM13.5062 11.5712C15.5618 8.82938 15.3428 4.92254 12.8492 2.42895C10.1156 -0.304725 5.68342 -0.304725 2.94975 2.42895C0.216077 5.16262 0.216077 9.59477 2.94975 12.3284C5.44334 14.822 9.35019 15.041 12.092 12.9854L15.6777 16.5711C16.0682 16.9616 16.7014 16.9616 17.0919 16.5711C17.4824 16.1806 17.4824 15.5474 17.0919 15.1569L13.5062 11.5712Z" fill="#4F5261"/>
                </svg>
                <input type="text" name="search" placeholder="Search sound effects" class="search-input">
            </div>
        </form>
        <div class="header__search-text">Try keyword: happy, funny, natural, horror, jumpscare and more</div>
    </div>


    <div class="header__bottom-text">
        650.654 Available Sounds. Library Updated Weekly.
        <a class="header__bottom-text" href="">See popular sounds</a>
    </div>
</div>
    <MenuItem menuName="Пепперони" 
    menuDescription="Состав: колбаса пепперони, огурцы маринованные, сыр, перец халапеньо, томатный соус, дрожжевое тесто.(В 100 гр.: 330 ккал/1382 кДж)" 
    imageSrc="/images/menu-item/Peperoni.jpg">
    </MenuItem>

    <MenuItem menuName="Дженнифер" 
    menuDescription="Состав: копченая курица, творожный сыр, кабачки, грибы свежие, помидоры, сыр, соус сырный, соус пикантный, дрожжевое тесто.
    (В 100 гр: 244 Ккал/1020 кДж)" 
    imageSrc="/images/menu-item/Jeniffer.jpg">
    </MenuItem>

    <MenuItem menuName="Мичиган" menuDescription="Состав: маринованная говядина, грибы свежие, копченая индейка, помидоры,сыр, соус тар-тар, дрожжевое тесто.
    (В 100 гр.: 314 ккал/1314 кДж)" imageSrc="/images/menu-item/Michigan.png"></MenuItem>

    <MenuItem menuName="Джорджия" menuDescription="Состав: кальмары, помидоры, сыр, оливки, соус бешамель с пастой из морепродуктов, соус унаги, дрожжевое тесто.
    (В 100 гр.: 238 ккал/997 кДж)" imageSrc="/images/menu-item/Jorjia.jpg"></MenuItem>

    <MenuItem menuName="Манхетен" menuDescription="Состав: колбаса, грибы свежие, помидоры, маслины, сыр, соус томатный, дрожжевое тесто.
    (В 100 гр.: 304 ккал/1270 кДж)" imageSrc="/images/menu-item/Manhattan.jpg"></MenuItem>

    <MenuItem></MenuItem>
</template>

<script setup lang="ts">
    import MenuItem from "@entities/menuItem/ui/menuItem.vue";
</script>

<style lang="scss" scoped>
@import './style.scss';
.input-container {
    position: relative;
}

.input-icon {
    position: absolute;
    left: 20px; /* Положение изображения внутри контейнера */
    top: 50%; /* Центрирование по вертикали */
    transform: translateY(-50%); /* Вертикальное центрирование */
    width: 20px; /* Ширина изображения */
    height: 20px; /* Высота изображения, если необходимо */
}

.search-input {
    padding-left: 40px; /* Увеличьте левый отступ, чтобы оставить место для изображения */
    border: 1px solid #ccc; /* Основные стили ввода */
    border-radius: 4px; /* Скругление углов */
    height: 36px; /* Высота, при необходимости */
    width: 100%; /* Ширина ввода */
}
</style>