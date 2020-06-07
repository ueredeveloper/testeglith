import React, { useEffect, useState, useRef } from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import ControlCameraIcon from "@material-ui/icons/ControlCamera";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import SettingsIcon from "@material-ui/icons/Settings"; // setting
import VideoCallIcon from '@material-ui/icons/VideoCall'; // video
import InsertPhotoIcon from '@material-ui/icons/InsertPhoto'; // imagem
import CreateIcon from '@material-ui/icons/Create'; // edit

import "./style.css";

var pos1 = 0,
  pos2 = 0,
  pos3 = 0,
  pos4 = 0;

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1)
  },
  extendedIcon: {
    marginRight: theme.spacing(1)
  }
}));

const Draggable = () => {
  const divRef = useRef(null);

  const dragMouseDown = e => {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  };

  const elementDrag = e => {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;

    let div = divRef.current;

    // set the element's new position:
    div.style.top = div.offsetTop - pos2 + "px";
    div.style.left = div.offsetLeft - pos1 + "px";
  };

  const closeDragElement = () => {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  };

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const classes = useStyles();
  const [value, setValue] = React.useState("Controlled");
  const handleChange = event => {
    setValue(event.target.value);
  };

  return (
    <div id="mydiv" ref={divRef} onMouseDown={dragMouseDown} type="text">
      <div>
        <form className={classes.root} noValidate autoComplete="off">
          <TextField
            id="standard-textarea"
            label="Multiline Placeholder"
            placeholder="Placeholder"
            multiline
            value={value}
            onChange={handleChange}
          />
          <IconButton className={classes.margin} size="small">
            <ControlCameraIcon fontSize="small" />
          </IconButton>
          <IconButton aria-label="delete" className={classes.margin}>
            <DeleteIcon fontSize="small" />
          </IconButton>

          <IconButton
            className={classes.margin}
            size="small"
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleClick}
          >
            <SettingsIcon fontSize="small" />
          </IconButton>

          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Editar</MenuItem>
            <MenuItem onClick={handleClose}><</MenuItem>
            <MenuItem onClick={handleClose}>Imagem</MenuItem>
          </Menu>
        </form>
      </div>
    </div>
  );
};

export default Draggable;
