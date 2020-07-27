import React, { useState } from 'react'

function ToDoItem(props) {
    const doneStyle = {
        fontStyle: "italic",
        color: "lightgray",
        textDecoration: "line-through"
    }

    return(
        <div>
            {props.todos.map(todo => (
                <div style={todo.done ? doneStyle : null}>
                    <input 
                        type="checkbox" 
                        checked={todo.done} 
                        onChange={() => props.handleChange(todo.id)}
                    />
                    <p>{todo.task}</p>
                    <button 
                        onClick={() => props.handleClick(todo.id)}>Delete this</button>
                </div>
            )
            )}
        </div>
    )
}

export default ToDoItem