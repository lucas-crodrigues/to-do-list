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
    let tasks = this.getLocalStorage();
    tasks.push({ taskName: itask, completed: false, id: tasks.length + 1 });
    localStorage.setItem('tasks', JSON.stringify(tasks));
    document.querySelector('.add-task').value = '';
    TodoList.markupAllTasks();
  }

  static removeTask = (e) => {
    let tasks = this.getLocalStorage();
    const button = e.target;
    const buttonID = button.id;
    tasks.splice(buttonID - 1, 1);
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
      allTasks += `<li class="task-list">
                              <input type="checkbox">
                              <input class="task-name"  id="i_${task.id}" type="text" value="${task.taskName}"></input>
                              <button type="button" class="remove" id="${task.id}"><img src="8ae4449c8b41ee3a8178.svg" alt=""  id="${task.id}"></button>
                            </li>`
    });
    return allTasks;
  }

  static updateIds() {
    let tasks = this.getLocalStorage();
    for (let i = 0; i < tasks.length; i++) {
      tasks[i].id = i + 1;
    }
    localStorage.setItem('tasks', JSON.stringify(tasks));
    return tasks;
  }

  static updateTask = (e) => {
    let tasks = this.getLocalStorage();
    const task = e.target;
    let index = Number(task.id.split('_')[1]);
    tasks[index - 1].taskName = e.target.value;
    localStorage.setItem('tasks', JSON.stringify(tasks));
    return tasks;
  }
}