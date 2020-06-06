import React, { useState } from "react";
import "./style.css";

var pos1 = 0,
  pos2 = 0,
  pos3 = 0,
  pos4 = 0;

const Draggable = () => {
  // div
  const DivDrag = (props) => {
    /*
    const style = {
      top: top,
      left: left
    };
    */
    return (
      <div id="mydiv">
        <div id="mydivheader" style={props.style} onClick={props.dragMouseDown}>
          Click here to move
        </div>
      </div>
    );
  };
  
  
  const DivDragg = (props) => {
    return React.DOM.div({
      dragMouseDown: props.dragMouseDown,
      style: {
        position: 'absolute',
        left: 0,
        top: 0
      }
    }, props.children)
  }

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

    console.log(DivDragg);

    // set the element's new position:
    DivDragg.props.style.top = DivDragg.offsetTop - pos2 + "px";
    DivDragg.props.style.left = DivDragg.offsetLeft - pos1 + "px";
  };

  const closeDragElement = () => {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  };

  return (
    <div>
      <DivDragg dragMouseDown={dragMouseDown}></DivDragg>
    </div>
  );
};

export default Draggable;
