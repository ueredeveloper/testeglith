import React, { useRef } from "react";

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

const InputDraggable = props => {
  const divRef = useRef(null);

  var initialX, initialY, currentX, currentY;

  const onMouseDown = e => {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    currentX = e.clientX;
    currentY = e.clientY;
    document.onmouseup = onMouseUp;
    // call a function whenever the cursor moves:
    document.onmousemove = onMouseMove;

    let div = divRef.current;
    console.log("div " + div.offsetTop + " " + div.offsetLeft);

    console.log("on mouse down " + e.clientX + " " + e.clientY);
  };

  const onMouseMove = e => {
    e = e || window.event;
    e.preventDefault();

    initialX = currentX - e.clientX;
    initialY = currentY - e.clientY;
    currentX = e.clientX;
    currentY = e.clientY;

    let div = divRef.current;

    div.style.top = div.offsetTop - initialY + "px";
    div.style.left = div.offsetLeft - initialX + "px";
  };

  const onMouseUp = () => {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  };

  const onTouchStart = e => {
    e = e || window.event;
    //e.preventDefault();

    currentX = e.touches[0].clientX;
    currentY = e.touches[0].clientY;
    document.ontouchend = onTouchEnd;
    document.ontouchmove = onTouchMove;
  };

  const onTouchMove = e => {
    e = e || window.event;

    initialX = currentX - e.touches[0].clientX;
    initialY = currentY - e.touches[0].clientY;
    currentX = e.touches[0].clientX;
    currentY = e.touches[0].clientY;

    let div = divRef.current;

    div.style.top = div.offsetTop - initialY + "px";
    div.style.left = div.offsetLeft - initialX + "px";
  };

  const onTouchEnd = e => {
    document.ontouchend = null;
    document.ontouchmove = null;
  };

  const classes = useStyles();
  const [value, setValue] = React.useState(props.idea.content);
  const handleChange = event => {
    setValue(event.target.value);
  };
  return (
    <div
      id="container"
      style={{
        top: props.idea.style.top,
        left: props.idea.style.left
      }}
      ref={divRef}
    >
      <div>
        <form className={classes.root} noValidate autoComplete="off">
          <IconButton className={classes.margin} size="small">
            <ControlCameraIcon
              onMouseDown={onMouseDown}
              onTouchStart={onTouchStart}
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
        <InputMenu addNewIdea={props.addNewIdea}/>
      </div>
    </div>
  );
};

export default InputDraggable;
