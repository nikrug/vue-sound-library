<template>
  <div>
    <Cart 
      :cart="cart" 
      @remove-item="removeFromCart" 
      @update-cart="updateCart" 
    />
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
  mounted() {
    this.loadCart();
  },
  methods: {
    async loadCart() {
      try {
        const response = await axios.get('http://localhost:3000/cart');
        // Фильтруем пустые или некорректные элементы
        this.cart = response.data.filter(item => item.id && item.quantity > 0); 
      } catch (error) {
        console.error('Error loading cart:', error);
      }
    },

    updateCart(updatedItem) {
      const existingItem = this.cart.find(item => item.id === updatedItem.id);
      if (existingItem) {
        existingItem.quantity = updatedItem.quantity;
        this.updateDatabase(existingItem);
      } else {
        this.cart.push(updatedItem);
        this.addToDatabase(updatedItem);
      }
    },
    
    removeFromCart(itemId) {
      this.cart = this.cart.filter(item => item.id !== itemId);
      this.deleteFromDatabase(itemId);
    },
    
    async addToDatabase(product) {
      if (product && product.id) { // Проверка на корректность продукта
        try {
          await axios.post('http://localhost:3000/cart', { ...product });
          console.log('Product added to cart');
        } catch (error) {
          console.error('Error adding product to cart:', error);
        }
      }
    },
    
    async updateDatabase(item) {
      try {
        await axios.put(`http://localhost:3000/cart/${item.id}`, item);
        console.log('Product updated in cart');
      } catch (error) {
        console.error('Error updating product in cart:', error);
      }
    },
    
    async deleteFromDatabase(itemId) {
      try {
        await axios.delete(`http://localhost:3000/cart/${itemId}`);
        console.log('Product removed from cart');
      } catch (error) {
        console.error('Error removing product from cart:', error);
      }
    }
  }
};
</script>

<style scoped>
/* Add your styles here */
</style>
