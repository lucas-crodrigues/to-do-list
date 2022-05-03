import TodoList from "./todolist";

export default class UI {
  static #toDo = document.querySelector('.todo-placeholder');
  static #tasksTemplate = document.querySelector('li');

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