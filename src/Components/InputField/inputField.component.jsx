import { TextField } from "@material-ui/core";
import React from "react";
import { RiBallPenLine } from "react-icons/ri";
import { IconContext } from "react-icons";

export const InputField = ({ placeHolder, handleChange,handlClick }) => {
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
        />
        <IconContext.Provider
          value={{ color: "blue", className: "global-class-name" }}
        >
          <div>
            <RiBallPenLine onClick={handlClick} />
          </div>
        </IconContext.Provider>
      </form>
    </div>
  );
};
