import _ from 'lodash';
import './style.css';

function component() {
  const todo = document.querySelector('.todo-placeholder');

  todo.innerHTML = _.join(['Hello', 'webpack'], ' ');
  todo.classList.add('hello');

  return todo;
}

document.body.appendChild(component());