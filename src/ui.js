import TodoList from './todolist.js';

export default class UI {
  static renderTasks() {
    const tasksContainer = document.querySelector('.todo-placeholder');
    tasksContainer.innerHTML = TodoList.markupAllTasks();
    TodoList.updateIds();
    UI.addEventListeners();
    console.log('im rendering');
  }

  static addEventListeners = () => {
    const addTask = document.querySelector('form');
    addTask.addEventListener('submit', TodoList.addTask);
    addTask.addEventListener('submit', UI.renderTasks);

    const removeTask = Array.from(document.querySelectorAll('.task-list button'));
    removeTask.forEach((button) => {
      button.addEventListener('click', TodoList.removeTask);
      button.addEventListener('click', UI.renderTasks);
    })
  }


  // static #toDo = document.querySelector('.todo-placeholder');

  // static #tasksTemplate = document.querySelector('li');

  // static addTask = document.querySelector('.add-task');

  // static displayEach(task) {
  //   const taskElement = UI.#tasksTemplate.cloneNode(true);
  //   taskElement.querySelector('input').checked = task.completed;
  //   taskElement.querySelector('label').innerHTML = task.description;
  //   UI.#toDo.appendChild(taskElement);
  // }

  // static displayList() {
  //   const tasks = TodoList.getTodoList();
  //   tasks.forEach((task) => UI.displayEach(task));
  // }
}