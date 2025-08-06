<template>
  <q-layout view="lHh Lpr lFf">
    <q-toolbar class="header">
        <a href="/">
          <img  src="/images/headers/header-logo.svg">
        </a>
      <q-space />

      <q-space />
      <div class="button-tablet">
      <customButton ButtonText="Вакансии на hh.ru" ButtonStyle="customButton__reverse"></customButton>
      </div>
      <div class="button-desctop">
        <customButton ButtonText="Заполнить анкету"></customButton>
      </div>
      <div class="header__info-text-block">
        <div class="header__telephone-text">+7 3822 34 99 90</div>
        <div class="header__telephone-subtext">телефон отдела кадров</div>
      </div>
      <HeaderDropDown/>
    </q-toolbar>
    <q-page-container>
      <div class="carrer">
        <div class="carrer__body">
          <div class="carrer__welcome">
            <div class="carrer__welcome-label">Карьера в ПиццеРио </div>
            <div class="carrer__welcome-card-block">
              <img src="/images/carrer/greetings-sign.svg"></img>
              <div class="carrer__welcome-text-block">
                <div class="carrer__welcome-text">
                  Мы не просто пиццерия, для многих томичей мы стали настоящей легендой,
                  благодаря сохранению знакомых вкусов кесадий,
                  американской пиццы и густых молочных коктейлей.
                </div>
                <div class="carrer__welcome-text">
                  Присоединяйся к команде, чтобы радовать томичей любимыми блюдами вместе!
                </div>
              </div>
            </div>
          </div>

          <video class="carrer__video"  controls>
            <source src="/images/carrer/video1.mp4" type="video/mp4">
          </video>

          <video class="carrer__video"  controls>
            <source src="/images/carrer/video2.mp4" type="video/mp4">
          </video>

          <div class="carrer__slider">
            <div class="carrer__slider-img-block">
              <img class="carrer__slider-img" src="/images/carrer/pointer-down-desktop.svg">
              <img src="/images/carrer/carrer-logo-desktop.svg">
            </div>
            <div class="swiper">
                  <div class="swiper-wrapper">
                      
                      <div class="swiper-slide">
                          <img class="swiper-img" src="/images/menu-item/Jeniffer.jpg">
                          
                      </div>
                      <div class="swiper-slide">
                          <img class="swiper-img" src="/images/menu-item/Jeniffer.jpg">
                      </div>
                      <div class="swiper-slide">
                          <img class="swiper-img" src="/images/menu-item/Jeniffer.jpg">
                      </div>
                      <div class="swiper-slide">
                          <img class="swiper-img" src="/images/menu-item/Jeniffer.jpg">
                      </div>
                      <div class="swiper-slide">
                          <img class="swiper-img" src="/images/menu-item/Jeniffer.jpg">
                      </div>
                      <div class="swiper-slide">
                          <img class="swiper-img" src="/images/menu-item/Jeniffer.jpg">
                      </div>
                      
                  </div>
                  <div class="swiper-button-prev"><</div>
                  <div class="swiper-button-next">></div>
                  <div class="swiper-pagination"></div>
            </div>
            </div>
        <div class="carrer__comments">
        <div class="carrer__comments-label">Впечатление о первом дне</div>
          <div class="carrer__comments-reply">
            <carrerComment 
              commentImgclass="carrier__coment-img-none" 
              commentTitle=""
              commentImgsee=""
              commentTextBox="carrier__coment-text-box2"
              commentText="Друзья! Расскажите, пожалуйста, о своем первом дне в ПиццеРио!" 
              commentTime="13:17">
            </carrerComment>
          </div>
          <carrerComment></carrerComment>

          <carrerComment 
          commentImg="/images/carrer/Alena.png" 
          commentTitle="Алёна"
          commentText="Запомнилось количество супов, в которых я утонула... Было сложно, но мне понравился процесс работы" 
          commentTime="13:25">
        </carrerComment>

        <carrerComment 
          commentImg="/images/carrer/Ola.png" 
          commentTitle="Оля"
          commentText="Была в шоке от того, что приходили много гостей) Запомнился дружный коллектив, потому что все помогали друг другу" 
          commentTime="13:37">
        </carrerComment>

        <carrerComment 
          commentImg="/images/carrer/Tanya.png" 
          commentTitle="Танюша"
          commentText="Вкусный запах заведения, коллектив дружный и приветливый. Было очень интересно побыть со стороны работника" 
          commentTime="13:45">
        </carrerComment>

        <carrerComment 
          commentImg="/images/carrer/Vova.png" 
          commentTitle="Вова"
          commentText="Меня удивило не стандартное обслуживание Гостей, то есть мы не подходим к столикам, не берем заказы. Запомнились коллеги-учителя (к сожалению которые сейчас не работают).
          Простота выполнения функций. Хороший и активный персонал, с которым в рабочее и внерабочее время приятно проводить время и общаться" 
          commentTime="14:15">
        </carrerComment>

        <div class="carrer__comments-reply">
            <carrerComment 
              commentImgclass="carrier__coment-img-none" 
              commentTitle=""
              commentImgsee=""
              commentTextBox="carrier__coment-text-box2"
              commentText="Спасибо! Классно работать вместе с вами! Сейчас добавлю новенького." 
              commentTime="14:17">
            </carrerComment>
        </div>
        <div class="carrer__comments-add-text">
          <div>ПиццеРио добавил Коля</div>
        </div>
        </div>
        <div class="carrer__head-hunter">
          <img src="/images/carrer/join-sign.svg">
          <img class="carrer__head-hunter-img" src="/images/carrer/pointer-up-desktop.svg">
          <div class="carrer__head-hunter-text-block">
            <div>тут: </div>
            <img src="/images/carrer/hh.ru__min_ 2.svg">
          </div>
        </div>
        </div>
      </div>
    </q-page-container>
    <MainFooterComponent />
  </q-layout>
</template>
<script setup lang="ts">
import { MainFooterComponent } from '@widgets/mainFooter';

import { customButton } from '@shared/ui';
import { carrerComment } from '@entities/carrerComment';
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
            clickable: true
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

<style lang="scss">
@import '/node_modules/swiper/swiper-bundle.min.css';
.header__telephone-text{
  color:#333333;
  font-size: 18px;
  font-weight: 700;
}
.header__telephone-subtext{
  color:#9B9B9B;
  font-size: 12px;

}
.carrer{
  background-image: url("/images/menu-item/pattern.png");
  background-color: #198f30;
  padding: 150px 50px 50px ;
}
.carrer__body{
  display:flex;
  flex-direction: column;
  gap:5rem;
  margin: auto;
  max-width: 1280px;

}
.carrer__video{
  display: flex;
  max-width: 1280px;
  padding: 40px;
  background-color: white;
  border-radius: 20px;
}

.carrer__welcome{
  text-align: center;
  display: flex;
  flex-direction: column;
  max-width: 1280px;
  gap: 3rem;

}

.carrer__welcome-label{
  color:white;
  font-size: 48px;
  font-weight: bold;
}

.carrer__welcome-card-block{
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.carrer__welcome-text-block{
  display: flex;
  max-width: 620px;
  flex-direction: column;
  color:white;
  font-size: 16px;
  font-weight: medium;
  text-align: left;
  padding: 1rem;
  gap: 1rem;

}
.carrer__slider{
  display: flex;
  flex-direction: column;
  align-items: center;
  gap:3rem;
}
.carrer__slider-img-block{
  display: flex;
  flex-direction: row;
}
.carrer__slider-img{
  display: none;
}

.carrer__comments{
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.carrer__comments-label{
  color: white;
  font-size: 36px;

}

.carrer__comments-reply{
  display: flex;
  align-items: end;
  justify-content: end;

}

.carrer__comments-add-text{
  color: white;
  background-color:#FFFFFF66;
  border-radius: 16px;
  padding: 4px;
  margin: auto;
  text-align: center;
  align-self: baseline;
}

.carrer__head-hunter{
  display: flex;
  flex-direction: column;
  gap:3rem;
  align-items: center;
}

.carrer__head-hunter-text-block{
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 40px;
  color: white;
  font-weight: 500;
  gap:1rem;
}

.carrer__head-hunter-img{
  display: none;
}
.button-desctop{
  display: none;
}
.button-tablet{
  display:none;
}
.swiper{
    width: 350px;
    border-radius: 10px;
}

.swiper-img{
    width: 350px;
    height: 400px;
    border-radius: 10px;

}

.swiper-button-next,
.swiper-button-prev {
  display: none;
}

@media(min-width:780px){
  .carrer{
  background-image: url("/images/menu-item/pattern.png");
  background-color: #198f30;
  padding: 150px 50px 50px ;
}
.carrer__head-hunter{
  flex-direction: row;
}
.button-tablet{
  display:block;
}
.carrer__slider-img{
  display: flex;
}
  .swiper{
    width: 750px;
}
  .swiper-img{
    width: 750px;
    height: 400px;
    border-radius: 10px;
   
}
.button-desctop{
  display: none;
}
.carrer__welcome-card-block{
  display: flex;
  flex-direction: row;
  gap: 1rem;
}

.carrer__welcome-text-block{
  font-size: 16px;

}
.carrer__head-hunter-img{
  display: flex;
}
.swiper-button-next,
.swiper-button-prev {
  color:  #333333; /* Цвет стрелок */
  background-color: white;
  border-radius: 30px;
  width: 48px; /* Ширина кнопок */
  height: 48px; /* Высота кнопок */
  z-index: 10; /* Обеспечение правильного наложения */
}
}

@media(min-width:1200px){
.button-desctop{
  display: block;
}
.swiper{
    width: 1280px;
    border-radius: 10px;
}
.carrer__slider-img{
  display: flex;
}
.carrer__head-hunter-img{
  display: flex;
}
.carrer__head-hunter{
  flex-direction: row;
}
.button-tablet{
  display:block;
}
.swiper-img{
    width: 1280px;
    height: 590px;
    border-radius: 10px;

}
.carrer__welcome-text-block{
  font-size: 28px;

}
.swiper-button-next,
.swiper-button-prev {
  display: flex;

  color:  #333333; /* Цвет стрелок */
  background-color: white;
  border-radius: 30px;
  width: 48px; /* Ширина кнопок */
  height: 48px; /* Высота кнопок */
  z-index: 10; /* Обеспечение правильного наложения */
  font-weight: 700;
}

.swiper-button-next:hover,
.swiper-button-prev:hover {
  background-color: #FF991F;
}
}
</style>