import { useState } from 'react';
import ToDoList from "./ToDoList";
import NewToDoForm from './NewToDoForm';
import "./App.css"
import "./styles.css"; 


function App() {
  const [todos, setTodos] = useState([
    'Have fun',
    'Learn React',
    'Learn the MERN-Stack'
  ]);
  const [showTodos, setShowTodos] = useState(true);

  function addTodo(todo) {
    setTodos([...todos, todo]);
  }

  return (
    <div className="App">
      <h1>React To-Do</h1>
      <button onClick={() => setShowTodos(!showTodos)}>{showTodos ? 'HIDE' : 'SHOW'}</button>
      {showTodos && <ToDoList todos={todos} />}
      <hr />
      <NewToDoForm addTodo={addTodo} />
    </div>
  );
}



export default App;
