import React, { useState, useEffect, useRef } from 'react';
import style from './style.js';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { addTodo, updateTodo, deleteTodo, deleteTodoList } from '../../store/actions/todoActions'

import {Paper, Button, Container, Grid, InputBase, Divider, CssBaseline, Tooltip} from '@material-ui/core';

import TodoListAdd from '../TodoListAdd';
import TodoListShow from '../TodoListShow';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import PanToolIcon from '@material-ui/icons/PanTool';

const TodoList = (props) => {
  const [newTodo, useNewTodo] = useState({name: '', description: ''})
  const [validationError, useValidationError] = useState(false)
  const [showNewTodoDescription, useShowNewTodoDescription] = useState(false);
  const [showDescription, useShowDescription] = useState({})
  const [isRecording, setIsRecording] = useState(false)
  const [recordingStatus, setRecordingStatus] = useState('')
  const { classes } = props

  const inputRef = React.createRef()

  useEffect(() => {
    if(isRecording){
      setRecordingStatus('started')
    }
    if(!isRecording && recordingStatus == 'started'){
      setRecordingStatus('finished')
      playRecording()
    }
  }, [isRecording])

  const onTodoChange = (event, id) => {    
    props.dispatch(updateTodo(recordingStatus, event.target.name, event.target.value, id))
  }

  const onNewTodoChange = event => {
    useValidationError(false);
    useNewTodo({...newTodo, [event.target.name]: event.target.value})
  }

  const submitTodo = () => {
    if(newTodo.name.length < 3){
      return useValidationError(true)
    }
    const todo = {
      id: new Date().valueOf(),
      name: newTodo.name,
      description: newTodo.description,
      date: new Date()
    }
    props.dispatch(addTodo(recordingStatus, todo))
    useNewTodo({name: '', description: ''})
    useShowNewTodoDescription(false)
  }

  const onDeleteTodo = id => {
    props.dispatch(deleteTodo(recordingStatus, id))
  }

  const onShowDescription = id => {
    let list = JSON.parse(JSON.stringify(showDescription))
    list[id] = list[id] ? false : true
    useShowDescription(list)
  }

  const playRecording = () => {
    
    let record = []
    setTimeout(() => {
      console.log('first settime')

      record = JSON.parse(localStorage.getItem('record'))
      console.log(record)
      props.dispatch(deleteTodoList())
      inputRef.current.click()
    }, 500)
    
    setTimeout(() => {
      const lol = inputRef.current
      console.log('lol', lol)
      console.log('second settime')
      record.map((rec) => {
        switch(rec.name){
          case 'addTodo':
            return addTodo(rec.todo)
          case 'updateTodo':
            return updateTodo(rec.targetName, rec.targetValue, rec.id)
          case 'deleteTodo': 
            return deleteTodo(rec.id)
        }
        })
      setRecordingStatus('')
    }, 4000)
  } 

  const onHandleRecording = () => {
    setIsRecording(!isRecording)
  }

  return (
    <div>
      <br/><br/>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Grid container spacing={2} direction="row" justify="center" alignItems="center">
          <Button
            ref={inputRef}
            variant="contained"
            color="primary"
            className={classes.button}
            startIcon={isRecording? <PanToolIcon/> : <PlayCircleOutlineIcon />}
            onClick={onHandleRecording}
            style={{color: `${isRecording? 'black' : 'white'}`}}
          >
            {isRecording ? 'Stop Recording' : 'Start Recording'}
          </Button>
        </Grid>
        {isRecording && (
          <React.Fragment>
            <TodoListAdd 
              newTodo={newTodo} 
              onNewTodoChange={onNewTodoChange} 
              useShowNewTodoDescription={useShowNewTodoDescription} 
              showNewTodoDescription={showNewTodoDescription} 
              submitTodo={submitTodo}
              validationError={validationError}
            />
            <TodoListShow
              todoList={props.todoList}
              showDescription={showDescription}
              onTodoChange={onTodoChange}
              onDeleteTodo={onDeleteTodo}
              onShowDescription={onShowDescription}
            />
          </React.Fragment>
        )}
      </Container>
    </div>
  )

}

const mapStateToProps = (state) => {
  return {
    todoList: state.todo.todoList,
  };
};

export default withStyles(style)(connect(mapStateToProps)(TodoList));
