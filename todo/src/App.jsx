import { useState } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import { todos } from "./data/todos.js";
import Todo from "./components/Todo";
import DisplayTodos from "./components/DisplayTodos";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import FilterAltIcon from '@mui/icons-material/FilterAlt';
function App() {
  const [todoList, setTodoList] = useState([]);
  const [showTodoForm, setShowTodoForm] = useState(false);
  const [filterForm,setFilterForm]=useState(false);
  const displayTodoForm = () => {
    setShowTodoForm(!showTodoForm);
  };
  const displayFilter=()=>{
    setFilterForm(!filterForm);
  };
  return (
    <>
      {todos.map((todo) => {
        return <Todo todo={todo.name} status={todo.status} />;
      })}
      <AddCircleIcon onClick={displayTodoForm} />
      {showTodoForm && (
        <TodoForm todoList={todoList} setTodoList={setTodoList} setShowTodoForm={setShowTodoForm} />
      )}
      <FilterAltIcon onClick={displayFilter}/>
      {console.log(todoList)}
      {filterForm && <DisplayTodos todoList={todoList} setFilterForm={setFilterForm} />}
    </>
  );
}

export default App;
