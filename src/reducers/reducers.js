import todoListReducer from './todoListReducer';
import loginReducer from './loginReducer';
import {combineReducers} from 'redux';

export default  combineReducers({
    loginReducer,
    todoListReducer
});
