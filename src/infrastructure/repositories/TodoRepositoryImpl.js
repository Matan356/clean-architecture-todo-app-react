// infrastructure/repositories/TodoRepositoryImpl.js

import { fetchTodos, createTodo, updateTodo, deleteTodo } from '../../services/api';

let todos = [];

const TodoRepositoryImpl = () => ({
  async add(todo) {
    const createdTodo = await createTodo(todo);
    todos.push(createdTodo);
    return createdTodo;
  },

  async getAll() {
    const fetchedTodos = await fetchTodos();
    todos = fetchedTodos;
    return fetchedTodos;
  },

  async getById(id) {
    const todo = todos.find(todo => todo.id === id);
    if (todo) {
      return todo;
    } else {
      const fetchedTodos = await fetchTodos();
      return fetchedTodos.find(todo => todo.id === id);
    }
  },

  async update(updatedTodo) {
    const todoIndex = todos.findIndex(todo => todo.id === updatedTodo.id);
    if (todoIndex !== -1) {
      todos[todoIndex] = updatedTodo;
      await updateTodo(updatedTodo);
      return updatedTodo;
    }
    throw new Error('Todo not found');
  },

  async delete(id) {
    const todoIndex = todos.findIndex(todo => todo.id === id);
    if (todoIndex !== -1) {
      todos.splice(todoIndex, 1);
      await deleteTodo(id);
      return true;
    }
    throw new Error('Todo not found');
  }
});

export default TodoRepositoryImpl;
