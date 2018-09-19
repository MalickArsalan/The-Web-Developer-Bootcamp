// .forEach takes a callback function, that callback function is expected to have at least 1, but up to 3, arguments. 
// This is how .forEach was designed.

// The arguments are in a specific order:
// - The first one represents each element in the array (per loop iteration) 
//   that .forEach was called on.
// - The second represents the index of said element.
// - The third represents the array that .forEach was called on 
//   (it will be the same for every iteration of the loop).

let todos = [];

let input = prompt("What would you like to do?");
while (input!=="quit") {
    // handle input
    if (input === "list"){
       listTodos();
    } else if (input === "new") {
        addTodos();
    }else if (input === "delete"){
        deleteTodos();
    }
    //ask again for new input
    input = prompt("What would you like to do?");
}
console.log("OK, YOU QUIT THE APP");

function listTodos(){
    console.log("**********");
    todos.forEach(function(todo,index){
        // todos.indexOf(todo) One option to acive Todo List Numbers
        console.log(index+1 + ": " + todo);
    });
    console.log("**********");
    // console.log(todos);   
}
function addTodos(){
    //ask for new todo
    let newTodo = prompt("Enter new todo");
    //add to todos array
    todos.push(newTodo);
    console.log("Added Todo");
}
function deleteTodos(){
    // ask for index to be deleted
    let index = prompt("Enter index of Todo to delete");
    // delete that todo
    // splice()
    todos.splice(index-1,1);
    console.log("Deleted Todo");
}