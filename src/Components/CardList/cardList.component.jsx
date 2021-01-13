import React from "react";
import { Card } from "../Card/card.component";
// import "./cardList.styles.css";

export const CardList = ({ todos, onDeleteTodo }) => {
  return (
    <div>
      {todos.map((todo) => (
        <Card onDeleteTodo={onDeleteTodo} todo={todo} key={todo.key} />
      ))}
    </div>
  );
};
