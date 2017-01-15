/**
 * Created by Kirill_Romanov1 on 1/11/2017.
 */
import React, {Component} from "react";
import ToDoItem from './todo-item'
export default class ToDoList extends Component {

  render() {
    let todos;
    switch (this.props.nowShowing) {
      case 'completed':
        todos = this
          .props
          .todos
          .filter((todo) => todo.completed);
        break;
      case 'active':
        todos = this
          .props
          .todos
          .filter((todo) => !todo.completed);
        break;
      default:
        todos = this.props.todos;
    }
    return (
      <div className="todo-list">
        {todos.map((elem) => {
          return < ToDoItem key = {
            elem.id
          }
          todo = {
            elem
          }
          deleteToDo = {
            this.props.deleteToDo
          }
          toggle = {
            this.props.toggle
          } />;
        }).reverse()}
      </div>
    )
  }
}