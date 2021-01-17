let todos = ["item 1", "item 2", "item 3"];
function displayTodos (todolist) {
    console.log("My todos:", todolist);
}
displayTodos(todos);

function addTodo(todolist, todo) {
    todolist.push(todo);
    displayTodos(todolist);
}

addTodo(todos, "item 4");

function changeTodos(todolist, todo, position) {
    todolist[position] = todo;
    displayTodos(todolist);
}

changeTodos(todos, "item 2 updated", 1)

function deleteTodo(todolist, position) {
    todolist.splice(position, 1);
    displayTodos(todolist);
}

deleteTodo(todos, 1);
deleteTodo(todos, 1);
addTodo(todos, "last");
changeTodos(todos, "updated", 2);
