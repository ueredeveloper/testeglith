import React, { useState } from "react";
import InputDraggable from "./InputDraggable";
//import InputDraggable from './teste/InputDraggable.js'
//import InputDraggable from "./kipuraw3/InputDraggable.js";
//import InputDraggable from "./InputDraggable";
const App = () => {
  const [ideas, setIdea] = useState([
    {
      id: 1,
      content: "New Idea",
      style: {
        width: "240",
        height: "100",
        top: "200",
        left: "50"
      }
    },
    {
      id: 2,
      content: "Teste",
      style: {
        width: "240",
        height: "100",
        top: "500",
        left: "50"
      }
    }
  ]);

  const persistIdea = idea => {
    setIdea([...ideas, idea]);
  };

  const deleteIdea = id => {
    /*
    setIdea({
      ...ideas.filter(function(value, index, arr) {
        return value.id !== id;
      })
    });
    */
    setIdea([
      ...ideas.filter(function(value, index, arr) {
        return value.id !== id;
      })
    ]);
  };

  return (
    <div>
      {ideas.map((idea, i) => (
        <InputDraggable
          idea={idea}
          key={i}
          persistIdea={persistIdea}
          deleteIdea={deleteIdea}
        />
      ))}
      {console.log(ideas)}
    </div>
  );
};

export default App;
