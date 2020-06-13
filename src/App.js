import React, { useState, useEffect, useRef } from "react";
//import InputDraggable from "./InputDraggable";
//import InputDraggable from './teste/InputDraggable.js'
//import InputDraggable from "./kipuraw3/InputDraggable.js";
//import InputDraggable from "./InputDraggable";
import DraggableItem from "./DraggableItem";
import "./style.css";

const App = () => {
  const [ideas, setIdea] = useState([
    {
      id: 0,
      content: "New Idea",
      style: {
        width: "220",
        height: "100",
        top: "200",
        left: "50"
      }
    }
  ]);

  const persistIdea = idea => {
    setIdea([...ideas, idea]);
  };

  const deleteIdea = id => {
    //nao deletar o primeiro quadro
    if (id !== 0)
      setIdea([
        ...ideas.filter(function(value, index, arr) {
          return value.id !== id;
        })
      ]);
  };

  const updateIdea = idea => {
    //console.log("update");
    //console.log(idea.style);
    return event =>
      setIdea(
        ideas.map(i => {
          if (i === idea) return { ...idea, value: event.target.value };
          return i;
        })
      );
  };

  return (
    <>
      {ideas.map((idea, i) => (
        <DraggableItem
          key={i}
          idea={idea}
          persistIdea={persistIdea}
          deleteIdea={deleteIdea}
          updateIdea={updateIdea}
        />
      ))}
    </>
  );
};

export default App;
