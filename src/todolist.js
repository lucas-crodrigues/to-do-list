export default class TodoList {
  static #todoList = []

  static getTodoList() {
    return this.#todoList;
  }

  static newTask = (task) => {
    const index = this.#todoList.length + 1;
    const newTask = { ...task, completed: false, index };
    this.#todoList.push(newTask);
    return newTask;
  }
}