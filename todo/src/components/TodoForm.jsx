import React from "react";
import { useForm } from "react-hook-form";
import { createTodo } from "../fucntionality/createTodo.js";
import Button from '@mui/material/Button';
import { useNavigate } from "react-router";
function TodoForm({ todoList, setTodoList }) {
  const { register, handleSubmit, resetField } = useForm();
  const navigate=useNavigate();
  const onSubmit = handleSubmit((data) => {
   
    resetField("todoText");
    resetField("status");
    setTodoList([...todoList, data]);
    navigate('/');
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
