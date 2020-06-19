import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
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
  const [value, setValue] = React.useState(props.idea.content);
  const handleChange = event => {
    setValue(event.target.value);
  };
  return (
    <div id="divForm">
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          id="standard-textarea"
          label="Idéia"
          placeholder="Placeholder"
          multiline
          value={value}
          onChange={handleChange}
        />
      </form>
    </div>
  );
};

export default InputForm;

/*
style={{
        top: props.idea.style.top + "px",
        left: props.idea.style.left + "px"
      }}*/
