import React, { useEffect, useRef } from "react";

import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import ControlCameraIcon from "@material-ui/icons/ControlCamera";
import IconButton from "@material-ui/core/IconButton";
import InputMenu from "./InputMenu";

import "./style.css";

const Container = props => {
  const containerRef = useRef(null);
  var container;

  var active = false;
  var initialX = 0;
  var initialY = 0;
  var currentX = 0;
  var currentY = 0;

  var xOffset = 0;
  var yOffset = 0;

  useEffect(() => {
    container = containerRef.current;
  });

  const onMouseDown = e => {
    initialX = e.clientX - xOffset;
    initialY = e.clientY - yOffset;

    if (e.target === props.draggable) {
      active = true;
    }
  };

  const onMouseMove = e => {
    if (active) {
      e.preventDefault();

      currentX = e.clientX - initialX;
      currentY = e.clientY - initialY;

      xOffset = currentX;
      yOffset = currentY;

      setTranslate(currentX, currentY, props.dragable);
    }
  };

  const onDragEnd = () => {
    initialX = currentX;
    initialY = currentY;

    active = false;

    // parse int retira as casas decimais no caso de touchmove
    props.idea.style.top = parseInt(initialY, 10);
    props.idea.style.left = parseInt(initialX, 10);
    props.idea.style.width = props.draggable.offsetWidth;
    props.idea.style.height = props.draggable.offsetHeight;

    props.updateIdea(props.idea);
  };

  const onTouchStart = e => {
    console.log("touch start");
    initialX = e.touches[0].clientX - xOffset;
    initialY = e.touches[0].clientY - yOffset;

    if (e.target === props.draggable) {
      active = true;
    }
  };

  const onTouchMove = e => {
    console.log("touch move");
    if (active) {
      e.preventDefault();

      currentX = e.touches[0].clientX - initialX;
      currentY = e.touches[0].clientY - initialY;

      xOffset = currentX;
      yOffset = currentY;

      setTranslate(currentX, currentY, props.draggable);
    }
  };

  const setTranslate = (xPos, yPos, el) => {
    el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
  };

  return (
    <div
      id="container"
      
      ref={containerRef}
      onTouchStart={onTouchStart}
      onTouchEnd={onDragEnd}
      onTouchMove={onTouchMove}
      onMouseDown={onMouseDown}
      onMouseUp={onDragEnd}
      onMouseMove={onMouseMove}
    ></div>
  );
};

export default Container;

/*
style={{
        top: props.idea.style.top + "px",
        left: props.idea.style.left + "px"
      }}
      */