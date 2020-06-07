import React, { useEffect, useState, useRef } from "react";
import Draggable from "./Draggable";

const App = () => {
  
  const [data, setData] = React.useState({
    components: []
  });

  return (
    <div>
      <div>Olá Mundo Brasil</div>
      <Draggable />
    </div>
  );
};

export default App;
