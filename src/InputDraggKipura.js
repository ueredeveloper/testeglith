import React, { useRef, useEffect, useLayoutEffect } from "react";

import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import ControlCameraIcon from "@material-ui/icons/ControlCamera";
import IconButton from "@material-ui/core/IconButton";

import "./styleKipura.css";

var active = false;
var currentX;
var currentY;
var initialX;
var initialY;
var xOffset = 0;
var yOffset = 0;

var container;

const InputDraggKipura = props => {
  const divRef = useRef(null);

  const longResolve = () => {
    return new Promise(res => {
      setTimeout(res, 3000);
    });
  };

  useEffect(() => {
    longResolve().then(() => {
      container = divRef.current;
     
    });
  }, []);

  return (
    <div id="container">
      { console.log(container)}
      <div id="item"></div>
    </div>
  );
};

export default InputDraggKipura;
