<script setup>
  import {  ref } from 'vue';
    const Popup =ref(false);
const props = defineProps({
  commentImg: {
    type: String,
    default:"/images/carrer/Nikita.png",
  },

  commentImgclass:{
    type: String,
    default:"carrier__coment-img",
  },

  commentTitle: {
    type: String,
    default:"Никита",
  },

  commentText: {
    type: String,
    default:"Хороший, веселый и активный персонал. Получил незабываемые впечатления как от коллектива, так и от приготовления еды для гостей.",
  },

  commentTime: {
    type: String,
    default:"13:25",
  },

  commentImgsee: {
    type:String,
    default:"carrier__coment-img-none",
  },
  commentTextBox: {
    type:String,
    default:"carrier__coment-text-box",
  },
});
</script>


<template>
  <div class="carrier__comment-body">
    <img :class="commentImgclass" :src="commentImg">
    <div class="carrier__comment">
        <div :class="commentTextBox">
            <div class="carrier__coment-title">{{ commentTitle }}</div>
            <div class="carrier__coment-text">{{ commentText }}</div>
            <div class="carrier__comment-corner">
              <div class="carrier__coment-time">{{ commentTime }}</div>
              <img :class="commentImgsee" src="/images/carrer/vacancy-chat-readed.svg"></img>
            </div>

        </div>
  </div>
  </div>
</template>

  
<style lang="scss">
@import './style.scss';

.carrier__comment{
   position: relative;
    display: flex;

    align-items: end;
    gap: 1rem;
}
.carrier__coment-img-none{
display: none;

}

.carrier__comment-body{
  display:flex;
  flex-direction: row;
  align-items: end;
  gap:2rem;
}
.carrier__coment-img{
  height: 75px;
  width: 75px;
  border-radius: 100px;
  overflow: hidden;
}

.carrier__coment-text-box{
    display: flex;
    gap: .3rem;
    max-width: 456px;
    flex-direction: column;
    text-align: left;
    background-color: white;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    padding: 20px;    

}

.carrier__coment-text-box:before {
        content: '';
        position: absolute;
        left: -45px;
        bottom: 0;
        background-image: url(/images/carrer/comment-corner.svg);
        height: 50px;
        width: 50px;
        background-size: cover; /* Заполнение псевдоэлемента изображением */
        background-position: center; /* Позиционирование изображения */
        z-index: 1; 
}

.carrier__coment-text-box2{
    display: flex;
    gap: .3rem;
    max-width: 456px;
    flex-direction: column;
    text-align: left;
    background-color: white;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    border-bottom-left-radius: 20px;
    padding: 20px;    

}

.carrier__coment-text-box2:before {
        content: '';
        position: absolute;
        right: -45px;
         transform: scaleX(-1);
        bottom: 0;
        background-image: url(/images/carrer/comment-corner.svg);
        height: 50px;
        width: 50px;
        background-size: cover; /* Заполнение псевдоэлемента изображением */
        background-position: center; /* Позиционирование изображения */
        z-index: 1; 
}

.carrier__coment-title{
    color: green;
    font-weight: bold;
}

.carrier__coment-text{
    color:black;
    max-width: 360px;
}

.carrier__comment-corner{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: end;
    text-align: end;
    gap: 1rem;
}

.carrier__coment-time{
    color:gray;
    text-align: end;
}

</style>