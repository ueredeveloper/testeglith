import React, { Component } from "react";
import "./style.css";
// link http://jsfiddle.net/Af9Jt/2/

var pos1 = 0,
  pos2 = 0,
  pos3 = 0,
  pos4 = 0;

export default class Draggable extends Component {
  constructor(props) {
    super(props);
  }

  elemDrag = e => {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    
    let button = document.getElementById('mydivheader')

    // set the element's new position:
    button.style.top = button.offsetTop - pos2 + "px";
    button.style.left = button.offsetLeft - pos1 + "px";
  };

  render() {
    return (
      <div>
        <div id="mydivheader" onClick={this.elemDrag}>
          Draggable
        </div>
      </div>
    );
  }
}
