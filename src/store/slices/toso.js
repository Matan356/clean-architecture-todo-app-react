// store/slices/todosSlice.js

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import TodoService from "../../domain/useCases/todoService";

const todoService = TodoService();

export const fetchTodos = createAsyncThunk("todos/fetchTodos", async () => {
  return await todoService.getTodos();
});

export const addTodo = createAsyncThunk("todos/addTodo", async (title) => {
  return await todoService.createTodo(title);
});

export const toggleTodoCompletion = createAsyncThunk(
  "todos/toggleTodoCompletion",
  async (id) => {
    return await todoService.toggleTodoCompletion(id);
  }
);

export const deleteTodo = createAsyncThunk("todos/deleteTodo", async (id) => {
  await todoService.deleteTodo(id);
  return id;
});

const todosSlice = createSlice({
  name: "todos",
  initialState: {
    items: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.items = action.payload;
        state.status = "succeeded";
      })
      .addCase(addTodo.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(toggleTodoCompletion.fulfilled, (state, action) => {
        const index = state.items.findIndex(
          (todo) => todo.id === action.payload.id
        );
        state.items[index] = action.payload;
      })
      .addCase(deleteTodo.fulfilled, (state, action) => {
        state.items = state.items.filter((todo) => todo.id !== action.payload);
      });
  },
});

export default todosSlice.reducer;
