import React from 'react'
import { FirebaseContext } from './firebaseContext';
import { firebaseReducer } from './firebaseReducer';
import { useReducer } from 'react'
import { DELETE_TODO, ADD_TODO, SHOW_LOADER, FETCH_TODOS } from '../types';
import axios from 'axios';


const URL = 'https://react-todo-6f646.firebaseio.com';

export const FirebaseState = ({ children }) => {

    const initialState = {
        todos: [],
        loading: false
    }

    const [state, dispatch] = useReducer(firebaseReducer, initialState)
    const showLoader = () => dispatch({ type: SHOW_LOADER })

    const fetchTodos = async () => {
        showLoader();
        const res = await axios.get(`${URL}/todos.json`);
        const payload = Object.keys(res.data).map(key => {
            return {
                ...res.data[key],
                id: key
            }
        })
        dispatch({ type: FETCH_TODOS, payload })
    }

    const addTodo = async title => {
        const todo = {
            title,
            date: new Date().toJSON()
        }
        try {
            const res = await axios.post(`${URL}/todos.json`, todo);
            const payload = {
                ...todo,
                id: res.data.name
            }
            dispatch({ type: ADD_TODO, payload })
        } catch (error) {
            throw new Error(error.message)
        }
    }

    const deleteTodo = async id => {
        await axios.delete(`${URL}/todos/${id}.json`)
        dispatch({ type: DELETE_TODO, payload: id })
    }

    return (
        <FirebaseContext.Provider value={{
            addTodo, fetchTodos, deleteTodo, showLoader,
            todos: state.todos, loading: state.loading
        }} >
            {children}
        </FirebaseContext.Provider>
    )
}