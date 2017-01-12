/**
 * Created by Kirill_Romanov1 on 1/11/2017.
 */
import React, {Component} from "react";



export default  class ToDoItem extends Component {

  constructor(props) {
    super(props);
    this.todosModelService = window.toDoModelService;
    this.state = {title: props.title};
    this.key = {key: props.key};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClicked = this.handleClicked.bind(this);
    this.handleDestroy = this.handleDestroy.bind(this);
  }

  handleClicked(e) {
    alert('Clicked');
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

  render() {
    return (
      <div className="todo-item">
        <div className="todo-item__toggle"><input type="checkbox" value="on"/></div>
        <div className="todo-item__text">
          <div className="editable-text">
            <div className="editable-text__out" onDoubleClick={this.handleClicked} ref="myInput"><label>{this.state.title} </label>
            </div>
            <div className="editable-text__input">
              <form onSubmit={this.handleSubmit}>
                <input className="edit" onChange={this.handleChange} type="label"
                       value={this.state.title} />
              </form>
            </div>
          </div>
        </div>
        <div className="todo-item__remover">
          <button className="destroy" onClick={this.handleDestroy}></button>
        </div>
      </div>
    );
  }
}
