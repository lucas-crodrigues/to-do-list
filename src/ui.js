import TodoList from './todolist.js';

export default class UI {
  static #toDo = document.querySelector('.todo-placeholder');

  static #tasksTemplate = document.querySelector('li');

  static addTask = document.querySelector('.add-task');

  static displayEach(task) {
    const taskElement = UI.#tasksTemplate.cloneNode(true);
    taskElement.querySelector('input').checked = task.completed;
    taskElement.querySelector('label').innerHTML = task.description;
    UI.#toDo.appendChild(taskElement);
  }

  static displayList() {
    const tasks = TodoList.getTodoList();
    tasks.forEach((task) => UI.displayEach(task));
  }
}