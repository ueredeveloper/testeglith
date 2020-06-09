import React, { useEffect, useState, useRef } from "react";

import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import ControlCameraIcon from "@material-ui/icons/ControlCamera";
import IconButton from "@material-ui/core/IconButton";
import InputMenu from "./InputMenu";
import "./styleW3.css";

const InputDraggableMouseAndTouch = props => {

  const divContainer = useRef(null);
  var initialX;
  var initialY;
  var currentX;
  var currentY;

  var container;

  useEffect(() => {
    container = divContainer.current;
    console.log(container);
  }, []);

  const dragMouseDown = e => {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    currentX = e.clientX;
    currentY = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;

    console.log("dragMouseDown");
  };

  const elementDrag = e => {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    initialX = currentX - e.clientX;
    initialY = currentY - e.clientY;
    currentX = e.clientX;
    currentY = e.clientY;
    // set the element's new position:
    container.style.top = container.offsetTop - currentY + "px";
    container.style.left = container.offsetLeft - initialX + "px";

    console.log("element drag");
  };

  const closeDragElement = () => {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  };

  return (
    <div id="mydiv" ref={divContainer} onMouseDown={dragMouseDown}>
      <div id="mydivheader">Click here to move</div>
      <p>Move</p>
  
    </div>
  );
};

export default InputDraggableMouseAndTouch;
