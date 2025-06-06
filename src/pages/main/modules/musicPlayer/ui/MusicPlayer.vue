<template>

<div class="music-player">
    <div class="music-player__title-text">Best sound effects for youtube videos</div>

    <div class="music-player__tab-text tab">
        <div class="music-player__tab-container">
            <div class="music-player__tab-header">
                <button class="tab-btn tab-active">All</button>
                <button class="tab-btn">Jumpscare</button>
                <button class="tab-btn">Mellow</button>
                <button class="tab-btn">Happines</button>
                <button class="tab-btn">Ambience</button>
                <button class="tab-btn">Zonk</button>
            </div>
             <Filter ></Filter>

        </div>
                           
        <div class="music-player__tab-content active">
                <MusicPlayerSong/>
                <MusicPlayerSong/>
        </div>
        <div class="music-player__tab-content">
                <MusicPlayerSong/>
                <MusicPlayerSong/>
        </div>
        <div class="music-player__tab-content">
                <MusicPlayerSong/>
                <MusicPlayerSong/>
        </div>
        <div class="music-player__tab-content">
                <MusicPlayerSong/>
                <MusicPlayerSong/>
        </div>
        <div class="music-player__tab-content">
                <MusicPlayerSong/>
                <MusicPlayerSong/>
                <MusicPlayerSong/>
                <MusicPlayerSong/>
        </div>
        <div class="music-player__tab-content">
                <MusicPlayerSong/>
                <MusicPlayerSong/>
        </div>
        <div class="music-player__tab-content">
                <MusicPlayerSong/>
                <MusicPlayerSong/>
        </div>
        <div class="music-player__tab-content">
                <MusicPlayerSong/>
                <MusicPlayerSong/>
                <MusicPlayerSong/>
                <MusicPlayerSong/>
        </div>
            <div class="music-player__tab-content">
                <MusicPlayerSong/>
                <MusicPlayerSong/>
            </div>
        </div>
      </div>
</template>

  
<style lang="scss" scoped>
@import './style.scss';

</style>


<script setup lang="ts">
import MusicPlayerSong from "@entities/musicPlayerSong/ui/MusicPlayerSong.vue";
import Filter from "@entities/filter/ui/filter.vue";


document.addEventListener('DOMContentLoaded', () => {
  const tabButtons = document.querySelectorAll<HTMLElement>('.tab-btn')
  const tabContents = document.querySelectorAll<HTMLElement>('.music-player__tab-content')

  tabButtons.forEach((tab, index) => {
    tab.addEventListener('click', () => {
      // Remove the active class from all tabs
      tabButtons.forEach(btn => btn.classList.remove('tab-active'))
      // Hide all content
      tabContents.forEach(content => content.classList.remove('active'))

      // Add active class to the clicked tab
      tab.classList.add('tab-active')

      // Ensure that the index is valid before accessing tabContents
      if (index >= 0 && index < tabContents.length) {
        tabContents[index].classList.add('active') // Show corresponding content
      }
    })
  })

  // Show the first tab and its content initially
  if (tabButtons.length > 0) {
    tabButtons[0].click()
  }
})
</script>