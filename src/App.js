import "./App.css";
import Input from "./components/Input.js";
import List from "./components/List.js";
import { useState } from "react";

function App() {
  const [fullTodoList, setFullTodoList] = useState([]);

  const addTodo = (newTodo) => {
    setFullTodoList([...fullTodoList, newTodo]);
  };

  const deleteTodo = (id) => {
    const updatedTodos = fullTodoList.filter((todo) => todo.key !== id);
    setFullTodoList(updatedTodos);
  };

  return (
    <div className="App">
      <div className="Header">Todo List </div>
      <div className="Body">
        <Input addTodo={addTodo} />
        <List fullTodoList={fullTodoList} deleteTodo={deleteTodo} />
      </div>
    </div>
  );
}

export default App;
