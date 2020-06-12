import React, { useEffect, useRef } from "react";

import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import ControlCameraIcon from "@material-ui/icons/ControlCamera";
import IconButton from "@material-ui/core/IconButton";
import InputMenu from "./InputMenu";

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1)
  },
  extendedIcon: {
    marginRight: theme.spacing(1)
  }
}));

const InputForm = props => {
 
  const classes = useStyles();
  const [value, setValue] = React.useState('Olá Mundo');
  const handleChange = event => {
    setValue(event.target.value);
  };
  return (
    
          <form className={classes.root} noValidate autoComplete="off">
            <TextField
              id="standard-textarea"
              label="Multiline Placeholder"
              placeholder="Placeholder"
              multiline
              value={props.idea.content}
              onChange={handleChange}
            />
          </form>

  );
};

export default InputForm;

/*
style={{
        top: props.idea.style.top + "px",
        left: props.idea.style.left + "px"
      }}*/
