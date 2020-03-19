import React, {Fragment} from 'react';
import Form from '../components/Form'
import Todos from '../components/Todos';

const Home = () =>{

    const todos = new Array (3).fill('').map((_,i) => ({id:i, title: `Note ${i+1}` }))

    return(
        <Fragment>
          <Form />
          <hr />
          <Todos todos={todos} />
        </Fragment>
    )
}

export default Home;