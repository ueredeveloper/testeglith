import React, { Component } from "react";
import "./style.css";
// link http://jsfiddle.net/Af9Jt/2/

const divElement = (
  <div>
    <div id="mydivheader">Here</div>
  </div>
);
export default class Draggable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pos1: null,
      pos2: null,
      pos3: null,
      pos4: null
    };
  }

  elementDrag = e => {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    this.pos1 = this.pos3 - e.clientX;
    this.pos2 = this.pos4 - e.clientY;
    this.pos3 = e.clientX;
    this.pos4 = e.clientY;
    // set the element's new position:
    // elmnt.style.top = elmnt.offsetTop - pos2 + "px";
    //elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
  };

  render() {
    return (
      <div>
        <divElement></divElement>
      </div>
    );
  }
}
