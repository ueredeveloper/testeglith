import React, { useState } from "react";
import InputDraggable from "./InputDraggable";
//import InputDraggable from './teste/InputDraggable.js'
//import InputDraggable from "./kipuraw3/InputDraggable.js";
//import InputDraggable from "./InputDraggable";
const App = () => {
  const [data, setData] = useState({
    ideas: [
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
          top: "400",
          left: "50"
        }
      }
    ]
  });

  const addNewIdea = idea => {
    setData({
      ...data,
      ideas: [...data.ideas, idea]
    });
  };

  const deleteIdea = id => {
    setData({
      ...data,
      ideas: data.ideas.filter(function(value, index, arr) {
        return value.id !== id;
      })
    });
  };

  return (
    <div>
      {data.ideas.map((idea, i) => (
        <InputDraggable
          idea={idea}
          key={i}
          addNewIdea={addNewIdea}
          deleteIdea={deleteIdea}
        />
      ))}
    </div>
  );
};

export default App;

/*

 <div>
      {data.ideas.map((idea, i) => (
        <InputDraggable
          idea={idea}
          key={i}
          addNewIdea={addNewIdea}
          deleteIdea={deleteIdea}
        />
      ))}
    </div>
    */
