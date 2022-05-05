let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

export default class TodoList {
  constructor(task) {
    this.taskName = task;
    this.completed = false;
    this.id = tasks.length + 1;
  }

  static addTask = (e) => {
    e.preventDefault();
    const itask = document.querySelector('.add-task').value;
    tasks.push({ taskName: itask, completed: false, id: tasks.length + 1 });
    localStorage.setItem('tasks', JSON.stringify(tasks));
    itask = '';
    TodoList.markupAllTasks();
  }

  static removeTask = (e) => {
    const button = e.target;
    // const taskIndex = Number(button.id.split('_')[1]);
    tasks = tasks.filter((task, id) => id !== button.id);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    return tasks;
  }

  static getLocalStorage = () => {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    return tasks;
  }

  static markupAllTasks() {
    let allTasks = '';
    this.getLocalStorage().forEach((task, id) => {
      allTasks += `<li>
                              <input type="checkbox">
                              <label>${task.taskName}</label>
                              <button type="button" class="remove-task" id="${task.id}"><img src="8ae4449c8b41ee3a8178.svg" alt=""></button>
                            </li>`
    });
    return allTasks;
  }

  // static #todoList = []

  // static getTodoList() {
  //   return this.#todoList;
  // }

  // static newTask = (task) => {
  //   const index = this.#todoList.length + 1;
  //   const newTask = { ...task, completed: false, index };
  //   this.#todoList.push(newTask);
  //   return newTask;
  // }
}