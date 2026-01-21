<template>
  <div class="cart-list">
    <Cart :cart="cart" />
  </div>
</template>

<script>
import axios from 'axios';

import Cart from './Cart.vue';

export default {
  components: {
    Cart
  },
  data() {
    return {
      cart: []
    };
  },
  methods: {
    async fetchCart() {
      try {
        const response = await axios.get('http://localhost:3000/cart');
        this.cart = response.data;
      } catch (error) {
        console.error('Ошибка получения корзины:', error);
      }
    },
    
    addToCart(product) {
      this.cart.push(product);
      axios.post('http://localhost:3000/cart', product) // Сохранение товара на сервер
        .then(response => {
          console.log('Товар добавлен в корзину:', response.data);
        })
        .catch(error => {
          console.error('Ошибка при добавлении товара в корзину:', error);
        });
    },
    
    async updateCartInDB() {
      try {
        await axios.put('http://localhost:3000/cart', this.cart);
      } catch (error) {
        console.error('Ошибка обновления корзины:', error);
      }
    }
  },
  created() {
    this.fetchCart();
  }
};
</script>
