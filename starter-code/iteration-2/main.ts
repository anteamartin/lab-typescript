// Add the reference to the "TodoInterface"
import { Risto } from './todoInterface'
// 1. Create a class Todo that implements the Interface created before.
class Todo implements Risto {
    myArray: Array<string> = [];
    
    constructor() {}
// 2. Create a function to add a task in to the array, call it `addTask`, the function has to accept a string and don't have to return anything.
addTask(task: string) :number {
        this.myArray.push(task)
        console.log
        (`========== NEW TASK ========== 
        ${task}`);
        return this.myArray.length;
    }
    // 3. Create a function to list all tasks, it must show in the console de task.
    listAllTasks() :void {
        this.myArray.forEach(function(task) {
            console.log(task);
        })
    }
    // 4. Create a function to delete a task, you must find the task inside the array and delete it.
    deleteTask(task: string) :number {
        let deleteIndex = this.myArray.indexOf(task);
        if(deleteIndex !== -1){
            this.myArray.splice(deleteIndex, 1);
            console.log
            (`========== TASK REMOVED ==========
            ${task}`);
            }
            return this.myArray.length;
        }
    }

// Execution
let myTodos = new Todo();
console.log("Number of items:", myTodos.addTask('This is our first task'));
console.log("Number of items:", myTodos.addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 3!! 🤓'));
myTodos.listAllTasks();
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 2!! 🤓'));
myTodos.listAllTasks();
