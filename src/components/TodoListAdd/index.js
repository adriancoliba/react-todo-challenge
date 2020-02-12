import React, { useState } from 'react';
import style from './style.js';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { addTodo } from '../../store/actions/todoActions'
import {Button, Grid, InputBase, Divider, Tooltip, TextField, Typography} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';

const TodoList = (props) => {

  const {classes, newTodo, onNewTodoChange, useShowNewTodoDescription, showNewTodoDescription, submitTodo, validationError} = props

  return (
    <Grid container spacing={2} direction="row" justify="center" alignItems="center">
      <Grid item className={classes.paperInput}>
          <InputBase name='name' placeholder='eg: Renew gym'
            className={classes.input}
            value={newTodo.name}
            onChange={onNewTodoChange}
          />
          <Divider className={classes.divider} orientation="vertical" />
          <Tooltip title={'add description'} placement="top-end">
            <LibraryBooksIcon color="primary" onClick={() => useShowNewTodoDescription(true)} 
              className={classes.iconButton} aria-label="directions"
            />
          </Tooltip>
      </Grid>
      {showNewTodoDescription && (
        <Grid item className={classes.paperDescription}>
          <InputBase name='description'
            placeholder='Add description'
            className={classes.inputDescription}
            value={newTodo.description} onChange={onNewTodoChange}
            inputProps={{ 'aria-label': 'naked' }}
          />
        </Grid>
      )}
      <Grid item>
        <Button
          variant="contained"
          color="primary"
          size="small"
          className={classes.button}
          startIcon={<AddIcon />}
          onClick={submitTodo}
        >
          Add
        </Button>
      </Grid>
      <Grid item xs={12}>
        {validationError && <Typography variant="subtitle2" className={classes.errorText}>Type a real To Do</Typography>}
      </Grid>
    </Grid>
  )
}

const mapStateToProps = (state) => {
  return {
    todoList: state.todo.todoList
  };
};

export default withStyles(style)(connect(mapStateToProps)(TodoList));
