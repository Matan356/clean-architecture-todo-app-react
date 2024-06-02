// domain/models/Todo.js

export const createTodo = (id, title, completed = false) => ({
    id,
    title,
    completed,
  });
  