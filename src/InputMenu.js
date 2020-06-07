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

import VideoCallIcon from "@material-ui/icons/VideoCall"; // video
import InsertPhotoIcon from "@material-ui/icons/InsertPhoto"; // imagem
import CreateIcon from "@material-ui/icons/Create"; // edit

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1)
  },
  extendedIcon: {
    marginRight: theme.spacing(1)
  }
}));

const InputMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
    console.log("handleClick inputMenu");
  };

  const handleClose = () => {
    setAnchorEl(null);

    console.log("handle Close inputMenu");
  };
  const classes = useStyles();
  const [value, setValue] = React.useState("Controlled");
  const handleChange = event => {
    setValue(event.target.value);
  };

  return (
    <div>
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
        <MenuItem onClick={handleClose}>
          <CreateIcon />
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <VideoCallIcon />
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <InsertPhotoIcon />
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <DeleteIcon />
        </MenuItem>
      </Menu>
    </div>
  );
};

export default InputMenu;
