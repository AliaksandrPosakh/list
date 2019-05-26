import *as constans from '../constans/constans';

const initialState = {
    listOfTodo: [],
    isOpen: false,
    editedTaskId: null
};

export default function todoListReducer (state = initialState, action) {
    switch(action.type) {
        case constans.REMOVE_TODO:
            const todoList = state.listOfTodo.filter(el => el.id !== action.payload);
            return {...state, listOfTodo: todoList};
            
        case constans.EDIT_TODO:
            const editList = state.listOfTodo.map(
                todo => todo.id === action.payload.id
                ? {...todo, text: action.payload.text}
                : todo
            );
            return {...state, listOfTodo: editList};
            
        case constans.ADD_TODO:
            const listOfTodo = [...state.listOfTodo, action.payload.todoItem];
            return {...state, listOfTodo}

        case constans.OPEN_EDIT_FORM:
            const openEdit = {...state, isOpen: true, editedTaskId: action.payload};
            return openEdit;
        
        case constans.CLOSE_EDIT_FORM:
            const closeEdit = {...state, isOpen: false, editedTaskId: null};
            return closeEdit;

            case constans.GET_DATA:
                const list = action.newTodoList;
                return {...state, listOfTodo: list};


        default:
            return state;
    }
    
}

