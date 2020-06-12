import React, { useEffect, useRef } from "react";

import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import ControlCameraIcon from "@material-ui/icons/ControlCamera";
import IconButton from "@material-ui/core/IconButton";
import InputMenu from "./InputMenu";

import "./style.css";

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1)
  },
  extendedIcon: {
    marginRight: theme.spacing(1)
  }
}));

const Draggable = props => {
  const classes = useStyles();
  const [value, setValue] = React.useState(props.idea.content);
  const handleChange = event => {
    setValue(event.target.value);
  };
  return (
    <div >
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          id="standard-textarea"
          label="Multiline Placeholder"
          placeholder="Placeholder"
          multiline
          value={value}
          onChange={handleChange}
        />
      </form>
      <InputMenu
        idea={props.idea}
        persistIdea={props.persistIdea}
        deleteIdea={props.deleteIdea}
      />
    </div>
  );
};

export default Draggable;
