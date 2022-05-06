let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

export default class TodoList {
  constructor(task, completed = false, id = null ) {
    this.taskName = task;
    this.completed = completed;
    this.id = id;
  }

  static addTask = (e) => {
    e.preventDefault();
    let itask = document.querySelector('.add-task').value;
    tasks.push({ taskName: itask, completed: false, id: tasks.length + 1 });
    localStorage.setItem('tasks', JSON.stringify(tasks));
    document.querySelector('.add-task').value = '';
    TodoList.markupAllTasks();
  }

  static removeTask = (e) => {
    const button = e.target;
    const buttonID = button.id;
    console.log('my id is ' + buttonID);
    console.log('and my id is ' + tasks[buttonID - 1].id)
    tasks.splice(buttonID - 1, 1);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    console.log(localStorage);
    return tasks;
  }

  static getLocalStorage = () => {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    return tasks;
  }

  static markupAllTasks() {
    let allTasks = '';
    this.getLocalStorage().forEach((task, id) => {
      allTasks += `<li class="task-list">
                              <input type="checkbox">
                              <input class="task-name" type="text" value="${task.taskName}"></input>
                              <button type="button" class="remove" id="${task.id}"><img src="8ae4449c8b41ee3a8178.svg" alt=""  id="${task.id}"></button>
                            </li>`
    });
    return allTasks;
  }

  static updateIds() {
    console.log('im updating')
    let tasks = this.getLocalStorage();
    console.log(tasks);
    for (let i = 0; i < tasks.length; i++) {
      tasks[i].id = i + 1;
    }
    localStorage.setItem('tasks', JSON.stringify(tasks));
    console.log(localStorage);
    return tasks;
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