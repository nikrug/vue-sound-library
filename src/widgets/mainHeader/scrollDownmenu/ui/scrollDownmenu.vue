<template>

    <div class="scrollDownmenu">
        <div class="scrollDownmenu__list">
            <img class="scrollDownmenu__logo" src="/images/drop-down-menu/dropdown-logo.svg">
            <a href="#Pizza" @click="scrollToElement('Pizza')">Пицца </a>
            <a href="#Beri-Peki" @click="scrollToElement('Beri-Peki')">Заготовка пиццы «Бери-пеки»</a>
            <a href="#Snacks"  @click="scrollToElement('Snacks')">Закуски</a>
            <a href="#Mexican" @click="scrollToElement('Mexican')">Мексиканские блюда</a>
            <a href="#Salat" @click="scrollToElement('Salat')">Салаты</a>
            <a href="/">Супы</a>
            <a href="/">Напитки</a>
            <a href="/">Десерты</a>
            <a href="/">Другое</a>
            
            <button  class="scrollDownmenu__card-button">
              <img src="/images/drop-down-menu/icon-basket.svg">
              Корзина
            </button>
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
window.addEventListener('scroll', function() {
    const scrollDownmenu__list = document.querySelector('.scrollDownmenu__logo');
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
    position: absolute;
    gap: .5rem;
    padding: 1rem;
    z-index: 100;
    overflow-y: scroll;
    align-items: center;
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
  padding: 7px 14px;
  border-radius: 18px;
  transition: background 0.2s ease;
}

.scrollDownmenu__list a:hover{
  background: rgba(240, 240, 240, 0.51);
  transition: background 0.2s ease;

  white-space: nowrap;
}


.scrollDownmenu__card-button{
  position: fixed;
  justify-content: center;
  gap: 0.5rem;
  display: inline-flex;
  bottom:10px;
  right:10px;
  left: 10px;
  color:white;
  padding: 14px;
  background-color: #FF991F;
  border-radius: 10px;
}

.scrollDownmenu__logo{
    display: none;
}

.scrollDownmenu__logo.active{
    display: none;
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

  @media (min-width: 768px) {
    .scrollDownmenu__card-button{
      position: fixed;
      bottom:10px;
      right:10px;
      left: auto;
      width: 200px;
    }
  }

  @media (min-width: 1244px) {
    .scrollDownmenu__logo.active{
    display: block;
    }   
    .scrollDownmenu__card-button{
      position: static;
      color:white;
      padding: 10px;
      width: auto;
      background-color: #FF991F;
      border-radius: 10px;
    }
    .visible{

    display: inline;

  }
    .visible-line{
    display: flex;
  }
  .scrollDownmenu__list{
    display: flex;
    flex-direction: row;
   
    padding: 1rem;
    overflow: auto;
    position: absolute;
    justify-content: center;
  
}

  }
</style>