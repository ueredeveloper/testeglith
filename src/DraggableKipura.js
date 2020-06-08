import React, { useEffect, useState, useRef } from "react";

import "./styleDK.css";

const DraggableKipura = props => {
  const divItem = useRef(null);
  const divContainer = useRef(null);
  var active = false;
  var currentX;
  var currentY;
  var initialX;
  var initialY;
  var xOffset = 0;
  var yOffset = 0;

 // const [dragItem, setDragItem] = useState(null);
 // const [container, setContainer] = useState(null);

  useEffect(() => {

    //setDragItem(divItem.current);
   // setContainer(divContainer.current);

    console.log(dragItem);

    //container.addEventListener("touchstart", dragStart,  null);
    
  });

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
      
      let dragItem = divItem.current;

      setTranslate(currentX, currentY, dragItem);
    }
  };

  const setTranslate = (xPos, yPos, el) => {
    el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
  };

  return (
    <div id="outerContainer" ref={divItem}>
      <div id="container" ref={divContainer}>
        <div id="item"></div>
      </div>
    </div>
  );
};

export default DraggableKipura;
