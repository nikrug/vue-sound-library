<template>    
<footer class="footer">
    <div class="footer__container">
        <div class="footer__logo-top">
            <div class="footer__top">

                    <FooterLogo/>
                
            </div>
            <div class="footer__body">
                
                    <div v-for="section in footerBodyList" :key="section.title">
                        <div class="footer__column">{{ section.title }}
                          <div  v-for="item in section.items" :key="item.label">
                              <q-btn class='footer__q-btn'
                                  stretch
                                  flat 
                                  :label="item.label"
                                  :to="item.link"
                              />
                          </div>
                    </div>
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