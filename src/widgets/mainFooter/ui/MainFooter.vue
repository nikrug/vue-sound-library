<template>
    <footer class="footer">
        <div class="footer__container">
            <div class="footer__logo-top">
                <div class="footer__top">

                    <FooterLogo />

                </div>

                <div class="footer__body">
                    <div class="footer__column">
                        <q-btn class=" footer__text" v-for="link in footerBodyList" stretch flat :label="link.label"
                            :key="link.link" :to="link.link" />
                    </div>
                    <div class="footer__number">
                        <div class="footer__number-text">+7 3822 99 02 55</div>
                        <img src="/images/footer/VK.svg">
                    </div>
                </div>
            </div>

        </div>
    </footer>
</template>

<script setup lang="ts">
import './style.scss';


import { footerBodyList } from '../config/config';
import FooterLogo from 'src/widgets/mainFooter/footerLogo/ui/FooterLogo.vue';
</script>