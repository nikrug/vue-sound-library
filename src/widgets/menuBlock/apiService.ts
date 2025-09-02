// apiService.ts
import axios from 'axios';

export async function getPizzas() {
  const response = await axios.get('http://localhost:3000/pizzas');
  return response.data; // Предполагается, что данные приходят в массиве
}