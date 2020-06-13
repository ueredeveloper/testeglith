import React, { useEffect, useRef } from "react";

import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import ControlCameraIcon from "@material-ui/icons/ControlCamera";
import IconButton from "@material-ui/core/IconButton";
import InputMenu from "./InputMenu";
import InputForm from "./InputForm";

import "./style.css";

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1)
  },
  extendedIcon: {
    marginRight: theme.spacing(1)
  }
}));

const DraggableItem = props => {
  const draggableItemRef = useRef(null);

  var dragItem;

  var active = false;
  var initialX = 0;
  var initialY = 0;
  var currentX = 0;
  var currentY = 0;

  var xOffset = 0;
  var yOffset = 0;

  useEffect(() => {
    dragItem = draggableItemRef.current;

    document.addEventListener("touchstart", onTouchStart, false);
    document.addEventListener("touchend", onDragEnd, false);
    document.addEventListener("touchmove", onTouchMove, false);

    document.addEventListener("mousedown", e => {
      console.log("on mouse down");
      initialX = e.clientX - xOffset;
      initialY = e.clientY - yOffset;

      if (e.target === dragItem) {
        active = true;
      }
    });

    document.addEventListener("mousemove", e => {
      if (active) {
        e.preventDefault();

        currentX = e.clientX - initialX;
        currentY = e.clientY - initialY;

        xOffset = currentX;
        yOffset = currentY;

        setTranslate(currentX, currentY, dragItem);
      }
    });

    window.addEventListener("mouseup", e => {
      initialX = currentX;
      initialY = currentY;

      active = false;

      updateIdea(dragItem, initialY, initialX);
    });
  });

  const onMouseDown = e => {
    console.log("on mouse down");
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

    updateIdea(dragItem, initialY, initialX);
  };

  const updateIdea = (dragItem, initialY, initialX) => {
    console.log(dragItem.offsetWidth + " , " + dragItem.offsetHeight);

    props.idea.style.top = parseInt(initialY, 10);
    props.idea.style.left = parseInt(initialX, 10);
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

  return (
    <div
      id="item"
      ref={draggableItemRef}
      style={{
        top: props.idea.style.top + "px",
        left: props.idea.style.left + "px"
      }}
    >
      <InputForm idea={props.idea} />
      <InputMenu
        idea={props.idea}
        persistIdea={props.persistIdea}
        deleteIdea={props.deleteIdea}
        updateIdea={props.updateIdea}
      />
    </div>
  );
};

export default DraggableItem;
