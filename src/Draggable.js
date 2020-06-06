import React, { Component } from "react";

// link http://jsfiddle.net/Af9Jt/2/

export default class Draggable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initialProps: { x: 0, y: 0 }
    };
  }
  
  
  onMouseDown = (e) => {
    // only left mouse button
    if (e.button !== 0) return
    var pos = (this.getDOMNode()).offset()
    this.setState({
      dragging: true,
      rel: {
        x: e.pageX - pos.left,
        y: e.pageY - pos.top
      }
    })
    e.stopPropagation()
    e.preventDefault()
    
    console.log(pos)
  }

  render() {
    return <div><button onClick={this.onMouseDown}></button></div>;
  }
}
