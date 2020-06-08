import React, { useRef } from "react";

import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import ControlCameraIcon from "@material-ui/icons/ControlCamera";
import IconButton from "@material-ui/core/IconButton";

import "./style.css";
import InputMenu from "./InputMenu";

var pos1 = 0,
  pos2 = 0,
  pos3 = 0,
  pos4 = 0;

var currentX;
var currentY;

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

const InputDraggable = props => {
  const divRef = useRef(null);

  const dragMouseDown = e => {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  };

  const elementDrag = e => {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;

    let div = divRef.current;

    // set the element's new position:
    div.style.top = div.offsetTop - pos2 + "px";
    div.style.left = div.offsetLeft - pos1 + "px";
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

  const dragTouchEnd = e => {
    initialX = currentX;
    initialY = currentY;

    //let div = divRef.current;

    //div.style.transform = "translate3d(" + initialX + "px, " + initialY + "px, 0)";
  };

  const dragTouchMove = e => {
    currentX = e.touches[0].clientX;
    currentY = e.touches[0].clientY;
    
    let div = divRef.current;

    div.style.transform = "translate3d(" + currentX + "px, " + currentX + "px, 0)";
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
              onMouseDown={dragMouseDown}
         
              onTouchMove={dragTouchMove}
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

export default InputDraggable;

/*

     onTouchStart={dragTouchStart}
              onTouchEnd={dragTouchEnd}
              
              */
