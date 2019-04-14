import *as constans from './constans';
import uuid from 'uuid/v1';

function createTodo(text) {
    return {
        text,
        id: uuid()
    }
}
const initialState = [];
export default function reducer (state = initialState, action) {
    switch(action.type) {
        case constans.REMOVE_TODO:
            return state.filter(el => el.id !== action.payload);
            
        case constans.EDIT_TODO:
            return state.map(
                todo => todo.id === action.payload.id
                ?{...todo, text: action.payload.text}
                : todo
            )
            
        case constans.ADD_TODO:
                return state.concat(createTodo(action.payload));
    
    default:
        return state;
    }
}