import { todo } from "../todo";
import { todos } from "../data/todos";
export function createTodo(data){
     const newTodo = new todo(data.todoText,data.status);
     todo.id++;
     todos.push(newTodo);
     console.log(todos);
     console.log(newTodo);
     return newTodo;
}