import React, { useState } from "react";
//import InputDraggable from "./InputDraggable";
import InputDraggKipura from "./InputDraggKipura";

const App = () => {
  const [data, setData] = useState({
    ideas: [
      {
        id: 1,
        content: "New Idea",
        style: {
          width: "240px",
          height: "100px",
          top: "200px",
          left: "50px"
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
          <InputDraggKipura
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
