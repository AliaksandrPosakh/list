import *as constans from './constans';
import uuid from 'uuid/v1';

function createTodo(text) {
    return {
        text,
        id: uuid(),
    }
}

const initialState = {
    listOfTodo: [],
    isOpen: false,
    editedTaskId: null
};

export default function reducer (state = initialState, action) {
    switch(action.type) {
        case constans.REMOVE_TODO:
            const todoList = state.listOfTodo.filter(el => el.id !== action.payload);
            const removedList = {...state, listOfTodo: todoList};
            return removedList;
            
        case constans.EDIT_TODO:
            const editList = state.listOfTodo.map(
                todo => todo.id === action.payload.id
                ?{...todo, text: action.payload.text}
                : todo
            );
            const editState = {...state, listOfTodo: editList};
            return editState;
            
        case constans.ADD_TODO:
           const newTodo = [...state.listOfTodo, createTodo(action.payload)];
            const newState = {...state, listOfTodo: newTodo}
            return newState;

        case constans.OPEN_EDIT_FORM:
            const openEdit = {...state, isOpen: true, editedTaskId: action.payload};
            return openEdit;
        
        case constans.CLOSE_EDIT_FORM:
            const closeEdit = {...state, isOpen: false};
            return closeEdit;

        default:
            return state;
    }
    
}