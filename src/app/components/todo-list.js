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

    this.handleChangeList = this.handleChangeList.bind(this);
    this.handleSubmitList = this.handleSubmitList.bind(this);

  }


  handleChangeList(e) {
    this.setState({title: e.target.value});

  }

  handleSubmitList(e) {
    e.preventDefault();
    toDoModelService.addTodo(this.state.title);
    this.setState({title:''});
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
                  <form onSubmit={this.handleSubmitList}>
                    <input id="enter" className="edit" autofocus onChange={this.handleChangeList} type="text"
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


