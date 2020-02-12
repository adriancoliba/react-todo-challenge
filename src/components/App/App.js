import React, { useState, useEffect } from 'react';
import style from './App.css';
import { connect } from 'react-redux';
import TodoList from '../TodoList'; 
import { getTodos } from '../../store/actions/todoActions';
import Navigation from '../Navigation'

const App = (props) => {
  useEffect(() => {
    if(localStorage.getItem('todos')) {
      props.dispatch(getTodos());
    }
  }, [])

  return (
    <div>
        <Navigation/>
        <TodoList />
    </div>
  )

}

const mapStateToProps = (state) => {
  return {
    todos: state.todo.todos
  };
};

export default connect(mapStateToProps)(App);

