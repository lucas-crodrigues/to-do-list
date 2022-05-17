import './style.css';
import UI from './ui.js';
import Add from './art/add.svg';
import More from './art/more.svg';
import Refresh from './art/refresh.svg';
import Delete from './art/delete.svg';

window.addEventListener('DOMContentLoaded', () => {
  UI.renderTasks();
  return Add, More, Refresh, Delete; // eslint-disable-line no-sequences
});
