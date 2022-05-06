import TodoList from './todolist.js';

export default class UI {
  static renderTasks() {
    const tasksContainer = document.querySelector('.todo-placeholder');
    TodoList.updateIds();
    tasksContainer.innerHTML = TodoList.markupAllTasks();
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

    const updateTask = Array.from(document.querySelectorAll('.task-list .task-name'));
    console.log('im here')
    console.log(updateTask);
    updateTask.forEach((input) => {
      input.addEventListener('input', TodoList.updateTask);
    })
  }
}