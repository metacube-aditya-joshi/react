import { useState } from "react";
import "./App.css";
import {Routes,Route, Router} from 'react-router'
import Home from "./components/Home";
import TodoForm from "./components/TodoForm";
import FilterTodos from "./components/FilterTodos";
import { todo } from "./todo";
function App() {
 
  const [todoList, setTodoList] = useState([]);
  return (
   
    <Routes>
      <Route index element={<Home todoList={todoList}/>}/>
      <Route path="todoForm" element={<TodoForm todoList={todoList} setTodoList={setTodoList}/>}/>
      <Route path="/filterTodos" element={<FilterTodos todoList={todoList}/>}/>
    </Routes>
  );
}

export default App;
