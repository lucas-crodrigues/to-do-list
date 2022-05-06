import TodoList from './todolist.js';

export default class UI {
  static renderTasks() {
    const tasksContainer = document.querySelector('.todo-placeholder');
    TodoList.updateIds();
    tasksContainer.innerHTML = TodoList.markupAllTasks();
    UI.addEventListeners();
  }

  static addEventListeners = () => {
    const addTask = document.querySelector('form');
    addTask.addEventListener('submit', TodoList.addTask);
    addTask.addEventListener('submit', UI.renderTasks);

    const removeTask = Array.from(document.querySelectorAll('.task-list button'));
    removeTask.forEach((button) => {
      button.addEventListener('click', TodoList.removeTask);
      button.addEventListener('click', UI.renderTasks);
    });

    const updateTask = Array.from(document.querySelectorAll('.task-list .task-name'));
    updateTask.forEach((input) => {
      input.addEventListener('input', TodoList.updateTask);
    });

    document.querySelectorAll('.checkbox').forEach((box) => {
      box.addEventListener('change', TodoList.checkBox);
      box.addEventListener('change', UI.renderTasks);
    });

    document.querySelector('.clear-complete').addEventListener('click', TodoList.clearComplete);
    document.querySelector('.clear-complete').addEventListener('click', UI.renderTasks);

    document.querySelector('.head button').addEventListener('click', UI.renderTasks);
  }
}