/**
 * Created by Kirill_Romanov1 on 1/11/2017.
 */
import React, {Component} from "react";



export default  class ToDoItem extends Component {

  constructor(props) {
    super(props);
    this.todosModelService = window.toDoModelService;
    this.state = {
      editing: false,
      completed: this.props.todo.completed

    }
    this.doubleClicked=this.doubleClicked.bind(this);
  }


  deleteToDo() {
    this.props.deleteToDo(this.props.todo)
  }

  toggle() {
    if (!this.props.todo.completed) {
      this.setState({
        completed: true
      })
    } else {
      this.setState({
        completed: false
      })
    }

  }

  /*
  handleClicked(e) {
    e.preventDefault();
    this.clicked = true;
    this.setState();
    console.log(this.clicked)
  }

  handleChange(e) {
    this.setState({title: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState();
    this.todosModelService.save(this.todosModelService.getToDos().map(item => (item.key == this.key)), this.state.title);
  }

  handleDestroy(e) {
    this.todosModelService.destroy(this.todosModelService.getToDos().map(item => (item.title == this.refs.myInput)));

  }
   */
  doubleClicked(event) {
    this.editing=true;
  }
  render() {
    let inputClass;
    if(this.editing==false) {
      inputClass = 'todo-item';
    }
    if(this.editing==true){
      inputClass= 'todo-item todo-item--editing';
    }
    return (



      <div className='todo-item'>
        <div className="todo-item__toggle"><input type="checkbox" value="on" checked={this.props.todo.completed}
                                                  onChange={this.toggle.bind(this)}/></div>
        <div className="todo-item__text">
          <div className="editable-text">
            <div className="editable-text__out"><label onDoubleClick={this.doubleClicked}>{this.props.todo.title}</label></div>
            <div className="editable-text__input"><input className="edit" value={this.props.todo.title}/></div>
          </div>
        </div>
        <div className="todo-item__remover">
          <button className="destroy" onClick={this.deleteToDo.bind(this)}/>
        </div>
      </div>)
  }
}
