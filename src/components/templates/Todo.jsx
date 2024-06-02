// pages/TodoPage.js
import { useTodos } from '../hooks/useTodos';
import TodoForm from '../components/organisms/TodoForm';
import TodoList from '../components/molecules/TodoList';

const TodoPage = () => {
  const { todos, addTodo, toggleTodo, deleteTodo } = useTodos();

  return (
    <div>
      <h1>Todo List</h1>
      <TodoForm onAdd={addTodo} />
      <TodoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} />
    </div>
  );
};

export default TodoPage;
