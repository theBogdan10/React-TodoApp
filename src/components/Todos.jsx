import React from "react";

const Todos = ({todos}) => {
  return (
   <ul className='list-group'>
       {todos.map(el => (
        <li className='list-group-item todo'
            key={el.id}    
       >
           
           <div>
                <strong>{el.title}</strong>
                <small>{new Date().toLocaleDateString()}</small>
           </div>
           <button type="button" className="btn btn-outline-danger btn-sm ">&times;</button>
       </li>
       ))}
   </ul>
  );
};

export default Todos;