import { List, ListItem, ListItemText } from '@material-ui/core';
import clsx from 'clsx';
import React from 'react';
import classes from './DropDown.module.css';

const DropDown: React.FC<DropDownProp> = ({ xPos, yPos, showMenu }) => {
  /*<List component="nav" aria-label="secondary mailbox folder">
  <ListItem button>
    <ListItemText primary="Trash" />
  </ListItem>
  <ListItem button>
    <ListItemText primary="Spam" />
  </ListItem>
</List>*/
  return (
    <div
      className={clsx(classes.container)}
      style={{
        top: yPos - 20,
        left: xPos - 20,
      }}
    ></div>
  );
};

export default DropDown;

interface DropDownProp {
  xPos: number;
  yPos: number;
  showMenu: React.Dispatch<React.SetStateAction<boolean>>;
}
