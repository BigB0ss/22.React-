import React from 'react';
import {Route, Router, browserHistory} from 'react-router';

import ToDoComponent from './app/components/todo-component';

const router = (
  <Router history={browserHistory}>
    <Route path="/" component={ToDoComponent} nowShowing={'all'} />
    <Route path="/completed" component={ToDoComponent} nowShowing={'completed'}/>
    <Route path="/active" component={ToDoComponent} nowShowing={'active'} />
  </Router>
);
export default router;
