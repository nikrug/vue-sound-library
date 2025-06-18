<template>
    <div class="music-player__player-song">
        <audio class="audio" src="/music/daisuke.mp3"></audio>
        <div class="music__player__play-pause-box">
            <!-- Здесь добавьте кнопку воспроизведения/паузы. Например: -->
          <button class="img-download">
            <img  class="play-pause-button" src="/images/music-img/play-button.svg">
        </button>
        </div>
        <div class="music-player__player-text-box song-name no-wrap">
                <div class="music-player__song-name-text">Sound name</div>
                <div class="music-player__time-text">0:12</div>
        </div>

        <div class="music-player__player-text-box song-description show-tablet">
                <div class="music-player__tab-text music-player__max-width">Confused excited crowd slight panic and distress</div>
        </div>

        <div class="music-player__player-text-box song-janre show pre">
                <div class="music-player__tab-text">Shocking, jumpscare</div>
        </div>
            
        <div class="music-player__player-img-box">
              <KeepAlive>
                <svg
                  class="my-svg show pre"
                  width="36"
                  height="37"
                  viewBox="0 0 36 37"
                  xmlns="http://www.w3.org/2000/svg"
                  @click="toggleColor"
                >
                  <path :d="pathData" :stroke="strokeColor" stroke-width="2" :fill="fillColor"></path>
                </svg>
              </KeepAlive>
                <a href="/project">
                    <button class="img-download"> 
                        <img src="/images/music-img/download.svg" alt="Download">
                    </button>
                </a>
                <a href="/project">
                    <button class="img-download">
                        <img src="/images/music-img/dots.svg" alt="More Options">
                    </button>
                </a>
        </div>
    
    </div>
</template>


<style lang="scss" scoped>
@import './style.scss';
.my-svg {
  cursor: pointer; /* Указатель при наведении */
}

.song-description{
  width: 251px;
}

.song-name{
  width:129px;
}

.song-janre{
  width:212px;
  align-self: anchor-center;
}


 @media(min-width:#{$br-desktop}px){

    .song-name{
     width:189px;
    }
    
  }


</style>

<script setup lang="ts">

document.addEventListener("DOMContentLoaded", function() {
  const playPauseButtons = document.querySelectorAll<HTMLImageElement>('.play-pause-button');

  playPauseButtons.forEach(button => {
    const audio = button.closest<HTMLElement>('.music-player__player-song')?.querySelector<HTMLAudioElement>('.audio');
    if (audio) {
      button.onclick = function () {
        if (audio.paused) {
          audio.play();
          button.src = '/images/music-img/pause-button.svg';
        } else {
          audio.pause();
          button.src = '/images/music-img/play-button.svg';
        }
      };

      audio.onended = function() {
        button.src = '/images/music-img/play-button.svg';
      };
    }
  });

});

import { ref, computed } from 'vue';

const isColored = ref(false);

// SVG path data
const pathData = "M9.01438 20.2892L9.01445 20.2892L9.022 20.2996C10.2303 21.9682 11.6853 23.4209 13.1963 24.7077L13.2133 24.7222L13.2296 24.7373C13.9196 25.3801 15.0503 26.3493 16.1078 27.1628C16.6373 27.5702 17.1325 27.9262 17.5355 28.1801C17.7302 28.3027 17.8888 28.3922 18.0096 28.4508C18.1442 28.3862 18.3258 28.2741 18.5599 28.098C18.7287 27.9711 18.8963 27.8336 19.0727 27.6887L19.0855 27.6782C19.2476 27.545 19.4262 27.3982 19.5947 27.2742C22.9223 24.7423 26.3382 21.7792 28.0494 18.6251C29.4556 15.6212 29.3553 12.1372 27.3984 10.063C24.7489 7.7008 20.7835 8.18535 18.7893 10.6429L17.9924 11.625L17.2206 10.623C16.6874 9.93088 16.038 9.38743 15.2644 8.98606C12.018 7.71216 8.74532 9.0299 7.40039 11.8676C6.45694 14.8557 7.25826 17.9287 9.01438 20.2892Z";

const strokeColor = computed(() => {
  return isColored.value ? '#0432DF' : '#4C526A'; // Цвет линии
});

const fillColor = computed(() => {
  return isColored.value ? '#0432DF' : '#EEE'; // Цвет заливки
});

const toggleColor = () => {
  isColored.value = !isColored.value;
};

</script>
