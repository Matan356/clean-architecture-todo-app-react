// services/api.js
import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com/todos';

export const fetchTodos = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const createTodo = async (todo) => {
  const response = await axios.post(API_URL, todo);
  return response.data;
};

export const updateTodo = async (todo) => {
  const response = await axios.put(`${API_URL}/${todo.id}`, todo);
  return response.data;
};

export const deleteTodo = async (id) => {
  await axios.delete(`${API_URL}/${id}`);
};
