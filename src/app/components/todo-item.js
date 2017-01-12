/**
 * Created by Kirill_Romanov1 on 1/11/2017.
 */
import React, {Component} from "react";

const ENTER_KEY = 13;
const ESCAPE_KEY = 27;

export default  class ToDoItem extends Component {

  constructor(props) {
    super(props);
    this.todosModelService = window.toDoModelService;
    this.state = {title: props.title};
    this.key={key:props.key};
  }





  render() {
    return (
      <div className="todo-item todo-item--editing">
        <div className="todo-item__toggle"><input type="checkbox" value="on"/></div>
        <div className="todo-item__text">
          <div className="editable-text">
            <div className="editable-text__out"><label>{this.state.title}</label></div>
            <div className="editable-text__input">
              <form onSubmit={this.handleSubmit}>
                <input  className="edit" onChange={this.handleChange}
                       value={this.state.title} />
              </form>
            </div>
          </div>
        </div>
        <div className="todo-item__remover">
          <button className="destroy"/>
        </div>
      </div>
    );
  }
}
