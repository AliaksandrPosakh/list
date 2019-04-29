import *as constans from './constans';

export const addTodo = text => ({
    type: constans.ADD_TODO,
    payload: text
});

export const removeTodo = id => ({
    type: constans.REMOVE_TODO,
    payload: id
});

export const editTodo = (id, text) => ({
    type: constans.EDIT_TODO,
    payload: {
        id,
        text
    }
});

export const openEditForm = id => ({
    type: constans.OPEN_EDIT_FORM,
    payload: id
});

export const closeEditForm = () => ({
    type: constans.CLOSE_EDIT_FORM,
})