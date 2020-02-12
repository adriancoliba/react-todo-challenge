import React from 'react';
import style from './style.js';
import { withStyles } from '@material-ui/core/styles';
import FlipMove from 'react-flip-move';
import DeleteIcon from '@material-ui/icons/Delete';
import {Paper, Grid, InputBase, Divider, Tooltip} from '@material-ui/core';
import DescriptionIcon from '@material-ui/icons/Description';

const TodoList = (props) => {
  const { classes, showDescription, onTodoChange, onDeleteTodo, onShowDescription, todoList } = props

  return (
      <Grid container direction="row" justify="center" alignItems="center" className={classes.container}>
        {todoList && (
          <FlipMove duration={500} easing="ease-in-out">
            {todoList.map(todo => (
              <div key={todo.id} style={{marginBottom: 4}}>
                <Paper component="form" className={classes.paperInput}>
                  <DeleteIcon className={classes.iconButton} color='secondary' aria-label="menu" onClick={() => onDeleteTodo(todo.id)}/>
                  <Divider className={classes.divider} orientation="vertical" />
                  <InputBase name='name'
                    className={classes.input}
                    value={todo.name}
                    placeholder='...'
                    onChange={event => onTodoChange(event, todo.id)}
                  />
                  <Divider className={classes.divider} orientation="vertical" />
                  <Tooltip title={'see description'} placement="top-end">
                    <DescriptionIcon color="primary" className={classes.iconButton} onClick={() => onShowDescription(todo.id)}/>
                  </Tooltip>
                </Paper>
                {showDescription[todo.id] && (
                  <InputBase name='description'
                    className={classes.inputDescription}
                    value={todo.description}
                    onChange={event => onTodoChange(event, todo.id)}
                    inputProps={{ 'aria-label': 'naked' }}
                    placeholder='Add something'
                  />
                )}
              </div>
            ))}
          </FlipMove>
        )}
      </Grid>
  )
}

export default withStyles(style)(TodoList);
