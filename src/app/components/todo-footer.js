/**
 * Created by Kirill_Romanov1 on 1/11/2017.
 */
import React, {Component} from "react";
import {Link} from "react-router";
import classNames  from 'classnames';

export  default  class ToDoFooter extends Component {
  constructor(props) {
    super(props)
    this.todosModelService = window.toDoModelService;
    this.clearCompleted = this.clearCompleted.bind(this);


  }

  clearCompleted() {
    this.todosModelService.clearCompleted();
    alert(this.props.nowShowing);
  }
  render() {
    return (
      <div className="todo-list__footer">
        <span className="todo-list__info"><strong>{ this.todosModelService.getToDos().filter((todo) => !todo.completed).length}</strong>items left</span>
        <div className="todo-list__controls">
          <div className="tabs">
            <div className="tabs__item tabs__item--active"><Link to="/">All</Link></div>
            <div className="tabs__item"><Link to="/active">Active</Link></div>
            <div className="tabs__item"><Link to="/completed">Completed</Link></div>
          </div>
        </div>
        <button className="todo-list__clear-completed" onClick={this.clearCompleted}>Clear completed</button>
      </div>
    );
  }
}
