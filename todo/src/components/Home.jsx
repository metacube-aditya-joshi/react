import React from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { useNavigate } from "react-router";
import Todo from "./Todo.jsx";
function Home({ todoList }) {
  const navigate = useNavigate();

  function handleNavigationForm() {
    navigate("/todoForm");
  }

  function handleNavigationFilter() {
    navigate("/filterTodos");
  }

  return (
    <div className="body">
      <div className="nav">
        <AddCircleIcon onClick={handleNavigationForm} />

        <FilterAltIcon onClick={handleNavigationFilter} />
      </div>
      <div className="todoDisplayArea">
        {todoList.map((todo,index) => {
          return <Todo index={index} name={todo.todoText} status={todo.status} />;
        })}
      </div>
    </div>
  );
}

export default Home;
