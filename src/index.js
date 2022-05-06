import './style.css';
import UI from './ui.js';
import Add from './art/add.svg';
import More from './art/more.svg';
import Refresh from './art/refresh.svg';

window.addEventListener('DOMContentLoaded', () => {
  UI.renderTasks();
});

function component() {
  const element = document.createElement('div');

  element.classList.add('hide');

  const myAdd = new Image();
  const myMore = new Image();
  const myRefresh = new Image();

  myAdd.src = Add;
  myMore.src = More;
  myRefresh.src = Refresh;

  element.appendChild(myAdd);
  element.appendChild(myMore);
  element.appendChild(myRefresh);

  return element;
}

document.body.appendChild(component());