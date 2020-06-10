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

  const longResolve = () => {
    return new Promise(res => {
      setTimeout(res, 3000);
    });
  };

  useEffect(() => {
    longResolve().then(() => {
      dragItem = divDragItem.current;
      container = divContainer.current;
    });
  }, []);

  const onTouchStart = e => {
    initialX = e.touches[0].clientX - xOffset;
    initialY = e.touches[0].clientY - yOffset;

    document.ontouchend = onTouchEnd;
    document.ontouchmove = onTouchMove;
    document.onmousedown = onMouseDown;
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

    document.ontouchend = null;
    document.ontouchmove = null;
    document.onmousedown = null;
  };

  const onMouseDown = e => {
    initialX = e.clientX - xOffset;
    initialY = e.clientY - yOffset;
    
    console.log('on mouse down')
  };

  const setTranslate = (xPos, yPos, el) => {
    el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
  };

  return (
    <div id="container" ref={divContainer} onTouchStart={onTouchStart}>
      <div id="item" ref={divDragItem}></div>
    </div>
  );
};

export default InputDraggable;
