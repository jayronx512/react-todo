import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import ToDoItem from './ToDoItem'
import ToDoForm from './ToDoForm'

function App() {
  const [todos, setTodos] = useState(
    [
      { id: 1, task: 'Walk the dog', done: false },
      { id: 2, task: 'Water the flower', done: true}
    ]
  )

  function handleClick(id) {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos)
  }

  function addTask(text) {
    setTodos([
      ...todos,
      {id: todos[todos.length-1].id+1, task: text, done: false}
    ])
  }

  function handleChange(id) {
    const updatedChecked = todos.map(todo => {
      if (todo.id == id) {
        return {id: id, task: todo.task, done: !todo.done}
      } else {
        return todo
      }
    })

    return setTodos(updatedChecked)
  }
  return (
    <div>
      {console.log(todos)}
      <ToDoItem todos={todos} handleClick={handleClick} handleChange={handleChange}/>
      <ToDoForm todos={todos} addTask={addTask} />
    </div>
  );
}

export default App;
