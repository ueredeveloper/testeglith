import React, { useEffect, useState, useRef } from "react";

import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import ControlCameraIcon from "@material-ui/icons/ControlCamera";
import IconButton from "@material-ui/core/IconButton";
import "./style.css";

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1)
  },
  extendedIcon: {
    marginRight: theme.spacing(1)
  }
}));

const DraggableKipura = props => {
  const divContainer = useRef(null);
  var active = false;
  var currentX;
  var currentY;
  var initialX;
  var initialY;
  var xOffset = 0;
  var yOffset = 0;

  var container;

  useEffect(() => {
    container = divContainer.current;

    container.addEventListener("touchstart", dragStart, false);
    container.addEventListener("touchend", dragEnd, false);
    container.addEventListener("touchmove", drag, false);

    container.addEventListener("mousedown", dragStart, false);
    container.addEventListener("mouseup", dragEnd, false);
    container.addEventListener("mousemove", drag, false);
  }, []);

  const dragStart = e => {
    if (e.type === "touchstart") {
      console.log("dragStart if " + e.type);
      initialX = e.touches[0].clientX - xOffset;
      initialY = e.touches[0].clientY - yOffset;
    } else {
      console.log("dragStart else: " + e.type);
      initialX = e.clientX - xOffset;
      initialY = e.clientY - yOffset;
    }

    if (e.target === container) {
      active = true;
    }
  };

  const dragEnd = e => {
    initialX = currentX;
    initialY = currentY;

    active = false;

    console.log("dragEnd: " + e.type);
    // console.log(dragItem);
  };

  const drag = e => {
    if (active) {
      e.preventDefault();

      if (e.type === "touchmove") {
        console.log("fi touch move: " + e.type);

        currentX = e.touches[0].clientX - initialX;
        currentY = e.touches[0].clientY - initialY;
      } else {
        console.log("else touch move: " + e.type);
        currentX = e.clientX - initialX;
        currentY = e.clientY - initialY;
      }

      xOffset = currentX;
      yOffset = currentY;

      setTranslate(currentX, currentY, container);
    } // if active

    //  console.log('drag')
    // console.log(dragItem);
  };

  const setTranslate = (xPos, yPos, el) => {
    el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";

    console.log("setTranslate");
  };

  const classes = useStyles();
  const [value, setValue] = React.useState(props.component.content);
  const handleChange = event => {
    setValue(event.target.value);
  };

  return (
    <div
      id="container"
      style={{
        top: props.component.style.top,
        left: props.component.style.top
      }}
      ref={divContainer}
      type="text"
    >
      <div>
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
      </div>
    </div>
  );
};

export default DraggableKipura;

/*
 <IconButton className={classes.margin} size="small">
            <ControlCameraIcon fontSize="small" />
          </IconButton>
    */
