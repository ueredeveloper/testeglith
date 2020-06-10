import React, { useRef, useEffect } from "react";

import "./style.css";

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

  const longResolve = () => {
    return new Promise(res => {
      setTimeout(res, 3000);
    });
  };

  useEffect(() => {
    longResolve().then(() => {
      dragItem = divDragItem.current;
      container = divContainer.current;

      dragItem.addEventListener("touchstart", dragStart, false);
      dragItem.addEventListener("touchend", dragEnd, false);
      dragItem.addEventListener("touchmove", drag, false);

      dragItem.addEventListener("mousedown", dragStart, false);
      dragItem.addEventListener("mouseup", dragEnd, false);
      dragItem.addEventListener("mousemove", drag, false);
    });
  }, []);

  const dragStart = e => {
    if (e.type === "touchstart") {
      console.log('dragStart - touch start')
      initialX = e.touches[0].clientX - xOffset;
      initialY = e.touches[0].clientY - yOffset;
    } else {
      console.log("dragStart - " + e.type);
      initialX = e.clientX - xOffset;
      initialY = e.clientY - yOffset;
    }

    if (e.target === dragItem) {
      active = true;
    }
  };

  const dragEnd = e => {
    initialX = currentX;
    initialY = currentY;
    console.log("drag end");

    active = false;
  };

  const drag = e => {
    if (active) {
      e.preventDefault();

      if (e.type === "touchmove") {
        
        console.log('drag touch move')
        currentX = e.touches[0].clientX - initialX;
        currentY = e.touches[0].clientY - initialY;
      } else {
        console.log("else drag " + e.type);
        currentX = e.clientX - initialX;
        currentY = e.clientY - initialY;
      }

      xOffset = currentX;
      yOffset = currentY;

      setTranslate(currentX, currentY, dragItem);
    }
  };

  const setTranslate = (xPos, yPos, el) => {
    el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
  };

  return (
     <div id="item" ref={divDragItem}></div>
  );
};

export default InputDraggable;
