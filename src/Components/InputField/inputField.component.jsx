import { TextField } from "@material-ui/core";
import React from "react";
import { RiBallPenLine } from "react-icons/ri";
import { IconContext } from "react-icons";
import './inputField.styles.css'
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    width: "75%",
    "font-family": "'Caveat', cursive",
  },
});
export const InputField = ({ placeHolder, handleChange,handlClick,currentTodo }) => {
  const classes = useStyles();
  return (
    <div>
      <form noValidate autoComplete="off" className="input-div">
        <TextField
          id="outlined-basic"
          label={placeHolder}
          variant="outlined"
          size="small"
          classes={{
            root: classes.root,
          }}
          onChange={handleChange}
          onKeyUp={handleChange}
          value={currentTodo}
        />
        <IconContext.Provider value={{ className: "add-icon" }}>
          <RiBallPenLine onClick={handlClick} />
        </IconContext.Provider>
      </form>
    </div>
  );
};
