import { ADD_TODO, DELETE_TODO, SHOW_LOADER, FETCH_TODOS } from "../types";


const handlers = {
    [SHOW_LOADER]: state => ({ ...state, loading: true }),
    [ADD_TODO]: (state, { payload }) => ({ ...state, todos: [...state.todos, payload] }),
    [FETCH_TODOS]: (state, { payload }) => ({ ...state, todos: payload, loading: false}),
    [DELETE_TODO]: (state, { payload }) => ({ ...state, todos: state.todos.filter(todo => todo.id !== payload) }),
    DEFAULT: state => state
}

export const firebaseReducer = (state, action) => {
    const handle = handlers[action.type] || handlers.DEFAULT;
    return handle(state, action)
}