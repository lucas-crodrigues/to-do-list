import TodoList from './todolist.js';

describe('Add and Remove', () => {
  test('addTask', () => {
    document.body.innerHTML = `
        <form action="submit">
            <div>
                <input class="add-task" type="text" placeholder="Add to your list..." required value="Wash dishes">
                <button type="submit"><img src="38d5f795970601b2c451.svg" alt=""></button>
            </div>
        </form>`;
    TodoList.addTask({ 
      preventDefault: () => {
  }});
    const list = document.querySelectorAll('.task-list');
    expect(list).toHaveLength(1);
  })
})