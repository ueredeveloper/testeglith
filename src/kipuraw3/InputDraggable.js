import React, { useEffect, useRef } from "react";

import "./index.css";

var active = false;
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
  }, []);

  const onTouchStart = e => {
    console.log("on touch start");

    initialX = e.touches[0].clientX - xOffset;
    initialY = e.touches[0].clientY - yOffset;

    //dragItem.ontouchend = onTouchEnd;
    //dragItem.ontouchmove = onTouchMove;
    //dragItem.onmousedown = onMouseDown;

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
    }

    xOffset = currentX;
    yOffset = currentY;

    setTranslate(currentX, currentY, dragItem);
  };

  const onTouchEnd = e => {
    console.log("touch end");
    initialX = currentX;
    initialY = currentY;

    active = false;
    //dragItem.ontouchend = null;
    //dragItem.ontouchmove = null;
    //dragItem.onmousedown = null;
    //dragItem.ontouchstart = null;
  };

  const onMouseDown = e => {
    console.log("on mouse down");
    initialX = e.clientX - xOffset;
    initialY = e.clientY - yOffset;

    if (e.target === dragItem) {
      active = true;
    }
  };

  const setTranslate = (xPos, yPos, el) => {
    el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
  };

  return (
    <div>
      <div
        id="item"
        ref={divDragItem}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        onTouchMove={onTouchMove}
        onMouseDown={onMouseDown}
      ></div>
    </div>
  );
};

export default InputDraggable;
