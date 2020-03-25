import React from "react";
import {TransitionGroup,CSSTransition} from 'react-transition-group';

const Todos = ({todos, onDelete}) => (
   <TransitionGroup component='ul' className='list-group'>
       {todos.map(el => (
        <CSSTransition
            key={el.id} 
            classNames={'todo'}
            timeout={800}
            >
            <li className='list-group-item todo'>   
            <div>
                <strong>{el.title}</strong>
                <small>{el.date}</small>
            </div>
            <button type="button" className="btn btn-outline-danger btn-sm " 
                        onClick={() => onDelete(el.id)}>&times;</button>
        </li>
       </CSSTransition>
       ))}
   </TransitionGroup>
);

export default Todos;