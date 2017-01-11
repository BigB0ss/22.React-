/**
 * Created by Kirill_Romanov1 on 1/11/2017.
 */
import React, {Component} from 'react';
export  default  class ToDoFooter extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="todo-list__footer">
        <span className="todo-list__info"><strong>2</strong>items left</span>
        <div className="todo-list__controls">
          <div className="tabs">
            <div className="tabs__item tabs__item--active"><a href="/">All</a></div>
            <div className="tabs__item"><a href="/active">Active</a></div>
            <div className="tabs__item"><a href="/completed">Completed</a></div>
          </div>
        </div>
        <button className="todo-list__clear-completed">Clear completed</button>
      </div>
    );
  }
}
