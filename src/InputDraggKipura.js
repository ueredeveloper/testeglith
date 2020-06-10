import React, { useRef } from "react";

import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import ControlCameraIcon from "@material-ui/icons/ControlCamera";
import IconButton from "@material-ui/core/IconButton";

import "./styleKipura.css";
import InputMenu from "./InputMenu";

var initialX;
var initialY;
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
    <div id="container">
      <div id="item"></div>
    </div>
  );
};

export default InputDraggable;
