import { combineReducers } from 'redux';
import todo from './todoReducer';

const rootReducer = () => combineReducers({
  todo: todo,
});

export default rootReducer;