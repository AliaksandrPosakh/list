import *as constans from '../constans/constans';
const initialState = [];
export default function todoListReducer (state = initialState, action) {
    switch(action.type) {
        case constans.LOGIN:
            return [...state, action.payload];
            
        default:
            return state;
    }
}