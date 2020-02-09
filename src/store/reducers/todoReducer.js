import {
  SIGN_IN_USER_SUCCESS
} from '../constants/todoConstants'
// todos[0].todo[0].name
const INITIAL_STATE = {
  todos: null,
};
const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'GET_TODOS':
      return {
        ...state,
        todos: action.todos
      }
    case 'SET_DOS':
      return {
        ...state,
        todos: action.todos
      }
    default:
      return state
  }
};

export default authReducer;