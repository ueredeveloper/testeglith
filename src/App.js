import React, { useState } from "react";
import InputDraggable from "./InputDraggable";

const App = () => {
  const [data, setData] = useState({
    ideas: [
      {
        id: 1,
        content: "Loop For",
        style: {
          top: "50px",
          left: "10px"
        }
      },
      {
        id: 2,
        content: "Switch",
        style: {
          top: "180px",
          left: "10px"
        }
      }
    ]
  });

  const addNewIdea = idea => {
    console.log("App add new  Idea");

    setData({
      ...data,
      ideas: [...data.ideas, idea]
    });
  };

  const deleteIdea = id => {
    console.log("App deleteIdea " + id);
 
    /*
    for (var i = 0; i < data.ideas.length; i++) {
      if (data.ideas[i].id === 1) {
        data.ideas.splice(i, 1);
      }
    }
    */

    
    setData(data.ideas.filter(idea => idea.id !== id));
    

    
    
  };

  return (
    <div>
      <div>Olá Mundo Brasil</div>
      {     console.log(data.ideas)}
      {data.ideas.map((idea, i) => (
        <div>
          <InputDraggable idea={idea} key={i} addNewIdea={addNewIdea} deleteIdea={deleteIdea} />
        </div>
      ))}
    </div>
  );
};

export default App;
