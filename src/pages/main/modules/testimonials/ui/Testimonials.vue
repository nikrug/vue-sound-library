<template>

<div class="experiens">
    <div class="experiens__title-block">
        <div class="experiens__yellow-title-text">TESTIMONIALS</div>
        <div class="experiens__title-text">Hear good experiences from our customers</div>
    </div>
    <div class="swiper">
        <div class="swiper-wrapper">
            
            <div class="swiper-slide">
                <slider castomerName="Anne Joyce" castomerPosition="Video editor at Dude Perfect" quoteText="The sounds from WavesCo is great and it really helps our team to save time and production costs." imageSrc="/images/experiens/customer_1.svg"/>
            </div>
            <div class="swiper-slide">
                <slider castomerName="Edward Sann" castomerPosition=" Head of Video editor at Netflix" quoteText="WavesCo was a great choice for our team for film production, the quality is amazingly great." imageSrc="/images/experiens/customer_2.svg"/>
            </div>
            <div class="swiper-slide">
                 <slider castomerName="Ronn D." castomerPosition="Video Editor at PewDiePie" quoteText="Perfect way to get best quality sound effects for youtube videos. Thanks to WavesCo team." imageSrc="/images/experiens/customer_3.svg"/>
            </div>
            <div class="swiper-slide">
                <slider castomerName="Anne Joyce" castomerPosition="Video editor at Dude Perfect" quoteText="The sounds from WavesCo is great and it really helps our team to save time and production costs." imageSrc="/images/experiens/customer_1.svg"/>
            </div>
            <div class="swiper-slide">
                <slider castomerName="Edward Sann" castomerPosition=" Head of Video editor at Netflix" quoteText="WavesCo was a great choice for our team for film production, the quality is amazingly great." imageSrc="/images/experiens/customer_2.svg"/>
            </div>
            <div class="swiper-slide">
                <slider castomerName="Ronn D." castomerPosition="Video Editor at PewDiePie" quoteText="Perfect way to get best quality sound effects for youtube videos. Thanks to WavesCo team." imageSrc="/images/experiens/customer_3.svg"/>
            </div>
            <div class="swiper-slide">
                <slider castomerName="Anne Joyce" castomerPosition="Video editor at Dude Perfect" quoteText="The sounds from WavesCo is great and it really helps our team to save time and production costs." imageSrc="/images/experiens/customer_1.svg"/>
            </div>
            <div class="swiper-slide">
                <slider castomerName="Edward Sann" castomerPosition=" Head of Video editor at Netflix" quoteText="WavesCo was a great choice for our team for film production, the quality is amazingly great." imageSrc="/images/experiens/customer_2.svg"/>
            </div>
            <div class="swiper-slide">
                <slider castomerName="Ronn D." castomerPosition="Video Editor at PewDiePie" quoteText="Perfect way to get best quality sound effects for youtube videos. Thanks to WavesCo team." imageSrc="/images/experiens/customer_3.svg"/>
            </div>
        </div>
        <div class="swiper-pagination"></div>

    </div>
</div>

</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import slider from '@entities/slider/ui/slider.vue';
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
            prevEl: '.swiper-button-prev'
            },
            breakpoints: {
                1244: {
                    slidesPerView: 3,
                    slidesPerGroup: 3,
                },
                768: {
                    slidesPerView: 2,
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
@import '/node_modules/swiper/swiper-bundle.min.css';

.swiper{
    width: 100%;
    max-width: 1400px;
}
    .swiper-horizontal>.swiper-pagination-bullets, .swiper-pagination-bullets.swiper-pagination-horizontal, .swiper-pagination-custom, .swiper-pagination-fraction {
        position: relative;
        top: var(--swiper-pagination-top, auto);
        bottom: var(--swiper-pagination-bottom, 8px);
        left: 0;
    
        width: 100%;
        margin: 2.5rem 0 0;
    
    }
    
c
    .swiper-backface-hidden .swiper-slide {
        display: flex;
    
        transform: translateZ(0);
        
        backface-visibility: hidden;
    }
    
    .swiper-pagination-bullet,.swiper-pagination-bullet-active {
        opacity: var(--swiper-pagination-bullet-opacity, 1);
        background: #020D37 !important; /* Замените на нужный вам цвет */
    }
    
    @media(min-width:#{$br-tablet}px) {
       .swiper-horizontal>.swiper-pagination-bullets, .swiper-pagination-bullets.swiper-pagination-horizontal, .swiper-pagination-custom, .swiper-pagination-fraction {

        margin:  1rem 0 0.8rem;
    
    }
        .swiper{
        max-width: 768px;
        margin: auto;
    }
    
    }
    
    @media(min-width:#{$br-desktop}px){
        .show-experiens-desctop{
            display: block;
        }

    .swiper{
        max-width: 975px;
        margin: auto;
    }

        
      }
</style>

