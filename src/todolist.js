export default class TodoList {
  static #todoList = [
    { description: 'something', completed: true, index: 1},
    { description: 'something else', completed: false, index: 2},
    { description: 'something important', completed: true, index: 3},
    { description: 'finish the day', completed: false, index: 4},
  ]

  static getTodoList() {
    return this.#todoList;
  }
}