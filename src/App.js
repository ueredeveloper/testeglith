import React, { useState, useEffect } from "react";
//import InputDraggable from "./InputDraggable";
//import InputDraggable from './teste/InputDraggable.js'
//import InputDraggable from "./kipuraw3/InputDraggable.js";
//import InputDraggable from "./InputDraggable";
import DraggableItem from "./DraggableItem";
import "./index.css";

const App = () => {
  const [ideas, setIdeas] = useState([
    {
      id: 0,
      content: "New Idea",
      style: {
        left: "100",
        top: "200",
      }
    }
  ]);

  useEffect(() => {

    console.log(ideas)

  });

  const persistIdea = idea => {
    setIdeas([...ideas, idea]);
  };

  const updateIdea = (curX, curY, idea) => {
    setIdeas(ideas.map(i => {
      if (i.id === idea.id) {
        i = { ...idea, style: { left: curX, top: curY } };
      }
      return i;
    }))
  };

  const deleteIdea = idea => {
    //id=0 - nao deletar o primeiro quadro
    if (idea.id !== 0) {
      setIdeas(ideas.filter((i) => i !== idea));
    }

  };

  return (
    <div id='container'>
      {ideas.map((idea, i) => (
        <DraggableItem
          key={i}
          idea={idea}
          persistIdea={persistIdea}
          deleteIdea={deleteIdea}
          updateIdea={updateIdea}
        />
      ))}
    </div>
  );
};

export default App;

