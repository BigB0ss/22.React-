import React, {Component} from 'react';
import ToDoFooter  from './todo-footer';
import ToDoList from'./todo-list'

export default class ToDoComponent extends Component {



  constructor(props) {
    super(props);
    this.todosModelService = window.toDoModelService;
    /*
     this.state = {
     todos: this.toDoModelService.getToDos(),
     nowShowing: this.props.route.nowShowing
     }*/

  }

  render() {
    return (
      <div className="todo-app">
        <div className="todo-app__header">
          <div className="todo-app__title">React ToDo App</div>
          <input type="checkbox" className="todo-app__toggle-all" value="on" />
          <input className="todo-app__new-todo" placeholder="What needs to be done?" value=""/></div>
        <div className="todo-app__content">
          <div><ToDoList/></div>
          <div><ToDoFooter/></div>
        </div>
      </div>
    );
  }
}
ToDoComponent.propTypes = {};
