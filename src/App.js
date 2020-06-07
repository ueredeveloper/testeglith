import React, { useEffect, useState, useRef } from "react";
import InputDraggable from "./InputDraggable";

const App = () => {
  const [data, setData] = React.useState({
    components: [
      {
        style: {
          top: "160px",
          left: "193px"
        }
      },
      {
        style: {
          top: "64px",
          left: "175px"
        }
      }
    ]
  });

  return (
    <div>
      <div>Olá Mundo Brasil</div>
      <InputDraggable component={/>
                                 {{data.paths.map((path, i) => (
          <Polygon
            key={i}
            path={path}
            googleMap={googleMap}
            map={map}
            setInformation={setInformation}
          />
        ))}}
    </div>
  );
};

export default App;
