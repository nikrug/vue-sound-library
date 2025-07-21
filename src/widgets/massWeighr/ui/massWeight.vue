<template>
  <div class="menu__option">
    <div :class="CustomClass">
      <button class="option-button"
        v-for="option in weightOptions"
        :key="option.label"
        :class="{'active': selectedWeight === option.value}"
        @click="selectWeight(option.value, option.price)"
      >
        {{ option.label }}
      </button>
    </div>
    <div :class="ButtonBlockClass"> 
                <button class="menu__item-button">В корзину</button>
                <div class="menu__price">{{ totalPrice }} ₽</div>
    </div>
    <div :class="CustomInfoClass">
        <div class="options-info-text"
        v-for="option in weightOptions"
        :key="option.label"
        >
        <div class="options-info-text">
          {{ option.label }}
        </div>
        {{ option.price }} ₽
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PizzaWeightSelector",
  props: {
    title: {
      type: String,
      default: "Выберите граммовку пиццы",
    },
    CustomClass: {
      type: String,
      default: "options",
    },
    CustomInfoClass: {
      type: String,
      default: "options-info",
    },
    ButtonBlockClass: {
      type: String,
      default: "menu__button-block",
    },

  },
  data() {
    return {
      selectedWeight: null,
      totalPrice: 0,
    };
  },
  computed: {
    weightOptions() {
      switch (this.title) {
        case "Дженнифер":
          return [
            { label: '690 г.', value: 'small', price: 545 },
            { label: '1380 г.', value: 'large', price: 1065 },
          ];
        case "Арканзас":
          return [
            { label: '690 г.', value: 'medium', price: 545  },
            { label: '1330 г.', value: 'large', price: 1065 },
          ];
        case "Мичиган":
            return [
            { label: '680 г.', value: 'medium', price: 550 },
            { label: '1360 г.', value: 'large', price: 995 },
        ];

        case "Пепперони":
            return [
            { label: '690 г.', value: 'medium', price: 550 },
            { label: '1330 г.', value: 'large', price: 995 },
        ];

        case "Джорджия":
            return [
            { label: '690 г.', value: 'medium', price: 550 },
            { label: '1330 г.', value: 'large', price: 995 },
        ];

        case "Манхетен":
            return [
            { label: '690 г.', value: 'medium', price: 550 },
            { label: '1330 г.', value: 'large', price: 975 },
        ];

        case "Бери-пеки":
            return [
            {label: '300 г.', price: 545 },
        ];

        case "Бери-пеки Мичиган":
            return [
            {label: '300г', price: 580 },
        ];

        case "Бери-пеки Нью-Джерси":
            return [
            {label: '300г', price: 495 },
        ];

        case "Наггетсы":
            return [
            {label: '300г', price: 187 },
        ];

        case "Тортилья":
            return [
            {label: '300г', price: 157 },
        ];

        case "Сухарики":
            return [
            {label: '300г', price: 87 },
        ];

        case "Сальса":
            return [
            { label: '30г', value: 'medium', price: 10 },
            { label: '60г', value: 'large', price: 35 },
        ];

        case "Тар-Тар":
            return [
            { label: '30г', value: 'medium', price: 10 },
            { label: '60г', value: 'large', price: 35 },
        ];

        case "Сырный":
            return [
            { label: '30г', value: 'medium', price: 10 },
            { label: '60г', value: 'large', price: 35 },
        ];

        case "Кетчуп Майонез Сметана":
            return [
            { label: 'кетчуп', value: 'ketchup', price: 25 },
            { label: 'майонез', value: 'mayo', price: 25 },
            { label: 'сметана', value: 'smetana', price: 25 },
        ];


        case "Кесадия":
            return [
            { label: '170 г.', value: 'medium', price: 100 },
            { label: '340 г.', value: 'large', price: 227 },
        ];

        case "Кесадия-ролл":
            return [
            {label: '300г', price: 227 },
           
        ];

        case "Энчиладос":
            return [
            { label: '680г', value: 'medium', price: 500 },
            { label: '1360г', value: 'large', price: 995 },
        ];

        case "Лукас":
            return [
            {label: '300г', price: 112 },
           
        ];

        case "Цезарь":
            return [
            {label: '300г', price: 120 },
           
        ];

        case "Сомбреро":
            return [
            {label: '300г', price: 187 },
           
        ];

        default:
          return [];
      }
    },
  },
  mounted() {
    // Установка первой цены как активной
    if (this.weightOptions.length > 0) {
      this.selectWeight(this.weightOptions[0].value, this.weightOptions[0].price);
    }
  },
  methods: {
    selectWeight(value, price) {
      this.selectedWeight = value;
      this.totalPrice = price;
    },
  },
};
</script>

<style lang="scss">
.menu__option{
  width: 100%;
  padding:24px
}
.option-none{
    display: none;
    padding: 0px;
    margin-top: 20px;
}

.options-info{
  display: none;
  flex-direction: column;
  justify-content: space-between;
  font-size: 16px;
  
}
.options-info-text{
  display: flex;
  flex-direction: row;
  justify-content: space-between;

}


.options {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
  background-color: #efefef;
  padding: 4px;
  height: 40px;
  border-radius: 12px;
  width: 100%;
}

.option-button {
  width: 100%;
  border: none;
  background-color: #efefef;
  color: #9b9b9b;
  transition: background-color 0.3s;
  border-radius: 8px;
    font-size: 16px;
}

.option-button.active {
  background-color: #ffffff; /* Цвет для активной кнопки */
  color: rgb(0, 0, 0); /* Цвет текста для активной кнопки */
}


.menu__item-button{
    padding:14px 36px;
    gap:12px;
    border-radius:10px;
    background-color:#FF991F;
    color:white;
    cursor: pointer;
}

.menu__item-button:hover{
    background-color:#E17B00;
}

.menu__button-block{
    display:flex;
    justify-content:space-between;
}

.menu__price{
    font-size:28px
}
</style>
