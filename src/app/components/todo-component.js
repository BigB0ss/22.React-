import React, {Component} from "react";
import ToDoFooter from "./todo-footer";
import ToDoList from "./todo-list";

export default class ToDoComponent extends Component {
  constructor(props) {
    super(props);
    this.todosModelService = window.toDoModelService;
    this.state = {
      todos: this.todosModelService.getToDos(),
      nowShowing: this.props.route.nowShowing,
      newToDoTitle: ""
    }
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.deleteToDo = this.deleteToDo.bind(this);
    this.subscription = this.todosModelService.subscribe(this.onToDoModelChange.bind(this));
    this.toggle=this.toggle.bind(this);
  }

  deleteToDo(todo) {
    this.todosModelService.destroy(todo);
  }

  handleChange(event) {
    this.setState({newToDoTitle: event.target.value})
    event.preventDefault();
  }

  handleKeyPress(event) {
    const ENTER_KEY = 13;
    if (event.charCode == ENTER_KEY) {
        this.todosModelService.addTodo(this.state.newToDoTitle);
        this.setState({newToDoTitle: ''});
    }
  }

  onToDoModelChange() {
    this.setState({
      todos: this.todosModelService.getToDos()
    });
  }

  toggle(todo) {
    this.todosModelService.toggle(todo);
    this.setState({
      todos: this.todosModelService.getToDos(),
      count: this.todosModelService.todos.filter((todo) => todo.completed).length
    })
  }
  componentWillReceiveProps(nextProps){
    this.setState({
      nowShowing:nextProps.route.nowShowing
    })
  }
  componentWillUnmount() {
    this.subscription.unsubscribe();
  }
  render() {
    return (
      <div className="todo-app">
        <div className="todo-app__header">
          <div className="todo-app__title">React ToDo App</div>
        </div>
        <div className="todo-item__text">
          <div className="editable-text">
            <input type="checkbox" className="todo-app__toggle-all" value="on"/>
            <input type="text" className="todo-app__new-todo" placeholder="What needs to be done?"
                   value={this.state.newToDoTitle} onChange={this.handleChange} onKeyPress={this.handleKeyPress}
                   />
          </div>
        </div>
        <ToDoList nowShowing={this.state.nowShowing} todos={this.state.todos} deleteToDo={this.deleteToDo} toggle={this.toggle}/>
        <ToDoFooter/>
      </div>
    );
  }
}
ToDoComponent.propTypes = {};
