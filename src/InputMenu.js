import React from "react";

import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core/styles";

import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import SettingsIcon from "@material-ui/icons/Settings"; // setting

import VideoCallIcon from "@material-ui/icons/VideoCall"; // video
import InsertPhotoIcon from "@material-ui/icons/InsertPhoto"; // imagem
import CreateIcon from "@material-ui/icons/Create"; // edit
import AddIcon from "@material-ui/icons/Add"; // new

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

  const handleClick = e => {
    setAnchorEl(e.currentTarget);
    console.log("handleClick inputMenu");
  };

  const handleClose = e => {
    setAnchorEl(null);

    console.log("handle Close inputMenu" + e.target.value);
  };
  const classes = useStyles();
  /* const [value, setValue] = React.useState("Controlled");
  const handleChange = event => {
    setValue(event.target.value);
  };*/

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
        <MenuItem value="1" onClick={handleClose}>
          <AddIcon />
        </MenuItem>
        <MenuItem value="2" onClick={handleClose}>
          <CreateIcon />
        </MenuItem>
        <MenuItem value="3" onClick={handleClose}>
          <VideoCallIcon />
        </MenuItem>
        <MenuItem value="4" onClick={handleClose}>
          <InsertPhotoIcon />
        </MenuItem>
        <MenuItem value="5" onClick={handleClose}>
          <DeleteIcon />
        </MenuItem>
      </Menu>
    </div>
  );
};

export default InputMenu;
