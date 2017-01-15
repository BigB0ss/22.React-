import React, {Component} from "react";
import {Link} from "react-router";
import classNames from 'classnames';

export default class ToDoFooter extends Component {
  constructor(props) {
    super(props)
    this.todosModelService = window.toDoModelService;
    this.clearCompleted = this
      .clearCompleted
      .bind(this);
  }
  clearCompleted() {
    this
      .todosModelService
      .clearCompleted();
  }

  render() {
    return (
      <div className="todo-list__footer">
        <span className="todo-list__info">
          <strong>{this
              .props
              .todos
              .filter((todo) => !todo.completed)
              .length}</strong>items left</span>
        <div className="todo-list__controls">
          <div className="tabs">
            <div
              className={classNames("tabs__item", {
              "tabs__item--active": (this.props.nowShowing == "all")
            })}>
              <Link to="/">All</Link>
            </div>
            <div
              className={classNames("tabs__item", {
              "tabs__item--active": (this.props.nowShowing == "active")
            })}>
              <Link to="/active">Active</Link>
            </div>
            <div
              className={classNames("tabs__item", {
              "tabs__item--active": (this.props.nowShowing == "completed")
            })}>
              <Link to="/completed">Completed</Link>
            </div>
          </div>
        </div>
        {this
          .props
          .todos
          .filter((todo) => todo.completed)
          .length > 0
          ? <button className="todo-list__clear-completed" onClick={this.clearCompleted}>Clear completed</button>
          : ""}
      </div>
    );
  }
}