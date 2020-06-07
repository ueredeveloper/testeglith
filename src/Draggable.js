import React, { useState } from "react";
import "./style.css";

var pos1 = 0,
  pos2 = 0,
  pos3 = 0,
  pos4 = 0;

const Draggable = () => {
  // div
  const DivDrag = props => {
    style :{
      top: 0,
      left: 0
    }
    return (
      <div
        id="mydiv"
        onClick={props.dragMouseDown}
      >
        <div id="mydivheader">Click here to move</div>
      </div>
    );
  };

  const dragMouseDown = e => {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  };

  const elementDrag = e => {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;

    console.log(DivDrag);

    // set the element's new position:
    DivDrag.props.style.top = DivDrag.offsetTop - pos2 + "px";
    DivDrag.props.style.left = DivDrag.offsetLeft - pos1 + "px";
  };

  const closeDragElement = () => {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  };

  return (
    <div>
      <DivDrag
        dragMouseDown={dragMouseDown}
        style={{ style: { top: 0, left: 0 } }}
      ></DivDrag>
    </div>
  );
};

export default Draggable;
