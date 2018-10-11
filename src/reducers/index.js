import { combineReducers } from 'redux';
import TodoList from './reducer_todo_list';


// rootReducer is the object that holds all of the global states.
const rootReducer = combineReducers({
    todoList: TodoList,
});

export default rootReducer;