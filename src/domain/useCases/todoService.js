// domain/useCases/TodoService.js

import TodoRepositoryImpl from '../../infrastructure/repositories/TodoRepositoryImpl';
import { createTodo } from '../models/todo';

const TodoService = (todoRepository = TodoRepositoryImpl()) => ({
  async createTodo(title) {
    const newTodo = createTodo(Date.now().toString(), title);
    await todoRepository.add(newTodo);
    return newTodo;
  },

  async getTodos() {
    return await todoRepository.getAll();
  },

  async toggleTodoCompletion(id) {
    const todo = await todoRepository.getById(id);
    if (todo) {
      const updatedTodo = { ...todo, completed: !todo.completed };
      await todoRepository.update(updatedTodo);
      return updatedTodo;
    }
    throw new Error('Todo not found');
  },

  async deleteTodo(id) {
    await todoRepository.delete(id);
  }
});

export default TodoService;
