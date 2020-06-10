import React, { useEffect, useState, useRef } from "react";

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

const InputDraggableMouseAndTouch = props => {
  var initialX = 0,
    initialY = 0,
    currentX = 0,
    currentY = 0;

  var container;

  const divRef = useRef(null);

  useEffect(() => {
    container = divRef.current;
    console.log(container);
  }, []);

  const onMouseDown = e => {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    currentX = e.clientX;
    currentY = e.clientY;

    document.onmouseup = onMouseUp;
    document.onmousemove = onMouseMove;
  };

  const onMouseMove = e => {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:

    console.log("initialx " + initialX + " current" + currentX);
    initialX = currentX - e.clientX;
    initialY = currentY - e.clientY;
    currentX = e.clientX;
    currentY = e.clientY;
    // set the element's new position:
    container.style.top = container.offsetTop - e.clientY + "px";
    container.style.left = container.offsetLeft -  e.clientX  + "px";

    console.log("client " + e.clientX + " " + e.clientY);
    console.log("initial" + initialX + " " + initialY);
  };

  const onMouseUp = () => {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  };

  const classes = useStyles();
  const [value, setValue] = React.useState(props.component.content);
  const handleChange = event => {
    setValue(event.target.value);
  };

  return (
    <div
      id="mydiv"
      style={{
        top: props.component.style.top,
        left: props.component.style.top
      }}
      ref={divRef}
      type="text"
    >
      <div>
        <form className={classes.root} noValidate autoComplete="off">
          <IconButton className={classes.margin} size="small">
            <ControlCameraIcon onMouseDown={onMouseDown} fontSize="small" />
          </IconButton>
          <TextField
            id="standard-textarea"
            label="Multiline Placeholder"
            placeholder="Placeholder"
            multiline
            value={value}
            onChange={handleChange}
          />
        </form>
        <InputMenu />
      </div>
    </div>
  );
};
export default InputDraggableMouseAndTouch;
