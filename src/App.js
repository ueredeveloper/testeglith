import React, { useEffect, useState, useRef } from "react";
import InputDraggable from "./InputDraggable";

const App = () => {
  const [data, setData] = React.useState({
    components: [
      {
        content:"Loop For",
        style: {
          top: "190px",
          left: "200px"
        }
      },
      {
        content:"Switch",
        style: {
          top: "50px",
          left: "400px"
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
