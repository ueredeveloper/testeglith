import React, { useState } from "react";
import InputDraggable from "./InputDraggable";


const App = () => {
  const [data, setData] = useState({
    ideas: [
      {
        content: "Loop For",
        style: {
          top: "50px",
          left: "10px"
        }
      },
      {
        content: "Switch",
        style: {
          top: "180px",
          left: "10px"
        }
      }
    ]
  });
  
  const addNewIdea=(idea)=>{
    console.log('App add new  Idea')
    
     setData({
        ...data,
        ideas: [...data.ideas, idea]
      });
  }
  
    const deleteIdea =(id)=>{
    console.log('App deleteIdea')
    
     setData({
        ...data,
        ideas: [...data.ideas, idea]
      });
  }
    

  return (
    <div>
      <div>Olá Mundo Brasil</div>
      {data.ideas.map((idea, i) => (
        <div>
          <InputDraggable idea={idea} key={i} addNewIdea={addNewIdea} />
         
        </div>
      ))}
    </div>
  );
};

export default App;
