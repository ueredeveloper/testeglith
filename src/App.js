import React, { Component } from "react";

  const button = {
    position: 'absolute',
    left: '100px',
    top: '150px',
  }
  
  const btnInput = ()=> {
    return <button id="btn" style={button} onClick={this.setX()}>.</button>
      
      
  }
  
export default class App extends Component {
  


  setX = () => {
    var rect = bntInput.getBoundingClientRect();
    console.log(rect.top, rect.right, rect.bottom, rect.left);
  };

  render() {
    return (
      <div>
        <div>
          <input></input>
          
        </div>
      </div>
    );
  }
}
