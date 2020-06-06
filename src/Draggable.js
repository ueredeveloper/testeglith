import React, { Component } from "react";
import "./style.css";
// link http://jsfiddle.net/Af9Jt/2/

var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

export default class Draggable extends Component {
  constructor(props) {
    super(props);
  
  }
   divElement = props => {
    return  <div id="mydivheader">Here</div>;
  };
 
  const divElement = (props) => {
  return 
};
    
    function GuestGreeting(props) {
  return <h1>Please sign up.</h1>;
}

  elementDrag = e => {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
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
