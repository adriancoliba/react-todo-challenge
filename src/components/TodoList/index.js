import React, { useState, useEffect } from 'react';
import style from './style.css';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';

const TodoList = (props) => {
  const [todoList, useTodoList] = useState(null)
  const todoListId = props.location.pathname.replace('/todo/', '')
  props.todos && console.log('propstodos', props.todos)

 console.log('todo', todoList)

  useEffect(() => {
    if(props.todos && todoListId){
      useTodoList(props.todos.filter(todoList => todoList.id == todoListId)[0].todoList)
    }
  }, [props.todos])

  const onListChange = event => {
    console.log(event.target.value)
  }

  if(todoList){
    return (<div>
      {todoList.map(list => (
        <div key={list.id}>
          <input value={list.name} onChange={onListChange}/>
        </div>
    ))}
    </div>)
  }
  return <div>...</div>
}

const mapStateToProps = (state) => {
  return {
    todos: state.todo.todos
  };
};

export default withRouter(connect(mapStateToProps)(TodoList));
