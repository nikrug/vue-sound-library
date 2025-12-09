<template>
  <div :class="menuClass">
    <div :class="CustomClass">
      <button
        class="option-button"
        v-for="option in weightOptions"
        :key="option.label"
        :class="{'active': selectedWeight === option.value}"
        @click="selectWeight(option.value, option.price,option.counter1)"
      >
        {{ option.label }}
      </button>
    </div>

    <!-- Условие для показа нужного слота -->
    <slot v-if="selectedCounter === 'counter1'" name="counter1"></slot>
    <slot v-else-if="selectedCounter === 'counter2'" name="counter2"></slot>
    
    <div :class="CustomInfoClass">
      <div
        class="options-info-text"
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
  name: 'PizzaWeightSelector',
  props: {
    title: {
      type: String,
      default: 'Выберите граммовку пиццы',
    },
    menuClass: {
      type: String,
      default: 'menu__option',
    },
    CustomClass: {
      type: String,
      default: 'options',
    },
    CustomInfoClass: {
      type: String,
      default: 'options-info',
    },
    ButtonBlockClass: {
      type: String,
      default: 'menu__button-block',
    },
  },
  data() {
    return {
      selectedCounter: 'counter1', // По умолчанию показываем counter1
      selectedWeight: null,
      optionCounts: [],
      totalPrice: 0,
      currentSlotName: '' // Holds the name of the currently selected slot
    };
  },
  computed: {
    weightOptions() {
      switch (this.title) {
        case 'Дженнифер':
          return [
            { label: '690 г.', value: 'small', price: 545 },
            { label: '1380 г.', value: 'large', price: 1065 },
          ];
        case 'Арканзас':
          return [
            { label: '690 г.', value: 'medium', price: 545  },
            { label: '1330 г.', value: 'large', price: 1065 },
          ];
        case 'Арканзас2':
          return [
            { label: '690 г.', value: 'medium', price: 545  },
            { label: '1330 г.', value: 'large', price: 1065 },
          ];
        case 'Мичиган':
            return [
            { label: '680 г.', value: 'medium', price: 550 },
            { label: '1360 г.', value: 'large', price: 995 },
        ];

        case 'Мичиган2':
            return [
            { label: '680 г.', value: 'medium', price: 550 },
            { label: '1360 г.', value: 'large', price: 995 },
        ];

        case 'Пепперони':
            return [
            { label: '690 г.', value: 'medium', price: 550 },
            { label: '1330 г.', value: 'large', price: 995 },
        ];

        case 'Пепперони2':
            return [
            { label: '690 г.', value: 'medium', price: 550 },
            { label: '1330 г.', value: 'large', price: 995 },
        ];

        case 'Джорджия':
            return [
            { label: '690 г.', value: 'medium', price: 550 },
            { label: '1330 г.', value: 'large', price: 995 },
        ];

        case 'Джорджия2':
            return [
            { label: '690 г.', value: 'medium', price: 550 },
            { label: '1330 г.', value: 'large', price: 995 },
        ];

        case 'Манхеттен':
            return [
            { label: '690 г.', value: 'medium', price: 550 },
            { label: '1330 г.', value: 'large', price: 975 },
        ];

        case 'Манхеттен2':
            return [
            { label: '690 г.', value: 'medium', price: 550 },
            { label: '1330 г.', value: 'large', price: 975 },
        ];

        case 'Манхеттен3':
            return [
            { label: '690 г.', value: 'medium', price: 550 },
            { label: '1330 г.', value: 'large', price: 975 },
        ];

        case 'Бери-пеки Нью-Джерси':
            return [
            {label: '300 г.', price: 545 },
        ];

        case 'Бери-пеки Мичиган':
            return [
            {label: '300г', price: 580 },
        ];

        case 'Бери-пеки Мичиган2':
            return [
            {label: '300г', price: 580 },
        ];

        case 'Бери-пеки Арканзас':
            return [
            {label: '300г', price: 495 },
        ];

        case 'Бери-пеки Арканзас2':
            return [
            {label: '300г', price: 495 },
        ];

        case 'Бери-пеки Арканзас3':
            return [
            {label: '300г', price: 495 },
        ];

        case 'Бери-пеки Манхэттен':
            return [
            {label: '300г', price: 495 },
        ];

        case 'Бери-пеки Дженифер':
            return [
            {label: '300г', price: 495 },
        ];

        case 'Бери-пеки Дженни':
            return [
            {label: '300г', price: 495 },
        ];

        case 'Наггетсы':
            return [
            {label: '300г', price: 187 },
        ];

        case 'Тортилья':
            return [
            {label: '300г', price: 157 },
        ];

        case 'Сухарики':
            return [
            {label: '300г', price: 87 },
        ];

        case 'Сухарики2':
            return [
            {label: '300г', price: 87 },
        ];


        case 'Сальса':
            return [
            { label: '30г', value: 'medium', price: 10 },
            { label: '60г', value: 'large', price: 35 },
        ];

        case 'Сальса2':
            return [
            { label: '30г', value: 'medium', price: 10 },
            { label: '60г', value: 'large', price: 35 },
        ];

        case 'Тар-Тар':
            return [
            { label: '30г', value: 'medium', price: 10 },
            { label: '60г', value: 'large', price: 35 },
        ];

        case 'Сырный':
            return [
            { label: '30г', value: 'medium', price: 10 },
            { label: '60г', value: 'large', price: 35 },
        ];

        case 'Кетчуп Майонез Сметана':
            return [
            { label: 'кетчуп', value: 'ketchup', price: 25 },
            { label: 'майонез', value: 'mayo', price: 25 },
            { label: 'сметана', value: 'smetana', price: 25 },
        ];


        case 'Кесадия':
            return [
            { label: '170 г.', value: 'medium', price: 100 },
            { label: '340 г.', value: 'large', price: 227 },
        ];

        case 'Кесадия2':
            return [
            { label: '170 г.', value: 'medium', price: 100 },
            { label: '340 г.', value: 'large', price: 227 },
        ];
        
        case 'Кесадия3':
            return [
            { label: '170 г.', value: 'medium', price: 100 },
            { label: '340 г.', value: 'large', price: 227 },
        ];

        case 'Кесадия4':
            return [
            { label: '170 г.', value: 'medium', price: 100 },
            { label: '340 г.', value: 'large', price: 227 },
        ];

        case 'Кесадия5':
            return [
            { label: '170 г.', value: 'medium', price: 100 },
            { label: '340 г.', value: 'large', price: 227 },
        ];

        case 'Кесадия-ролл':
            return [
            {label: '300г', price: 227 },
           
        ];

        case 'Энчиладос':
            return [
            { label: '680г', value: 'medium', price: 500 },
            { label: '1360г', value: 'large', price: 995 },
        ];

        case 'Лукас':
            return [
            {label: '300г', price: 112 },
           
        ];

        case 'Цезарь':
            return [
            {label: '300г', price: 120 },
           
        ];

        case 'Сомбреро':
            return [
            {label: '300г', price: 187 },
           
        ];

        default:
          return [];
      }
    },
  },
  mounted() {
    if (this.weightOptions.length > 0) {
      this.selectWeight(this.weightOptions[0].value, this.weightOptions[0].price, this.weightOptions[0].label);
      this.optionCounts = Array(this.weightOptions.length).fill(0);
    }
  },
  methods: {
    selectWeight(value, price) {
      this.selectedWeight = value;
      this.totalPrice = price;

      // Set the current slot name based on the selected weight option
      this.selectedCounter = this.selectedCounter === 'counter1' ? 'counter2' : 'counter1';
      
      this.$emit('update-price', { title: this.title, price });
    },
  },
};
</script>

<style lang="scss">
@import "./style";
</style>
