import React from "react";
import { Card } from "../Card/card.component";
// import "./cardList.styles.css";

export const CardList = ({ todos }) => {
  let counter = 1;
  return (
    <div>
      {todos.map((todo) => (
        <Card todo={todo} key={counter++} />
      ))}
    </div>
  );
};
