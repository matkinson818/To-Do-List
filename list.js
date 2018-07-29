var todos = ["Buy Bread"];

var input = prompt("What would you like to do?");

while (input !== "quit") {

    if (input === "list") {
        console.log (todos);
    } else if (input === "new") {
       var newTodo = prompt("Please enter new task");
       todos.push (newTodo);
    }
    
 input = prompt("What would you like to?");    
}

console.log ("GoodBye");