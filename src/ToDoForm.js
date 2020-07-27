import React, { useState } from 'react'

function ToDoForm(props) {
    const [text, setText] = useState('')
    const [warning, setWarning] = useState("")
    const handleSubmit = e => {
        e.preventDefault()
        if (text === "") {
            setWarning("You cant add an empty task!")
        } else {        
            props.addTask(text)
            setWarning("")
            setText("")
        }
    }
    const handleInput = e => {
        setText(e.target.value)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={handleInput} value={text} type="text" />
                <input type="submit" value="Add Task" />
            </form>
            {warning ? <p>{warning}</p> : null}
        </div>
    )
}

export default ToDoForm