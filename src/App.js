import React, { useState, useEffect, useRef } from "react";
import InputDraggable from "./InputDraggable";
//import InputDraggable from './teste/InputDraggable.js'
//import InputDraggable from "./kipuraw3/InputDraggable.js";
//import InputDraggable from "./InputDraggable";
import DraggableItem from "./DraggableItem";
import "./style.css";

const App = () => {
  const divContainerRef = useRef();
  const [container, setContainer] = useState(null);

  useEffect(() => {
    setContainer(divContainerRef.current);
  }, []);

  const [ideas, setIdea] = useState([
    {
      id: 0,
      content: "New Idea",
      style: {
        width: "240",
        height: "100",
        top: "200",
        left: "50"
      }
    },

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
      content: "New Idea",
      style: {
        width: "240",
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
    setIdea([
      ...ideas.filter(function(value, index, arr) {
        return value.id !== id;
      })
    ]);
  };

  const updateIdea = idea => {
    console.log("update");
    console.log(idea.style);
    return event =>
      setIdea(
        ideas.map(i => {
          if (i === idea) return { ...idea, value: event.target.value };
          return i;
        })
      );
  };

  return (
    <div id="container" ref={divContainerRef}>
      {ideas.map((idea, i) => (
        <DraggableItem
          key={i}
          idea={idea}
          container={container}
          persistIdea={persistIdea}
          deleteIdea={deleteIdea}
          updateIdea={updateIdea}
        />
      ))}
      {console.log(ideas)}
    </div>
  );
};

export default App;

/*
<div>
      <div id="container" ref={containerRef}>
        <Container>
          {ideas.map((idea, i) => (
            <div key={i} id="item" ref={dragItemRef}>
              <Draggable
                idea={idea}
                persistIdea={persistIdea}
                deleteIdea={deleteIdea}
                updateIdea={updateIdea}
              />
            </div>
          ))}
        </Container>
      </div>
    </div>
    */

/*

 {ideas.map((idea, i) => (
        <InputDraggable
          idea={idea}
          key={i}
          persistIdea={persistIdea}
          deleteIdea={deleteIdea}
          updateIdea={updateIdea}
        />
      ))}
      {ideas.map((idea, i) => (
        console.log(idea.style)
      ))}
      
      */
