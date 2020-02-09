import React, { useState, useEffect } from 'react';
import style from './style.css';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';

const TodoLists = (props) => {
  useEffect(() => {

  }, [])
  
  if(props.todos) {
    return (
      <div>
        <br/><br/>
        {props.todos.map(todoList => (
          <div key={todoList.id} style={{border: '1px solid', width: 400}}>
            <br/>
            <h3>{todoList.name}</h3>
            <Link to={`/todo/${todoList.id}`}><button>go</button></Link>
            <br/>
          </div>
        ))}
      </div>
    )
  }
  return (
    <div></div>
  )
}

const mapStateToProps = (state) => {
  return {
    todos: state.todo.todos
  };
};

export default connect(mapStateToProps)(TodoLists);
