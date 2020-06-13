import React, { useEffect, useRef } from "react";

import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import ControlCameraIcon from "@material-ui/icons/ControlCamera";
import IconButton from "@material-ui/core/IconButton";
import InputMenu from "./InputMenu";
import InputForm from "./InputForm";

import "./style.css";

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1)
  },
  extendedIcon: {
    marginRight: theme.spacing(1)
  }
}));

const DraggableItem = props => {
  const draggableItemRef = useRef(null);

  var dragItem;

  var active = false;
  var initialX = 0;
  var initialY = 0;
  var currentX = 0;
  var currentY = 0;

  var xOffset = 0;
  var yOffset = 0;

  useEffect(() => {
    dragItem = draggableItemRef.current;
    console.log(props.container);
    if (props.container) {
      //props.container.onmousedown = onMouseDown;
      props.container.ontouchstart = onTouchStart;
      props.container.ontouchend = onDragEnd;
      props.container.ontouchmove = onTouchMove;
      props.container.onmousedown = onMouseDown;
      props.container.onmouseup = onDragEnd;
      props.container.onmousemove = onMouseMove;
      
      
      props.container.addEventListener('touchstart', onTouchStart, false);
      props.container.addEventListener('touchend', onDragEnd, false);
props.container.addEventListener('touchmove', onTouchMove, false);
props.container.addEventListener('mousedown ', onMouseDown, false);
props.container.addEventListener('mouseup', onDragEnd, false);
      props.container.addEventListener('mousemove', onMouseMove, false);
      
      
    }
  });

  const onMouseDown = e => {
    console.log("on mouse down");
    initialX = e.clientX - xOffset;
    initialY = e.clientY - yOffset;

    if (e.target === dragItem) {
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

      setTranslate(currentX, currentY, dragItem);
    }
  };

  const onDragEnd = () => {
    initialX = currentX;
    initialY = currentY;

    active = false;

    // parse int retira as casas decimais no caso de touchmove
    /*
    props.idea.style.top = parseInt(initialY, 10);
    props.idea.style.left = parseInt(initialX, 10);
    props.idea.style.width = dragItem.offsetWidth;
    props.idea.style.height = dragItem.offsetHeight;
    */

    // props.updateIdea(props.idea);
  };

  const onTouchStart = e => {
    console.log("touch start");
    initialX = e.touches[0].clientX - xOffset;
    initialY = e.touches[0].clientY - yOffset;

    if (e.target === dragItem) {
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

      setTranslate(currentX, currentY, dragItem);
    }
  };

  const setTranslate = (xPos, yPos, el) => {
    el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
  };

  return <div id="item" ref={draggableItemRef}></div>;
};

export default DraggableItem;
