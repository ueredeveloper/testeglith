import React, { useState } from "react";
import InputDraggable from "./InputDraggable";

const App = () => {
  const [data, setData] = useState({
    components: [
      {
        content: "Loop For",
        style: {
          top: "400px",
          left: "400px"
        }
      },
      {
        content: "Switch",
        style: {
          top: "200px",
          left: "200px"
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
