import React, { useState, useEffect } from 'react';
import style from './App.css';
import { BrowserRouter as Router, HashRouter, Switch, Route, Redirect, Link } from "react-router-dom";
import { connect } from 'react-redux';
import TodoLists from '../TodoLists';
import TodoList from '../TodoList'; 
import { getTodos } from '../../store/actions/todoActions';

const App = (props) => {
  useEffect(() => {
    props.dispatch(getTodos());
  }, [])
  return (
    <Router>
      <Link to="/" style={{textAlign: 'center'}}>Todo Lists</Link>
      <Switch>
        <Route exact path="/"><TodoLists /></Route>
        <Route path="/todo/:id"><TodoList /></Route>
      </Switch>
    </Router>
  )

}

const mapStateToProps = (state) => {
  return {
    todos: state.todo.todos
  };
};

export default connect(mapStateToProps)(App);

