import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';

import './app/styles/todo-app.css';
import './index.css';
import './app/styles/todo-item.css';
import './app/styles/todo-list-footer.css';
import router from './router';
import ToDoModelService from './app/services/todo-model-service';

window.toDoModelService = new ToDoModelService('react-todos');

ReactDOM.render(
  router,
  document.getElementById('root')
);
