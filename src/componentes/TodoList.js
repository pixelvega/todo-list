import React, { useState } from "react";

const TodoList = props => {
  // const [name, setName] = useState("Hola mundo");
  // const [surname, setSurname] = useState("");

  // const handleClick = () => {
  //   setName("Adiós mundo");
  // };
  const todoList = [
    { name: "Tarea 1", completed: false },
    { name: "Tarea 2", completed: false }
  ];
  const [todos, setTodos] = useState(todoList);
  const [task, setTask] = useState("");
  const handleClick = () => {
    const newTask = { name: task, completed: false };
    //todos.push(newTask); // NO! En el caso de un array u objeto hay que pasarle uno nuevo

    setTodos([...todos, newTask]);
    setTask("");
    // console.log("window in todoList", window.paula); //prueba variable global
  };
  const handleChange = e => {
    const text = e.currentTarget.value;
    setTask(text);
  };
  return (
    <div>
      <ul>
        {todos.map((item, index) => {
          return <li key={index}>{item.name}</li>;
        })}
      </ul>
      <input type="text" onChange={handleChange} value={task} />
      <button onClick={handleClick}>Añadir tarea</button>
    </div>
  );
};

export default TodoList;
