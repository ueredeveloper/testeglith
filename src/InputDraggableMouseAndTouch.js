import React, { useRef } from "react";

import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import ControlCameraIcon from "@material-ui/icons/ControlCamera";
import IconButton from "@material-ui/core/IconButton";

import "./style.css";
import InputMenu from "./InputMenu";

var initialX; //1
var initialY; //2
var currentX; //3
var currentY; //4

var xOffset = 0;
var yOffset = 0;

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1)
  },
  extendedIcon: {
    marginRight: theme.spacing(1)
  }
}));

const InputDraggableMouseAndTouch = props => {
  const divRef = useRef(null);

  const onMouseDown = e => {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    currentX = e.clientX;
    currentY = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = onMouseMove;

    console.log("on mouse down");
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
    
    console.log('on mouse move')
  };

  const closeDragElement = () => {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  };

  const classes = useStyles();
  const [value, setValue] = React.useState(props.component.content);
  const handleChange = event => {
    setValue(event.target.value);
  };

  const dragTouchStart = e => {
    initialX = e.touches[0].clientX - xOffset;
    initialY = e.touches[0].clientY - yOffset;
  };

  const dragTouchMove = e => {
    e.preventDefault();

    currentX = e.touches[0].clientX - initialX;
    currentY = e.touches[0].clientY - initialY;

    xOffset = currentX;
    yOffset = currentY;

    let div = divRef.current;

    div.style.transform =
      "translate3d(" + currentX + "px, " + currentY + "px, 0)";

    // set the element's new position:
    // div.style.top = currentX + "px";
    // div.style.left = currentX + "px";
  };

  const dragTouchEnd = e => {
    initialX = currentX;
    initialY = currentY;
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
              onTouchStart={dragTouchStart}
              onTouchMove={dragTouchMove}
              onTouchEnd={dragTouchEnd}
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

export default InputDraggableMouseAndTouch;
