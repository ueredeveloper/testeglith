import React, { useEffect, useRef } from "react";

import "./style.css";

var currentX;
var currentY;
var initialX;
var initialY;
var xOffset = 0;
var yOffset = 0;

var dragItem, container;

const InputDraggable = props => {
  const divDragItem = useRef(null);
  const divContainer = useRef(null);

  useEffect(() => {
    dragItem = divDragItem.current;
    container = divContainer.current;
    
    
    dragItem.addEventListener("touchstart", dragItem); 
    
    
    
  }, []);

  const onTouchStart = e => {
    initialX = e.touches[0].clientX - xOffset;
    initialY = e.touches[0].clientY - yOffset;

    dragItem.ontouchend = onTouchEnd;
    dragItem.ontouchmove = onTouchMove;
    dragItem.onmousedown = onMouseDown;
  };

  const onTouchMove = e => {
    currentX = e.touches[0].clientX - initialX;
    currentY = e.touches[0].clientY - initialY;

    xOffset = currentX;
    yOffset = currentY;

    setTranslate(currentX, currentY, dragItem);
  };

  const onTouchEnd = e => {
    initialX = currentX;
    initialY = currentY;

    dragItem.ontouchend = null;
    dragItem.ontouchmove = null;
    dragItem.onmousedown = null;
    dragItem.ontouchstart = null;
  };

  const onMouseDown = e => {
    initialX = e.clientX - xOffset;
    initialY = e.clientY - yOffset;

    console.log("on mouse down");
  };

  const setTranslate = (xPos, yPos, el) => {
    el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
  };

  return <div id="item" ref={divDragItem}></div>;
};

export default InputDraggable;
