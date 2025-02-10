export function filterTodos(todos, param, key) {
  console.log("todos " + JSON.stringify(todos, null, 2) + "\nparam:" + param + "\nkey:" + key);
  return todos.filter((todo) => todo[param] === key);
}
