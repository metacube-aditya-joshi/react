import React from "react";

function Todo({ name,status }) {
  return (
    <div className="todoCont">
      <div>{name}</div>
      <div>{status}</div>
    </div>
  );
}

export default Todo;
