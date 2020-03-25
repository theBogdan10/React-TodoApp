import React, {Fragment, useContext, useEffect} from 'react';
import Form from '../components/Form'
import Todos from '../components/Todos';
import {FirebaseContext} from '../context/firebase/firebaseContext' 
import { Loader } from '../components/Loader';


const Home = () =>{

    const {loading, todos, fetchTodos, deleteTodo} = useContext(FirebaseContext);

    useEffect(() => {
     fetchTodos()
     // eslint-disable-next-line
    }, [])

    return(
        <Fragment>
          <Form />
          <hr />
          {loading
            ? <Loader /> 
            : <Todos todos={todos} onDelete={deleteTodo} /> }
        </Fragment>
    )
}

export default Home;