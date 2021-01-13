import React from 'react'
import './card.styles.css'

export const Card = ({ todo, onDeleteTodo }) => {
  return (
    <div className="todo-card">
      <h1>
        {todo.name} <span onClick={()=> onDeleteTodo(todo)}>Delete</span>
      </h1>
    </div>
  );
};