import UtilsService from './utils-service';

export default class ToDoModelService {


  constructor(key) {
    this.UtilsService = new UtilsService();
    this.key = key;
    this.todos = this.UtilsService.retrieve(key);
    this.onChanges = [];

  }

  subscribe(onChange) {
    this.onChanges.push(onChange);
    let index = this.onChanges.length - 1;

    return {
      unsubscribe: () => {
        this.onChanges.splice(index, 1);
      }
    };
  }

  getToDos() {
    return this.todos;
  }

  inform() {
    this.UtilsService.store(this.key, this.todos);
    this.onChanges.forEach((cb) => cb());
  }

  addTodo(title) {
    const toDo = {
      id: this.UtilsService.uuid(),
      title: title,
      completed: false
    };
    this.todos = this.todos.concat(toDo);
    this.inform();

  }

  toggleAll(checked) {
    this.todos = this.todos.map((todo) => {
      return Object.assign({}, todo, {completed: checked});
    });
    this.inform();
  }

  toggle(todoToToggle) {
    this.todos = this.todos.map((todo) => {
      return todo.id !== todoToToggle.id ?
        todo :
        Object.assign({}, todo, {completed: !todo.completed});
    });
    this.inform();
  }

  destroy(todo) {
    this.todos = this.todos.filter((candidate) => candidate.id !== todo.id);
    this.inform();
  }

  save(todoToSave, text) {
    this.todos = this.todos.map((todo) => (todo.id !== todoToSave.id) ? todo : Object.assign({}, todo, {title: text}));
    this.inform();
  }

  clearCompleted() {
    this.todos = this.todos.filter((todo) => !todo.completed);
    this.inform();
  }
}
