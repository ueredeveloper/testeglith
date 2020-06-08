import React, { useEffect, useState, useRef } from "react";

import "./styleDK.css";

const DraggableKipura = props => {
  
   const divRef = useRef(null);
  
   let div = divRef.current;
  
  console.log(div)
  
  return (
    <div id="outerContainer" ref={divRef}>
      <div id="container">
        <div id="item"></div>
      </div>
    </div>
  );
};

export default DraggableKipura;
