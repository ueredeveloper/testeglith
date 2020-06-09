import React, { useRef } from "react";

import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import ControlCameraIcon from "@material-ui/icons/ControlCamera";
import IconButton from "@material-ui/core/IconButton";

import "./styleW3.css";
import InputMenu from "./InputMenu";

var initialX; //1
var initialY; //2
var currentX; //3
var currentY; //4

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1)
  },
  extendedIcon: {
    marginRight: theme.spacing(1)
  }
}));

const InputDraggableW3 = props => {
  const divRef = useRef(null);

  const onMouseDown = e => {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    currentX = e.clientX;
    currentY = e.clientY;
    document.onmouseup = onMouseUp;
    // call a function whenever the cursor moves:
    document.onmousemove = onMouseMove;
  };

  const onMouseMove = e => {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    initialX = currentX - e.clientX;
    initialY = currentY - e.clientY;
    currentX = e.clientX;
    currentY = e.clientY;

    let div = divRef.current;

    // set the element's new position:
    div.style.top = div.offsetTop - initialY + "px";
    div.style.left = div.offsetLeft - initialX + "px";
  };

  const onMouseUp = () => {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
    console.log("onMouseUp");
  };

  const classes = useStyles();
  const [value, setValue] = React.useState(props.component.content);
  const handleChange = event => {
    setValue(event.target.value);
  };

  const onTouchStart = e => {

    e.preventDefault();
    currentX = e.touches[0].clientX;
    currentY = e.touches[0].clientX;
  };

  const onTouchMove = e => {
    e = e || window.event;
    //e.preventDefault();

    initialX = currentX - e.touches[0].clientX;
    initialY = currentY - e.touches[0].clientY;
    currentX = e.touches[0].clientX;
    currentY = e.touches[0].clientY;

    let div = divRef.current;

    div.style.top = div.offsetTop - initialY + "px";
    div.style.left = div.offsetLeft - initialX + "px";

  };

  const onTouchEnd = e => {
    //initialX = currentX;
    //initialY = currentY;
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
            <ControlCameraIcon
              onMouseDown={onMouseDown}
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
              fontSize="small"
            />
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

export default InputDraggableW3;
