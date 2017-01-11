/**
 * Created by Kirill_Romanov1 on 1/11/2017.
 */
import React, {Component} from 'react';

export default  class ToDoItem extends  Component{
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="todo-item todo-item--editing">
        <div className="todo-item__toggle"><input type="checkbox" value="on" /></div>
        <div className="todo-item__text">
          <div className="editable-text">
            <div className="editable-text__out"><label>put task</label></div>
            <div className="editable-text__input"><input className="edit" value="put task" /></div>
          </div>
        </div>
        <div className="todo-item__remover">
          <button className="destroy" />
        </div>
      </div>
    );
  }
}
