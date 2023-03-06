let input = prompt("What would you like to do?");
let todos = ['Collect Notes', 'Prepare for Exams', 'Contribute on Open Source'];
while (input.toLowerCase() !== 'exit' && input.toLowerCase() !== 'e') {
    if (input.toLowerCase() === 'list') {
        console.log('***********')
        for (let i = 0; i < todos.length; i++) {
            console.log(`${i}: ${todos[i]}`);
        }
        console.log('***********')
    } else if (input.toLowerCase() === 'add') {
        const newTodo = prompt('What is new todo?')
        todos.push(newTodo);
        console.log(`${newTodo} added to the list!`)
    } else if (input.toLowerCase() === 'remove') {
        const index = prompt('Ok, what do you want to remove or enter index of that todo')
        for (let i = 0; i < todos.length; i++) {
            if (index.toLowerCase() === todos[i].toLowerCase()) {
                console.log(`${todos[i]} is removed!`);
                todos.splice(index, 1);
                console.log(todos)
            }
        }
        input = prompt("What would you like to do?");
    }
}
console.log("Ok, you exited!!")
