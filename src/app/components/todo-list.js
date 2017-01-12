/**
 * Created by Kirill_Romanov1 on 1/11/2017.
 */
import React, {Component} from "react";
import ToDoItem from "./todo-item";
export default  class ToDoList extends Component {
  constructor(props) {
    super(props)

    this.todosModelService = window.toDoModelService;
    this.state = { title: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }


  handleChange(e) {
    this.setState({title: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    toDoModelService.addTodo(this.state.title);
    this.setState();

  }
  handleDestroy(){

  }
  render() {
    return (
      <div>
        <div className="todo-list">
          <div className="todo-item todo-item--editing">
            <div className="todo-item__toggle"><input type="checkbox" value="on"/></div>
            <div className="todo-item__text">
              <div className="editable-text">
                <div className="editable-text__out"><label>Push changes to Repo</label></div>
                <div className="editable-text__input">
                  <form onSubmit={this.handleSubmit}>
                    <input className="edit" onChange={this.handleChange}
                           value={this.state.title}/>
                  </form>
                </div>
              </div>
            </div>
            <div className="todo-item__remover">
              <button className="destroy"/>
            </div>
          </div>
        </div>


          {this.todosModelService.todos.map(item => (
            <ToDoItem title={item.title} key={item.key}/>
          ))}

      </div>
    );


  }

}


