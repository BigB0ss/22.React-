/**
 * Created by Kirill_Romanov1 on 1/11/2017.
 */
import React, {Component} from 'react';
import { Link } from 'react-router';

export  default  class ToDoFooter extends Component {
  constructor(props) {
    super(props)
    this.todosModelService = window.toDoModelService;

  }

  render() {
    return (
      <div className="todo-list__footer">
        <span className="todo-list__info"><strong>{ this.todosModelService.getToDos().length}</strong>items left</span>
        <div className="todo-list__controls">
          <div className="tabs">
            <div className="tabs__item tabs__item--active"><Link href="/">All</Link></div>
            <div className="tabs__item"><Link href="/active">Active</Link></div>
            <div className="tabs__item"><Link to="/completed">Completed</Link></div>
          </div>
        </div>
        <button className="todo-list__clear-completed">Clear completed</button>
      </div>
    );
  }
}
