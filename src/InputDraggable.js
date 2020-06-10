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
  const divRef = useRef(null);
  var container;

  var initialX, initialY, currentX, currentY;

  useEffect(() => {
    container = divRef.current;
  });

  const onMouseDown = e => {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    currentX = e.clientX;
    currentY = e.clientY;
    document.onmouseup = onMouseUp;
    // call a function whenever the cursor moves:
    document.onmousemove = onMouseMove;
  };

  const onMouseMove = e => {
    e = e || window.event;
    e.preventDefault();

    initialX = currentX - e.clientX;
    initialY = currentY - e.clientY;
    currentX = e.clientX;
    currentY = e.clientY;

    container.style.top = container.offsetTop - initialY + "px";
    container.style.left = container.offsetLeft - initialX + "px";
  };

  const onMouseUp = () => {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
    
    props.idea.style.top = container.offsetTop - initialY + "px";
    props.idea.style.left = container.offsetLeft - initialX + "px";
    props.idea.style.width = container.offsetWidth;
    props.idea.style.height = container.offsetHeight;
    

    /*
    props.idea = {
      style: {
        width: container.offsetWidth + "px",
        height: container.offsetHeight + "px",
        top: container.offsetTop - initialY + "px",
        left: container.offsetLeft - initialX + "px"
      }
    };
    */

    //  console.log(container.offsetHeight)
    //  console.log(container.offsetWidth)
  };

  const onTouchStart = e => {
    e = e || window.event;
    //e.preventDefault();

    currentX = e.touches[0].clientX;
    currentY = e.touches[0].clientY;
    document.ontouchend = onTouchEnd;
    document.ontouchmove = onTouchMove;
  };

  const onTouchMove = e => {
    e = e || window.event;

    initialX = currentX - e.touches[0].clientX;
    initialY = currentY - e.touches[0].clientY;
    currentX = e.touches[0].clientX;
    currentY = e.touches[0].clientY;

    container.style.top = container.offsetTop - initialY + "px";
    container.style.left = container.offsetLeft - initialX + "px";
  };

  const onTouchEnd = e => {
    document.ontouchend = null;
    document.ontouchmove = null;

    props.idea.style.top = container.offsetTop - initialY + "px";
    props.idea.style.left = container.offsetLeft - initialX + "px";
    props.idea.style.width = container.offsetWidth;
    props.idea.style.height = container.offsetHeight;
    

    /*
    props.idea = {
      style: {
        width: container.offsetWidth + "px",
        height: container.offsetHeight + "px",
        top: container.offsetTop - initialY + "px",
        left: container.offsetLeft - initialX + "px"
      }
    };
    */

    //  console.log(container.offsetHeight)
    //  console.log(container.offsetWidth)
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
        top: props.idea.style.top,
        left: props.idea.style.left
      }}
      ref={divRef}
    >
      <div>
        <form className={classes.root} noValidate autoComplete="off">
          <IconButton className={classes.margin} size="small">
            <ControlCameraIcon
              onMouseDown={onMouseDown}
              onTouchStart={onTouchStart}
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
        <InputMenu
          idea={props.idea}
          addNewIdea={props.addNewIdea}
          deleteIdea={props.deleteIdea}
        />
      </div>
    </div>
  );
};

export default InputDraggable;
