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

var dragItem; //, container;
  
  useEffect(() => {

    dragItem = divItem.current;
    //container = divContainer.current;

    console.log(dragItem);

    dragItem.addEventListener("touchstart", dragStart, false);
    dragItem.addEventListener("touchend", dragEnd, false);
    dragItem.addEventListener("touchmove", drag, false);

    dragItem.addEventListener("mousedown", dragStart, false);
    dragItem.addEventListener("mouseup", dragEnd, false);
    dragItem.addEventListener("mousemove", drag, false);
    
  },[]);

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
    
    
    console.log('dragStart ' + active);

    // console.log(dragItem);
  };

  const dragEnd = e => {
    initialX = currentX;
    initialY = currentY;

    active = false;
    
    //console.log('dragEnd')   
   // console.log(dragItem);
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
    
  //  console.log('drag')
       // console.log(dragItem);
  };

  const setTranslate = (xPos, yPos, el) => {
    el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
    
    console.log('setTranslate')
        console.log(dragItem);
  };

  return (
    <div id="outerContainer" ref={divItem}>
      divItem
    </div>
  );
};

export default DraggableKipura;

/*
<div id="container" ref={divContainer}>
        <div id="item"></div>
      </div>*/