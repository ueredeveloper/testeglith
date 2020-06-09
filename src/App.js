import React, { useState } from "react";
import InputDraggableMouseAndTouch from "./InputDraggableMouseAndTouch";

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
        <InputDraggableMouseAndTouch component={c} key={i} />
      ))}
    </div>
  );
};

export default App;
