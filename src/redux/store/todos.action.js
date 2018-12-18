export const ADD_TODO = 'ADD_TODO';
export const TODOS_LOADED = 'TODOS_LOADED';
export const LOAD_TODOS = 'LOAD_TODOS';

const data = [{
    title: 'Faire todo',
    isDone : false
}, {
    title: 'Faire redux',
    isDone : false
}, {
    title: 'Faire redux thunk',
    isDone : false
}];

export function addTodo(name) {
    return {
        type: ADD_TODO,
        name
    }
}

const mockFetch = () => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(data), 2000)
    })
}

export function todoLoaded (datas) {
    return {
        type : TODOS_LOADED,
        todos : datas,
    }
}

export function loadTodos () {
    return (dispatch) => {
        dispatch({type : LOAD_TODOS});
        return mockFetch()
                .then((datas) => dispatch(todoLoaded(datas)))
    }
}