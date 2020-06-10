import React, { useRef, useEffect } from "react";

import "./styleKipura.css";

var active = false;
var currentX;
var currentY;
var initialX;
var initialY;
var xOffset = 0;
var yOffset = 0;

var dragItem, container;

const InputDraggKipura = props => {
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

      container.addEventListener("touchstart", dragStart, false);
      container.addEventListener("touchend", dragEnd, false);
      container.addEventListener("touchmove", drag, false);

      container.addEventListener("mousedown", dragStart, false);
      container.addEventListener("mouseup", dragEnd, false);
      container.addEventListener("mousemove", drag, false);
    });
  }, []);

  const dragStart = e => {
    if (e.type === "touchstart") {
      initialX = e.touches[0].clientX - xOffset;
      initialY = e.touches[0].clientY - yOffset;
    } else {
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

    active = false;
  };

  const drag = e => {
    if (active) {
      e.preventDefault();

      if (e.type === "touchmove") {
        currentX = e.touches[0].clientX - initialX;
        currentY = e.touches[0].clientY - initialY;
      } else {
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
    <div id="container" ref={divContainer}>
      <div id="item" ref={divDragItem}></div>
    </div>
  );
};

export default InputDraggKipura;
