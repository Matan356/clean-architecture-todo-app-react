// hooks/useTodos.js
import { useState, useEffect } from "react";
import {
  fetchTodos,
  createTodo,
  updateTodo,
  deleteTodo,
} from "../domain/useCases/todoService";

export const useTodos = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadTodos = async () => {
      const todos = await fetchTodos();
      setTodos(todos);
      setLoading(false);
    };

    loadTodos();
  }, []);

  const addTodo = async (title) => {
    const newTodo = await createTodo({ title, completed: false });
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  const toggleTodo = async (id) => {
    const todo = todos.find((todo) => todo.id === id);
    const updatedTodo = await updateTodo({
      ...todo,
      completed: !todo.completed,
    });
    setTodos((prevTodos) =>
      prevTodos.map((todo) => (todo.id === id ? updatedTodo : todo))
    );
  };

  const removeTodo = async (id) => {
    await deleteTodo(id);
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return { todos, loading, addTodo, toggleTodo, removeTodo };
};
