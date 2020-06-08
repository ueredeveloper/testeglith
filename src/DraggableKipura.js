import React, { useEffect, useState, useRef } from "react";

import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import ControlCameraIcon from "@material-ui/icons/ControlCamera";
import IconButton from "@material-ui/core/IconButton";
import "./styleDK.css";

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1)
  },
  extendedIcon: {
    marginRight: theme.spacing(1)
  }
}));

const DraggableKipura = props => {
  const divIconContainer = useRef(null);
  const divContainer = useRef(null);
  var active = false;
  var currentX;
  var currentY;
  var initialX;
  var initialY;
  var xOffset = 0;
  var yOffset = 0;

var iconContainer, container;
  
  useEffect(() => {

    iconContainer = divIconContainer.current;
    container = divContainer.current;

    console.log(iconContainer);

    iconContainer.addEventListener("touchstart", dragStart, false);
    iconContainer.addEventListener("touchend", dragEnd, false);
    iconContainer.addEventListener("touchmove", drag, false);

    iconContainer.addEventListener("mousedown", dragStart, false);
    iconContainer.addEventListener("mouseup", dragEnd, false);
    iconContainer.addEventListener("mousemove", drag, false);
    
  },[]);

  const dragStart = e => {
    if (e.type === "touchstart") {
      initialX = e.touches[0].clientX - xOffset;
      initialY = e.touches[0].clientY - yOffset;
    } else {
      initialX = e.clientX - xOffset;
      initialY = e.clientY - yOffset;
    }

    if (e.target === iconContainer) {
      active = true;
      
    }
    
    
    console.log('dragStart ' + active);

    // console.log(dragItem);
  };

  const dragEnd = e => {
    initialX = currentX;
    initialY = currentY;

    active = false;
    
    //console.log('dragEnd')   
   // console.log(dragItem);
  };

  const drag = e => {
    if (active) {
      e.preventDefault();

      if (e.type === "touchmove") {
        currentX = e.touches[0].clientX - initialX;
        currentY = e.touches[0].clientY - initialY;
      } else {
        currentX = e.clientX - initialX;
        currentY = e.clientY - initialY;
      }

      xOffset = currentX;
      yOffset = currentY;
      
      setTranslate(currentX, currentY, container);
    }
    
  //  console.log('drag')
       // console.log(dragItem);
  };

  const setTranslate = (xPos, yPos, el) => {
    el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
    
    console.log('setTranslate')
        console.log(iconContainer);
  };
  
    const classes = useStyles();
  const [value, setValue] = React.useState(props.component.content);
  const handleChange = event => {
    setValue(event.target.value);
  };

 return (
    <div
      id="mydiv"
      style={{
        top: props.component.style.top,
        left: props.component.style.top
      }}
      ref={divContainer}
      type="text"
    >
      <div>
        <form className={classes.root} noValidate autoComplete="off">
          <IconButton className={classes.margin} size="small">
            <ControlCameraIcon
        ref={divMoveContainer}
              fontSize="small"
            />
          </IconButton>
          <TextField
            id="standard-textarea"
            label="Multiline Placeholder"
            placeholder="Placeholder"
            multiline
            value={value}
            onChange={handleChange}
          />
        </form>
      </div>
    </div>
  );
};

export default DraggableKipura;

/*
<div id="container" ref={divContainer}>
        <div id="item"></div>
      </div>*/