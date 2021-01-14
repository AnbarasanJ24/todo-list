import React from 'react'
import './card.styles.css'
import { RiDeleteBin7Line } from "react-icons/ri";
import { IconContext } from "react-icons";

export const Card = ({ todo, onDeleteTodo }) => {
  return (
    <div className="todo-card">
      <h4 className="todo-text">{todo.name}</h4>
      <div>
        <IconContext.Provider value={{ className: "delete-icon" }}>
          <RiDeleteBin7Line onClick={() => onDeleteTodo(todo)} />
        </IconContext.Provider>
      </div>
    </div>
  );
};