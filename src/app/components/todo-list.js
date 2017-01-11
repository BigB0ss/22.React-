/**
 * Created by Kirill_Romanov1 on 1/11/2017.
 */
import React, {Component} from 'react';
import ToDoItem from  './todo-item';
export default  class ToDoList extends Component {
  constructor(props) {
    super(props)
    this.todosModelService = window.toDoModelService;

  }

  render() {
    return (
      <div className="todo-list">
        <ToDoItem/>

      </div>
    );

    addHandler()
    {
      todo:this.todosModelService.addTodo();
      this.setState(todo);
    }
  }

}

