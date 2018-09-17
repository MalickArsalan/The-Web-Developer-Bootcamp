let todos = [];

let input = prompt("What would you like to do?");
while (input!=="quit") {
    if (input === "list") {
        console.log(todos);
    } else if (input === "list") {
        //ask for new todo
        let newTodo = prompt("Enter new todo");
        //add to todos array
        todos.push(newTodo);
    }
    //ask again for new input
    input = prompt("What would you like to do?");
}
console.log("OK, YOU QUIT THE APP");