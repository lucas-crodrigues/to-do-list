import TodoList from "./todolist.js";

export default class Add {
  static addTask = document.querySelector('.add-task');

  static addNewTask = (e) => {
    const input = e.target;

    e.preventDefault();

    const description = this.addTask.value;
    const newTask = TodoList.newTask({ description });
    
  }
}