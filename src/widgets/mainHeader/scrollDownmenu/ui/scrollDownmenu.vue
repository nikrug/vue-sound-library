<template>

    <div class="scrollDownmenu">
        <div class="scrollDownmenu__list">
            <a href="#Pizza" @click="scrollToElement('Pizza')">Пицца </a>
            <a href="#Beri-Peki" @click="scrollToElement('Beri-Peki')">Заготовка пиццы «Бери-пеки»</a>
            <a href="#Snacks"  @click="scrollToElement('Snacks')">Закуски</a>
            <a href="#Mexican" @click="scrollToElement('Mexican')">Мексиканские блюда</a>
            <a href="#Salat" @click="scrollToElement('Salat')">Салаты</a>
            <a href="/">Супы</a>
            <a href="/">Напитки</a>
            <a href="/">Десерты</a>
            <a href="/">Другое</a>
        </div>
    </div>

  
</template>


<script>
window.addEventListener('scroll', function() {
    const scrollDownmenu__list = document.querySelector('.scrollDownmenu__list');
    const scrollPosition = window.scrollY;

    if (scrollPosition > 100) {
        scrollDownmenu__list.classList.add('active');
    } else {
        scrollDownmenu__list.classList.remove('active');
    }
});
export default {
  mounted() {
    const hash = window.location.hash.substring(1);
    if (hash) {
      // Задержка на случай, если элемент загружается асинхронно
      setTimeout(() => {
        this.scrollToElement(hash);
      }, 100); // Настройте задержку по мере необходимости
    }
  },
  methods: {
    scrollToElement(elementId) {
      const element = document.getElementById(elementId);
      if (element) {
        const headerOffset = 150; // Замените на нужное вам смещение
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - headerOffset;

        this.smoothScrollTo(offsetPosition);
      }
    },
    smoothScrollTo(target) {
      const startPosition = window.scrollY;
      const distance = target - startPosition;
      const duration = 600; // Продолжительность анимации в мс
      let startTime = null;

      const animation = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);

        // Ease-in-out функция
        const ease = (t) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

        window.scrollTo(0, startPosition + distance * ease(progress));

        if (timeElapsed < duration) {
          requestAnimationFrame(animation);
        }
      };

      requestAnimationFrame(animation);
    }
  }
}
</script>

<style>

.scrollDownmenu__list{
    display: flex;
    flex-direction: row;
    gap: 1.5rem;
    padding: 1rem;
    z-index: 1000;
    position: absolute;
    overflow-y: scroll;
    width: 100%;

}
.scrollDownmenu__list.active {
  position: fixed;
  top:0;
  background-color: white;
  color:rgb(0, 0, 0);
}

.scrollDownmenu__list.active a{
  color:black;
}
.scrollDownmenu__list a{
  color:white;
  white-space: nowrap;
}

.scrollDownmenu__card-button{

}
.scrollDownmenu__logo{
    
}
  .visible{
    display: none;
  }
  .visible-line{
    display: none;
  }

  .header__orange-text{
    color:#FF991F;
    font-size:18px;
  }

  .header__text{
    color:black;
    font-size:12px;
  }

  .header__info-text-block{
    text-align: end;
  }

  @media (min-width: 1244px) {
    .visible{

    display: inline;

  }
    .visible-line{
    display: flex;
  }
  .scrollDownmenu__list{
    display: flex;
    flex-direction: row;
    gap: 1.5rem;
    padding: 1rem;
    overflow: auto;
    position: absolute;
    justify-content: center;
  
}

  }
</style>