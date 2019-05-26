import *as constans from '../constans/constans';
import api from '../apiWrapper';
import uuid from 'uuid/v1';

function createTodo(text) {
    return {
        text,
        id: uuid(),
    }
}

export function addTodo (text) {
    return function (dispatch) {
        const todoItem = createTodo(text);
        api.saveTodo(todoItem)
            .then(() => {
                dispatch({
                    type: constans.ADD_TODO,
                    payload: {todoItem}
                });
            });
    }  
}

export function removeTodo (id) {
    return function (dispatch) {
        api.removeTodoById(id)
            .then(() => {
                dispatch({
                    type: constans.REMOVE_TODO,
                    payload: id
                })
            })
    }  
};

export function editTodo (id, text) {
    return function (dispatch) {
        api.editTodoById(id,text)
            .then(() => {
                dispatch({
                    type: constans.EDIT_TODO,
                    payload: {
                        id,
                        text
                    }
                })
        })
    }
    
}

export function getData () {

    return function (dispatch) {
        api.getTodoList()
            .then(newTodoList => {
                console.log(newTodoList);
                dispatch({
                    type: constans.GET_DATA,
                    newTodoList
                })
        })
    }

    // const newTodoList = api.getTodoList();
    // return {
    //     type: constans.GET_DATA,
    //     newTodoList
    // }
    
}

export const openEditForm = id => ({
    type: constans.OPEN_EDIT_FORM,
    payload: id
});

export const closeEditForm = () => ({
    type: constans.CLOSE_EDIT_FORM,
});

export const login = text => ({
    type: constans.LOGIN,
    payload: text
})