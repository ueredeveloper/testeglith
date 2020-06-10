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
        addNewIdea();
        break;
      case 5:
        deleteIdea(props.idea.id);

        break;
      default:
    }
  };
  const classes = useStyles();
  /* const [value, setValue] = React.useState("Controlled");*/
  /*
  const handleChange = e => {
    //setValue(event.target.value);
    console.log('handle change ' + e.target.value)
  };*/

  const deleteIdea = id => {
    props.deleteIdea(id);
  };

  const addNewIdea = () => {
    // gerar numero de id aleatori Math.randon...
    // expressao regular para retirar 'px', somar com valor e concaternar novamente 'px'

    let positionY =
      parseFloat(props.idea.style.top.replace(/[^\d]+/g, "")) +
      props.idea.style.height +
      "px";
    let positionX =
      parseFloat(props.idea.style.left.replace(/[^\d]+/g, "")) +
      props.idea.style.width +
      "px";

    console.log("x " + positionX + " y " + positionY);
    let idea = {
      id: Math.floor(Math.random() * 10000),
      content: "New Idea",
      style: {
        width: props.idea.style.width + "px",
        height: props.idea.style.height + "px",
        top: positionY,
        left: positionX
      }
    };

    props.addNewIdea(idea);
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
