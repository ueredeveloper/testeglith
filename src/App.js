import React, { Component } from "react";

const button = {
  position: "absolute",
  left: "100px",
  top: "150px"
};

const ButtonInput = (value) => {
  return <button>value</button>;
};

export default class App extends Component {
  setX = () => {
    var rect = ButtonInput.getBoundingClientRect();
    //console.log(rect.top, rect.right, rect.bottom, rect.left);
    console.log("clicked");
  };

  render() {
    return (
      <div>
        <div>
          <input></input>
          <ButtonInput id="btn" style={button} onClick={this.setX()}>
           Olá Mundo
          </ButtonInput>
        </div>
      </div>
    );
  }
}
