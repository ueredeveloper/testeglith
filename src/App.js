import React, { useState } from "react";
import InputDraggable from "./InputDraggable";

const App = () => {
  const [data, setData] = useState({
    components: [
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
      {data.components.map((c, i) => (
        <InputDraggable component={c} key={i} />
      ))}
    </div>
  );
};

export default App;
