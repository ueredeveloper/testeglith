import React, { useState } from "react";
import InputDraggableW3 from "./InputDraggableW3";

const App = () => {
  const [data, setData] = useState({
    components: [
      {
        content: "Loop For",
        style: {
          top: "318px",
          left: "439px"
        }
      },
      {
        content: "Switch",
        style: {
          top: "120px",
          left: "150px"
        }
      }
    ]
  });

  return (
    <div>
      <div>Olá Mundo Brasil</div>
      {data.components.map((c, i) => (
        <InputDraggableW3 component={c} key={i} />
      ))}
    </div>
  );
};

export default App;
