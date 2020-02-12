
export const getTodos = () => {
  return {
    type: 'GET_TODOS',
    todoList: JSON.parse(localStorage.getItem('todoList')),
  }
};

export const addTodo = (recordingStatus, todo) => {
  let record = JSON.parse(localStorage.getItem('record')) || [];

  let newRecord = record.concat({name: 'addTodo', todo: todo})
  localStorage.setItem('record', JSON.stringify(newRecord));

  return {
    type: 'ADD_TODO',
    todo
  }
};

export const updateTodo = (recordingStatus, name, value, id) => {
  let record = JSON.parse(localStorage.getItem('record')) || []
  let newRecord = record.concat({name: 'updateTodo', targetName: name, targetValue: value, id: id})
  localStorage.setItem('record', JSON.stringify(newRecord));

  return {
    type: 'UPDATE_TODO',
    name, 
    value, 
    id
  }
};

export const deleteTodo = (recordingStatus, id) => {
  if(recordingStatus !== 'finished') {
    let record = JSON.parse(localStorage.getItem('record')) || []
    let newRecord = record.concat({name: 'deleteTodo', id: id})
    localStorage.setItem('record', JSON.stringify(newRecord));
  }

  return {
    type: 'DELETE_TODO', 
    id
  }
};

export const deleteTodoList = () => {
  return {
    type: 'DELETE_TODO_LIST', 
  }
};