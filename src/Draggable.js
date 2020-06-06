import React, { Component } from "react";

export default class Draggable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initialProps: { x: 0, y: 0 }
    };
  }

  render() {
    return <div>Dragable</div>;
  }
}
