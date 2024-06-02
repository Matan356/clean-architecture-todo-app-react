/* eslint-disable react/prop-types */
// components/molecules/TodoItem.js
import Button from "../atoms/Button";

const TodoItem = ({ todo, onToggle, onDelete }) => {
  return (
    <div>
      <span
        style={{ textDecoration: todo.completed ? "line-through" : "none" }}
      >
        {todo.title}
      </span>
      <Button onClick={onToggle}>Toggle</Button>
      <Button onClick={onDelete}>Delete</Button>
    </div>
  );
};

export default TodoItem;
