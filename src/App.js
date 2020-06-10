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
