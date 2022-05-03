export default class TodoList {
  static #todoList = [
    { description: 'aaa', completed: true, index: 1},
    { description: 'aaa', completed: false, index: 2},
    { description: 'aaa', completed: true, index: 3},
    { description: 'aaa', completed: false, index: 4},
  ]

  static getTodoList() {
    return this.#todoList;
  }
}