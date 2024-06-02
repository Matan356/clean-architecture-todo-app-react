/* eslint-disable react/prop-types */
// components/organisms/TodoForm.js
import { useState } from "react";
import Input from "../atoms/Input";
import Button from "../atoms/Button";

const TodoForm = ({ onAdd }) => {
  const [title, setTitle] = useState("");

  const handleAdd = () => {
    if (title.trim()) {
      onAdd(title);
      setTitle("");
    }
  };

  return (
    <div>
      <Input value={title} onChange={(e) => setTitle(e.target.value)} />
      <Button onClick={handleAdd}>Add Todo</Button>
    </div>
  );
};

export default TodoForm;
