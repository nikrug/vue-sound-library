<template>
  <Search/>
  <Production/>
  <MusicPlayer/>
  <BrouseByCategory/>
  <WhyUs/>
  <downloadSound/>
  <Testimonials/>
</template>

<style lang="scss" scoped>
@import './style.scss';
</style>

<script setup lang="ts">
import {Search} from '@pages/main/modules/search'
import {Production} from '@pages/main/modules/production';
import {MusicPlayer} from '@pages/main/modules/musicPlayer';
import { BrouseByCategory } from '@pages/main/modules/brouseBycategory';
import { Testimonials } from '@pages/main/modules/testimonials';
import { WhyUs } from '@pages/main/modules/why-us';
import { downloadSound } from '@pages/main/modules/downloadSound';
</script>
