import React, { useState } from "react";
import InputDraggable from "./InputDraggable";

const App = () => {
  const [data, setData] = useState({
    ideas: [
      {
        id: 1,
        content: "New Idea",
        style: {
          width: 300,
          height: 300,
          top: "200px",
          left: "50px"
        }
      },
     
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
        <div>
          <InputDraggable
            idea={idea}
            key={i}
            addNewIdea={addNewIdea}
            deleteIdea={deleteIdea}
          />
        </div>
      ))}
    </div>
  );
};

export default App;
