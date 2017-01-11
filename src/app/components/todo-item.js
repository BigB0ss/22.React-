/**
 * Created by Kirill_Romanov1 on 1/11/2017.
 */
import React, {Component} from 'react';

export default  class ToDoItem extends  Component{

  constructor(props) {
    super(props)
    this.todosModelService = window.toDoModelService;
  }
  render() {
    return (
      <div className="todo-item todo-item--editing">
        <div className="todo-item__toggle"><input type="checkbox" value="on" /></div>
        <div className="todo-item__text">
          <div className="editable-text">
            <div className="editable-text__out"><label>Push changes to Repo</label></div>
            <div className="editable-text__input"><input className="edit" /></div>
          </div>
        </div>
        <div className="todo-item__remover">
          <button className="destroy"  />
        </div>
      </div>
    );
  }
}
