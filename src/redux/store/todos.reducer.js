import {ADD_TODO, LOAD_TODOS, TODOS_LOADED} from './todos.action';

export const initialState = {
    list : [],
    loading : false,
    loaded : false 
};

export function todosReducer (state = initialState, action) {
    switch (action.type) {
        case LOAD_TODOS:
            return {
                ...state,
                loading: true,
                loaded : false,
            }
        case TODOS_LOADED:
            return {
                ...state,
                list : action.todos,
                loading: false,
                loaded : true,
            }
        case ADD_TODO:
            const todo = {
                title: action.name,
                isDone : false
            }
            return {
                ...state,
                list: [...state.list, todo],
            }
        default :
            return state;
    }
}