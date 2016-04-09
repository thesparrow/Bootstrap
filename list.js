// collect the list of items in array 
var todos = ["Buy a hammock"];
//prompt user 
var input = prompt("What would you like to do?");

while (input !== "quit") {
    if (input === "list") {
        listTodos();
    } else if (input === "new") {
        addTodo();
    } else if (input === "delete") {
        deleteTodo();
    } else if (input === "quit") {
        break;
    }
    //ask again for input 
    input = prompt("What would you like to do?");
}

console.log("Ok you quit the app");


function listTodos() {
    console.log("***************");
    todos.forEach(function(todo, index) {
        console.log(index + ": " + todo);
    });
    console.log("***************");
}

function addTodo() {
    //as for new todo 
    var newTodo = prompt("Enter new todo");
    //add to array
    todos.push(newTodo);
    console.log("Added todo.")
}

function deleteTodo() {
    var input = prompt("Enter which todo to delete");
    var index = parseInt(input);
    if (Number.isInteger(index)) {
        var removed = todos.splice(index, 1);
        console.log(todos);
        console.log("We just removed: " + removed[0]);
    }
}
