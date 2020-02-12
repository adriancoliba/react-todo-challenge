import {
  SIGN_IN_USER_SUCCESS
} from '../constants/todoConstants'

const INITIAL_STATE = {
  todoList: [],
};
const todoReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'GET_TODOS':
      return {
        ...state,
        todoList: action.todoList
      }
    case 'SET_DOS':
      return {
        ...state,
        todoList: action.todos
      }
    case 'ADD_TODO': 
      let todoList = []
      if(state.todoList.length === 0) {
        todoList = [action.todo]
      } else {
        todoList = JSON.parse(JSON.stringify(state.todoList))
        todoList.push(action.todo)
      }
      return {
        ...state,
        todoList: todoList
      };
    case 'UPDATE_TODO':
      const list = JSON.parse(JSON.stringify(state.todoList))
      list.map(todo => {
        if(todo.id == action.id){
          return todo[action.name] = action.value
        }
      })
      return {
        ...state,
        todoList: list
      }
    case 'DELETE_TODO':
      return {
        ...state,
        todoList: state.todoList.filter(el => el.id != action.id)
      }
    case 'DELETE_TODO_LIST':
      return {
        ...state,
        todoList: []
      }
    default:
      return state
  }
};

export default todoReducer;