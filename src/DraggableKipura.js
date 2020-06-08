import React, { useEffect, useState, useRef } from "react";

//import "./styleDK.css";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import ControlCameraIcon from "@material-ui/icons/ControlCamera";
import IconButton from "@material-ui/core/IconButton";

import "./style.css";
import InputMenu from "./InputMenu";

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1)
  },
  extendedIcon: {
    marginRight: theme.spacing(1)
  }
}));

const DraggableKipura = props => {
  const iconMove = useRef(null);
  const container = useRef(null);
  var active = false;
  var currentX;
  var currentY;
  var initialX;
  var initialY;
  var xOffset = 0;
  var yOffset = 0;

  var divMoveContainer, divContainer;

  useEffect(() => {
    
    divMoveContainer = iconMove.current;
    divContainer = container.current;
    
    console.log(divMoveContainer)

    divMoveContainer.addEventListener("touchstart", dragStart, false);
    divMoveContainer.addEventListener("touchend", dragEnd, false);
    divMoveContainer.addEventListener("touchmove", drag, false);

    divMoveContainer.addEventListener("mousedown", dragStart, false);
    divMoveContainer.addEventListener("mouseup", dragEnd, false);
    divMoveContainer.addEventListener("mousemove", drag, false);
    
  },[]);

  const dragStart = e => {
    if (e.type === "touchstart") {
      console.log("if touchstart");
      initialX = e.touches[0].clientX - xOffset;
      initialY = e.touches[0].clientY - yOffset;
    } else {
      console.log("if e.type " + e.type);
      initialX = e.clientX - xOffset;
      initialY = e.clientY - yOffset;
    }

    if (e.target === divMoveContainer) {
      active = true;
    }
  };

  const dragEnd = e => {
    console.log("if end");
    initialX = currentX;
    initialY = currentY;

    active = false;
  };

  const drag = e => {
    if (active) {
      e.preventDefault();

      if (e.type === "touchmove") {
        console.log("if touch move");
        currentX = e.touches[0].clientX - initialX;
        currentY = e.touches[0].clientY - initialY;
      } else {
        console.log("if e.type " + e.type);
        currentX = e.clientX - initialX;
        currentY = e.clientY - initialY;
      }

      xOffset = currentX;
      yOffset = currentY;

      setTranslate(currentX, currentY, divContainer);
    }
  };

  const setTranslate = (xPos, yPos, el) => {
    el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
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
      ref={container}
      type="text"
    >
      <div>
        <form className={classes.root} noValidate autoComplete="off">
          <IconButton className={classes.margin} size="small">
            <ControlCameraIcon ref={divMoveContainer} fontSize="small" />
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

export default DraggableKipura;

/*


*/
