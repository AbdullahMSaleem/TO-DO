import inquirer from "inquirer";
let todos = [];
let condition = true;
while (condition) {
    let taskadd = await inquirer.prompt([
        {
            name: "todo",
            type: "input",
            message: "what you want to add in your list?"
        },
        {
            name: "addmore",
            type: "confirm",
            message: "Do you want to add more?"
        }
    ]);
    todos.push(taskadd.todo);
    condition = taskadd.addmore;
    console.log(todos);
}
