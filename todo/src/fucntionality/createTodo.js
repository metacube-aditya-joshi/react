import { todo } from "../todo";
export function createTodo(data){
     const newTodo = new todo(data.todoText,data.status);
     todo.id++;
 
     return newTodo;
}