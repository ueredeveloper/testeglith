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

const InputMenu = props => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = e => {
    setAnchorEl(e.currentTarget);
    //console.log("handleClick inputMenu");
  };

  const handleClose = e => {
    setAnchorEl(null);

    let value = e.currentTarget.value;
    //console.log(value);
    switch (value) {
      case 1:
        persistIdea();
        break;
      case 5:
        deleteIdea(props.idea.id);

        break;
      default:
    }
  };
  const classes = useStyles();
  const [value, setValue] = React.useState("Controlled");

  const handleChange = e => {
    //setValue(event.target.value);
    console.log("handle change " + e.target.value);
  };

  const deleteIdea = id => {
    props.deleteIdea(id);
  };

   const persistIdea = () => {

    let positionX = parseInt( props.idea.style.left, 10) + 240;
    let positionY =  parseInt(props.idea.style.top, 10) - 80;


    console.log('persist idea x y ' + props.idea.style.left + ' ' + props.idea.style.top)

    let idea = {
      id: Math.floor(Math.random() * 10000),
      content: "New Idea",
      style: {
        left: positionX,
        top: positionY
       
      }
    };

    props.persistIdea(idea);
  };


  return (
    <div id="divMenu">
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
