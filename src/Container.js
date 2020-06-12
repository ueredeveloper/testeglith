import React, { useEffect, useRef } from "react";
import Draggable from "./Draggable";
import "./style.css";

const Container = props => {
  var active = false;
  var initialX = 0;
  var initialY = 0;
  var currentX = 0;
  var currentY = 0;

  var xOffset = 0;
  var yOffset = 0;
  
  const containerRef = useRef(null);
  const dragItemRef = useRef(null);
  var container, draggable;

  useEffect(() => {
    container = containerRef.current;
    draggable = dragItemRef.current;
  });

  const onMouseDown = e => {
    console.log("on mouse down");
    initialX = e.clientX - xOffset;
    initialY = e.clientY - yOffset;

    if (e.target === draggable) {
      active = true;
    }
  };

  const onMouseMove = e => {
    console.log("on mouse move");

    if (active) {
      e.preventDefault();

      currentX = e.clientX - initialX;
      currentY = e.clientY - initialY;

      xOffset = currentX;
      yOffset = currentY;

      setTranslate(currentX, currentY, draggable);
    }
  };

  const onDragEnd = () => {
    console.log("on drag end ");
    initialX = currentX;
    initialY = currentY;

    active = false;

    // parse int retira as casas decimais no caso de touchmove
    props.idea.style.top = parseInt(initialY, 10);
    props.idea.style.left = parseInt(initialX, 10);
    props.idea.style.width = draggable.offsetWidth;
    props.idea.style.height = draggable.offsetHeight;

    props.updateIdea(props.idea);
  };

  const onTouchStart = e => {
    console.log("touch start");
    initialX = e.touches[0].clientX - xOffset;
    initialY = e.touches[0].clientY - yOffset;

    if (e.target === draggable) {
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

      setTranslate(currentX, currentY, draggable);
    }
  };

  const setTranslate = (xPos, yPos, el) => {
    el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
  };
  
  return (
    <div id="container" ref={containerRef}
      onTouchStart={onTouchStart}
      onTouchEnd={onDragEnd}
      onTouchMove={onTouchMove}
      onMouseDown={onMouseDown}
      onMouseUp={onDragEnd}
      onMouseMove={onMouseMove}
    >
    <div id="item" ref={dragItemRef}>
      <Draggable idea={props.idea}/>
      </div>
    </div>
  );
};

export default Container;

/*
style={{
        top: props.idea.style.top + "px",
        left: props.idea.style.left + "px"
      }}
      */
