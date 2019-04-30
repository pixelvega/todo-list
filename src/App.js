import React from "react";
import "./App.css";
import Header from "./componentes/Header";
import TodoList from "./componentes/TodoList";

function App() {
  // window.paula = { day: new Date() };
  // console.log(window);
  return (
    <div className="App">
      <Header title="Todo List" />
      <TodoList />
    </div>
  );
}

export default App;
