import React, { useEffect, useState, useRef } from "react";
import InputDraggable from "./InputDraggable";

const App = () => {
  const [data, setData] = React.useState({
    components: [
      {
        content:"Loop For",
        style: {
          top: "318px",
          left: "439px"
        }
      },
      {
        content:"Switch",
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
        <InputDraggable component={c} key={i}/>
      ))}
    </div>
  );
};

export default App;
