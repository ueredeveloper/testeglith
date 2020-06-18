import React, { useState, useEffect, useRef } from "react";
//import InputDraggable from "./InputDraggable";
//import InputDraggable from './teste/InputDraggable.js'
//import InputDraggable from "./kipuraw3/InputDraggable.js";
//import InputDraggable from "./InputDraggable";
import DraggableItem from "./DraggableItem";
import "./index.css";

const App = () => {
  const [ideas, setIdea] = useState([
   {
      id: 0,
      content: "New Idea",
      style: {
        left: "100",
        top: "100",
      }
    }
  ]);

  const persistIdea = idea => {
    setIdea([...ideas, idea]);
  };

  const deleteIdea = id => {
    //id=0 - nao deletar o primeiro quadro
    if (id !== 0)
      setIdea([
        ...ideas.filter(function(value, index, arr) {
          return value.id !== id;
        })
      ]);
  };

  const updateIdea = idea => {

    return event =>
      setIdea(
        ideas.map(i => {
          if (i === idea) return { ...idea, value: event.target.value };
          return i;
        })
      );
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
