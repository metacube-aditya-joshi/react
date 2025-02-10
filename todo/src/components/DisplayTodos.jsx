import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { filterTodos } from "../fucntionality/filterTodos";
import { todos } from "../data/todos.js";

function DisplayTodos({ todoList, setFilterForm }) {
  const { register, handleSubmit, resetForm, getValues } = useForm();
  const [data, setData] = useState([]);
  const [parameter, setParameter] = useState("title");
  const [key, setKey] = useState("");

  useEffect(() => {
    console.log("value changed:", parameter);
    console.log("data:", data);
  }, [parameter,data]);

  const filterData = () => {
    console.log("todoList:", todoList);
    const filteredData = filterTodos(todoList, parameter, key);
    setData(filteredData);
    console.log("Filtered data:", data);
    setFilterForm(false);
  };

  return (
    <div className="todoForm">
      <div>
        <select
          {...register("view", { required: true })}
          onChange={(e) => setParameter(e.target.value)}
        >
          <option value="title">title</option>
          <option value="status">status</option>
        </select>

        {parameter === "title" && (
          <input {...register("key", { required: true })} placeholder="text" />
        )}
        {parameter === "status" && (
          <select
            {...register("key", { required: true })}
            onChange={(e) => setKey(e.target.value)}
          >
            <option value="pending">pending</option>
            <option value="completed">completed</option>
          </select>
        )}
        <button onClick={filterData}>Click</button>
      </div>

      <div>
        {data.length > 0 ? (
          data.map((todo, index) => (
            <div key={index}>
              <p>{todo.title} - {todo.status}</p>
            </div>
          ))
        ) : (
          <p>No todos found.</p>
        )}
      </div>
    </div>
  );
}

export default DisplayTodos;
