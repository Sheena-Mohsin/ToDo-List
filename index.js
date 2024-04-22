#! /usr/bin/env node
import inquirer from "inquirer";
let todos = [];
let condition = true;
while (condition === true) {
    let options = await inquirer.prompt([{
            type: "list",
            name: "userOption",
            message: "select an option",
            choices: ["Add", "Remove", "Updatelist", "Viewlist"]
        }]);
    if (options.userOption === "Add") {
        let optionAns = await inquirer.prompt([{
                type: "input",
                name: "userAns",
                message: "Write something to add in the list"
            }]);
        if (optionAns.userAns !== '') {
            todos.push(optionAns.userAns);
            console.log(todos);
        }
        else
            console.log("Please write something to add in the list");
    }
    else if (options.userOption === "Remove") {
        let remove = await inquirer.prompt([{
                type: "list",
                name: "removeItem",
                message: "select the item to remove",
                choices: todos
            }]);
        let removeIndex = todos.indexOf(remove.removeItem);
        if (removeIndex >= 0) {
            todos.splice(removeIndex, 1);
            console.log("You removed: ", remove.removeItem);
            console.log(todos);
        }
    }
    else if (options.userOption === "Updatelist") {
        let update = await inquirer.prompt([{
                name: "usrInput",
                type: "list",
                message: "Select word you want to update",
                choices: todos
            },
            { name: "task",
                type: "input",
                message: "Now enter new name in the list"
            }
        ]);
        const indexToUpdate = todos.indexOf(update.usrInput);
        if (indexToUpdate !== -1) {
            todos[indexToUpdate] = update.task;
            console.log(`You updated "${update.usrInput}" to "${update.task}".`);
            console.log(todos);
        }
    }
    else if (options.userOption === "Viewlist") {
        console.log(todos);
    }
    let user = await inquirer.prompt([{
            type: "confirm",
            name: "selection",
            message: "Do you want to continue?",
            default: true
        }]);
    if (user.selection === false) {
        condition = false;
    }
}
;
console.log("Thanks for using ToDo List!");
