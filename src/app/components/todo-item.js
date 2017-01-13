/**
 * Created by Kirill_Romanov1 on 1/11/2017.
 */
import React, {Component} from "react";
import classNames  from 'classnames';


export default  class ToDoItem extends Component {

  constructor(props) {
    super(props);
    this.todosModelService = window.toDoModelService;
    this.state = {
      editing: false,
      completed: this.props.todo.completed,
      title: ''

    }
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleChange = this.handleChange.bind(this);
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
    this.props.toggle(this.props.todo);
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
    this.setState({editing:true});

  }

  handleChange(event) {
    this.setState({title: event.target.value})
  }

  handleKeyPress(event) {
    const ENTER_KEY = 13;
    if (event.charCode == ENTER_KEY) {
      this.todosModelService.save(this.props.todo, this.state.title);
      this.setState({editing : false})
    }
  }
  render() {


    return (

        <div className={classNames("todo-item",{"todo-item--completed": this.props.todo.completed,
          "todo-item--editing": this.state.editing})}>
        <div className="todo-item__toggle"><input type="checkbox" value="on" checked={this.props.todo.completed}
                                                  onChange={this.toggle.bind(this)}/></div>
        <div className="todo-item__text">
          <div className="editable-text">
            <div className="editable-text__out" >
              <label onDoubleClick={this.doubleClicked}>{this.props.todo.title}</label></div>
            <div className="editable-text__input"><input className="edit" value={this.state.title}
                                                         onChange={this.handleChange} onKeyPress={this.handleKeyPress}/>
            </div>
          </div>
        </div>
        <div className="todo-item__remover">
          <button className="destroy" onClick={this.deleteToDo.bind(this)}/>
        </div>
        </div>
      )
  }
}
