import defaultTodos from '../defaultTodos.js'

export const getTodos = () => {
  if(!localStorage.getItem('todos')){
    localStorage.setItem('todos', JSON.stringify(defaultTodos))
  }
  return {
    type: 'GET_TODOS',
    todos: JSON.parse(localStorage.getItem('todos')),
  }
};

