import { TextField } from "@material-ui/core";
import React from "react";
import { RiBallPenLine } from "react-icons/ri";
import { IconContext } from "react-icons";

export const InputField = ({ placeHolder, handleChange,handlClick,currentTodo }) => {
  return (
    <div>
      <form noValidate autoComplete="off">
        <TextField
          id="outlined-basic"
          label={placeHolder}
          variant="outlined"
          size="small"
          className="todo-input"
          onChange={handleChange}
          value={currentTodo}
        />
        <IconContext.Provider
          value={{className: "add-icon" }}
        >
          <RiBallPenLine onClick={handlClick} />
        </IconContext.Provider>
      </form>
    </div>
  );
};
