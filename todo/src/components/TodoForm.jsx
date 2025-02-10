import React from "react";
import { useForm } from "react-hook-form";
import { createTodo } from "../fucntionality/createTodo.js";
import Button from '@mui/material/Button';
function TodoForm({ todoList, setTodoList, setShowTodoForm }) {
  const { register, handleSubmit, resetField } = useForm();
  const onSubmit = handleSubmit((data) => {
    resetField("todoText");
    resetField("status");
    setTodoList([...todoList, data]);
    setShowTodoForm(false);
    createTodo(data);
  });
  return (
    <form>
      <input
        {...register("todoText", { required: true })}
        type="text"
        placeholder="Todo"
      />
      <select {...register("status", { required: true })}>
        <option value="">Select Status</option>
        <option value="pending">Pending</option>
        <option value="completed">Completed</option>
      </select>
      <Button variant="contained" onClick={onSubmit}>Create</Button>
    </form>
  );
}

export default TodoForm;
