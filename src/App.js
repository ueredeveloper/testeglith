import React, { useState } from "react";
import InputDraggable from "./InputDraggable";
import InputMenu from "./InputMenu";

const App = () => {
  const [data, setData] = useState({
    ideas: [
      {
        content: "Loop For",
        style: {
          top: "50px",
          left: "10px"
        }
      },
      {
        content: "Switch",
        style: {
          top: "180px",
          left: "10px"
        }
      }
    ]
  });

  return (
    <div>
      <div>Olá Mundo Brasil</div>
      {data.components.map((id, i) => (
        <InputDraggable ideas={id} key={i} />
      ))}
      
       <InputMenu />
    </div>
  );
};

export default App;
