import React, { useEffect, useRef } from "react";

import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import ControlCameraIcon from "@material-ui/icons/ControlCamera";
import IconButton from "@material-ui/core/IconButton";
import InputMenu from "./InputMenu";

import "./style.css";

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1)
  },
  extendedIcon: {
    marginRight: theme.spacing(1)
  }
}));

const InputDraggable = props => {
  const dragItemRef = useRef(null);
  const containerRef = useRef(null);
  var dragItem, container;

  var active = false;
  var initialX = 0;
  var initialY = 0;
  var currentX = 0;
  var currentY = 0;

  var xOffset = 0;
  var yOffset = 0;

  useEffect(() => {
    dragItem = dragItemRef.current;
    container = containerRef.current;
  });

  const onMouseDown = e => {
    initialX = e.clientX - xOffset;
    initialY = e.clientY - yOffset;

    if (e.target === dragItem) {
      active = true;
    }
  };

  const onMouseMove = e => {
    if (active) {
      e.preventDefault();

      currentX = e.clientX - initialX;
      currentY = e.clientY - initialY;

      xOffset = currentX;
      yOffset = currentY;

      setTranslate(currentX, currentY, dragItem);
    }
  };

  const onDragEnd = () => {
    initialX = currentX;
    initialY = currentY;

    active = false;

    props.idea.style.top = initialY;
    props.idea.style.left = initialX;
    props.idea.style.width = dragItem.offsetWidth;
    props.idea.style.height = dragItem.offsetHeight;
    
    props.updateIdea(props.idea);
    
  };

  const onTouchStart = e => {
    console.log("touch start");
    initialX = e.touches[0].clientX - xOffset;
    initialY = e.touches[0].clientY - yOffset;

    if (e.target === dragItem) {
      active = true;
    }
  };

  const onTouchMove = e => {
    console.log("touch move");
    if (active) {
      e.preventDefault();

      currentX = e.touches[0].clientX - initialX;
      currentY = e.touches[0].clientY - initialY;

      xOffset = currentX;
      yOffset = currentY;

      setTranslate(currentX, currentY, dragItem);
    }
  };

  const setTranslate = (xPos, yPos, el) => {
    el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
  };

  const classes = useStyles();
  const [value, setValue] = React.useState(props.idea.content);
  const handleChange = event => {
    setValue(event.target.value);
  };
  return (
    <div
      id="container"
      style={{
        top: props.idea.style.top + "px",
        left: props.idea.style.left + "px"
      }}
      ref={containerRef}
      onTouchStart={onTouchStart}
      onTouchEnd={onDragEnd}
      onTouchMove={onTouchMove}
      onMouseDown={onMouseDown}
      onMouseUp={onDragEnd}
      onMouseMove={onMouseMove}
    >
      <div id="item" ref={dragItemRef}>
        <form className={classes.root} noValidate autoComplete="off">
          <TextField
            id="standard-textarea"
            label="Multiline Placeholder"
            placeholder="Placeholder"
            multiline
            value={value}
            onChange={handleChange}
          />
        </form>
        <InputMenu
          idea={props.idea}
          persistIdea={props.persistIdea}
          deleteIdea={props.deleteIdea}
        />
      </div>
    </div>
  );
};

export default InputDraggable;
