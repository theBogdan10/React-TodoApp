import React, { useState, useContext } from "react";
import { AlertContext } from "../context/alert/alertContext";
import { FirebaseContext } from "../context/firebase/firebaseContext";

const Form = () => {
  const [value, setValue] = useState("");
  const alert = useContext(AlertContext);
  const todos = useContext(FirebaseContext);

  const submitHandler = event => {
    event.preventDefault();

    if (value.trim()) {
      todos
        .addTodo(value.trim())
        .then(() => {
          alert.show("Todo have created", "success");
        })
        .catch(() => {
          alert.show("Something went wrong", "danger");
        });
      setValue("");
    } else {
      alert.show("Input text");
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Add todo"
          value={value}
          onChange={e => setValue(e.target.value)}
        />
      </div>
    </form>
  );
};

export default Form;
