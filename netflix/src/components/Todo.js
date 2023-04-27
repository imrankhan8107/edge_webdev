import React from 'react'
import '../style/todo.css'

export default function Todo({todo}) {
    // console.log(todo);
  return (
    <div className="todo">
        {todo.id}
        {'.  '}
        {todo.title}
    </div>
  )
}
