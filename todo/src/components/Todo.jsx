import React from "react";

function Todo({ todo,status }) {
  return (
    <div>
      <div>{todo}</div>
      <div>{status}</div>
    </div>
  );
}

export default Todo;
