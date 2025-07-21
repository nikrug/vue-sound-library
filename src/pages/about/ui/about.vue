<template>
<div class="about">
  <div class="about-list">
    <div class="about__title">О компании</div>
    <div class="about__slider">
        <div class="about__text-block-column">
            <div class="about__label">«ПиццеРио» — вкусные и разнообразные блюда по демократичным ценам!</div>
            <div class="about__text">Нашей кухне присущ интернациональный вкус — именно у нас вы можете попробовать традиционные блюда Северной и Центральной Америки!</div>
        </div>  
        <div class="swiper">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <img class="swiper-img" src="/images/menu-item/Jeniffer.jpg" alt="Пицца 1">
                </div>
                <div class="swiper-slide">
                    <img class="swiper-img" src="/images/menu-item/Jeniffer.jpg" alt="Пицца 2">
                </div>
                <div class="swiper-slide">
                    <img class="swiper-img" src="/images/menu-item/Jeniffer.jpg" alt="Пицца 3">
                </div>
            </div>
            <div class="swiper-button-prev"><</div>
            <div class="swiper-button-next">></div>
            <div class="swiper-pagination"></div>
        </div> <!-- Закрываем about__slider -->
        </div>
    <div class="about__block">
        <div class="about__text-block">
            <div class="about__text-box">
                <div class="about__label-production">О продукции</div>
                <div class="about__text-production">В нашем ресторане продаётся самая лучшая американская пицца! Наша пицца отличается пышным слоем дрожжевого теста и щедрым слоем начинки.<br> В американской пицце тесто — полноценный участник блюда, и при выборе начинки нужно считаться с его вкусом.<br> Обильный слой начинки представлен большим количеством ингредиентов, что придаёт пицце больший вес, делает её насыщенной и позволяет дольше сохранять тепло и вкусовые качества.</div>
            </div>
            <div class="about__text-block-column">
                <div class="about__text-box">
                    <div class="about__label">Мексиканские блюда</div>
                    <div class="about__text">Наши мексиканские закуски не оставят вас равнодушными! Для их приготовления используется традиционная уникальная лепёшка тортилья — мексиканский плоский хлеб. Тортилья в исполнении «ПиццеРио» изготавливается сотрудниками кухни по уникальному рецепту и припекается на тестопрессе при температуре 200 градусов.<br> В древние времена тортилья служила мексиканцам и тарелкой, и ложкой. Но в современном мире — это не главное достоинство мексиканских блюд, гораздо важнее начинка. Благодаря простой и удобной основе (тортилья) мы придумали много оригинальных, невероятно вкусных и разнообразных начинок! Мы уверены, что сможем предложить вам мексиканскую закуску по вкусу!</div>
                </div>
                <div class="about__text-box">
                    <div class="about__label">Наши десерты</div>
                    <div class="about__text">А также «ПиццеРио» славится своими молочными коктейлями! Это действительно одни из самых густых и вкусных коктейлей в городе Томске!<br> Наши десерты собственного производства, которые мы готовим для вас с любовью каждый день в нашей кондитерской.</div>
                </div>
                <div class="about__text-box">
                    <div class="about__label">Праздники у нас</div>
                    <div class="about__text">И это далеко не все блюда и напитки, которые мы можем вам предложить! Добавьте к этому дружелюбную обстановку, которая обеспечивает благоприятную атмосферу для вашего пребывания в «ПиццеРио», и получится настоящий праздник, не только для живота, но и для души!</div>
                </div>
            </div>
        </div>
        <div class="about__text-block">
            <div class="about__text-box">
                <div class="about__text-production">О качестве</div>
                <div class="about__text">Что же такое качество? Для себя в «ПиццеРио» мы характеризуем это как, прежде всего качественные, свежие продукты, приготовленные таким образом, чтобы вызвать самые лучшие вкусовые и визуальные впечатления о нашей продукции. Мы верим, что именно это способствует тому, что наши Гости ходят к нам снова и снова.</div>
                <div class="about__text">Именно поэтому один из основных принципов работы «ПиццеРио», основывается на том, что качество всей продукции для производства ингредиентов и напитков — необходимая составляющая каждодневной работы и это правило должно соблюдаться всегда.</div>
                <div class="about__text">За годы работы все проведённые мероприятия, политика производства, постоянное обновление оборудования способствовали тому, что мы на практике осуществляем ежедневный контроль качества всей продукции.</div>
                <div class="about__text">Все кулинарные цехи, где производится наша продукция, соответствуют государственным санитарно-эпидемиологическим правилам и нормативам. Вся продукция декларирована и соответствует стандарту организации, проходит лабораторно-инструментальные исследования, согласно графику по программе производственного контроля качества продукции. Для достижения наилучших результатов используются передовые технологии и современное оборудование.</div>
            </div>
            <img src="/images/about/desert.png" alt="Десерт">
        </div>
    </div>
</div> <!-- Закрываем about -->
</div>
</template>

<script setup lang="ts">
  import MenuItem from "@entities/menuItem/ui/menuItem.vue";
  import massWeight from '@widgets/massWeighr/ui/massWeight.vue';
  import { ref, onMounted } from 'vue';
import { Navigation, Pagination } from 'swiper/modules'
import '/node_modules/swiper/swiper-bundle.min.js';
    onMounted(() => {
      const Swiper = (window as any).Swiper;

      if (Swiper) {
        const swiper = new Swiper('.swiper', {
          modules: [Pagination, Navigation],
          loop: true,
          pagination: {
                el: '.swiper-pagination',
                clickable: true,
                renderBullet: function (index: number, className: string): string {
                // Массив изображений для пагинации
                const images = [
                        '/images/menu-item/Jeniffer.jpg', // Изображение для слайда 1
                        '/images/menu-item/Jeniffer.jpg', // Изображение для слайда 2
                        '/images/menu-item/Jeniffer.jpg'  // Изображение для слайда 3
                ];
                return `<span class="${className}"><img src="${images[index]}" alt="Slide ${index + 1}" /></span>`;
                },
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            
          },
          breakpoints: {
            1244: {
              slidesPerView: 1,
              slidesPerGroup: 1,
            },
            768: {
              slidesPerView: 1,
              slidesPerGroup: 1,
            },
            320: {
              slidesPerView: 1,
              slidesPerGroup: 1,
            },
          },
        });
      } else {
        console.error('Swiper not loaded');
      }
    });
  

</script>

<style lang="scss" scoped>
@import './style.scss';

.swiper-pagination .swiper-pagination-clickable .swiper-pagination-bullets .swiper-pagination-horizontal .swiper-pagination-bullet {
    width: var(--swiper-pagination-bullet-width, var(--swiper-pagination-bullet-size, 60px));
    height: var(--swiper-pagination-bullet-height, var(--swiper-pagination-bullet-size, 60px));
    border-radius: 10px;
    background: var(--swiper-pagination-bullet-inactive-color, #000);
}

.swiper-pagination .swiper-pagination-clickable .swiper-pagination-bullets .swiper-pagination-horizontal .swiper-pagination-bullet-active {
    opacity: var(--swiper-pagination-bullet-opacity, 1);
    background: #a3a3a3;
    border: 2px solid orange;
}
.swiper-pagination .swiper-pagination-clickable .swiper-pagination-bullets .swiper-pagination-horizontal .swiper-pagination-bullet {
    background: var(--swiper-pagination-bullet-inactive-color, #000) !important;
}

.swiper-pagination .swiper-pagination-clickable .swiper-pagination-bullets .swiper-pagination-horizontal .swiper-pagination-bullet-active {
    background: #a3a3a3 !important;
    border: 2px solid orange !important;
}

//BLOX
.about{
                background-image: url("/images/menu-item/pattern.png");
                background-color: #198f30;
                padding:50px 0px;
                display: flex;
                flex-direction: column;
}
.about__block{
        max-width: 100%;
        margin: 0;
        background-color: white;
        border-radius:0;
        padding:12px;
}

.about__slider{
        max-width: 1280px;
        margin:auto ;
        color:white;
        display: flex;
        flex-direction: column;
        background-color:inherit;
        overflow: hidden;
}
.swiper{
        max-width: 600px;
}
.about__text-block{
        display: flex;
        flex-direction: column;
        gap:1rem;

}

.about__text-block-column{
        display: flex;
        flex-direction: column;
        gap:1.5rem;
}

.about__text-box{
        display: flex;
        flex-direction: column;
        text-align: left;
        gap: 1rem;
}

//TEXT

.about__title{
 font-size:48px;
 color:white;
}

.about__label{
        font-size: 28px;
}

.about__text{
        font-size: 16px;
}

.about__text-production{
        font-size: 28px;
}
.about__label-production{
        font-size: 36px;
}
@media(min-width:#{$br-tablet}px) {
        .about__slider{
        max-width: 1280px;
        color:white;
        margin:auto ;
        display: flex;
        flex-direction: column;
        background-color:inherit;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
}
        .about__block{
        max-width: 1280px;
        margin: auto;
        background-color: white;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
        padding:12px;
}

        .about__text-block{
        display: flex;
        flex-direction: column;
        gap:1rem;

        .about__block{
                margin: 0;
                width: 100%;
        }   
        .about{
                background-image: url("/images/menu-item/pattern.png");
                background-color: #198f30;
                padding:50px 200px;
                display: flex;
                flex-direction: column;
        }
}
}

@media(min-width:#{$br-desktop}px) {
.about__slider{
        max-width: 1280px;
        margin:auto ;
        display: flex;
        flex-direction: row-reverse;
        background-color: white;
        color:black;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
}
.about{
    background-image: url("/images/menu-item/pattern.png");
    background-color: #198f30;
    padding:50px 200px;
    display: flex;
    flex-direction: column;
}

.about__block{
        max-width: 1280px;
        margin: auto;
        background-color: white;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
        padding:12px;
}

.about__slider{

}

.about__text-block{
        display: flex;
        flex-direction:row;
        gap:1rem;

}

.about__text-block-column{
        display: flex;
        flex-direction: column;
        gap:1.5rem;
}

.about__text-box{
        display: flex;
        flex-direction: column;
        text-align: left;
        gap: 1rem;
}

//TEXT

.about__title{
 font-size:48px;
 color:white;
}

.about__label{
        font-size: 28px;
}

.about__text{
        font-size: 16px;
}

.about__text-production{
        font-size: 28px;
}
.about__label-production{
        font-size: 36px;
}
}
</style>



