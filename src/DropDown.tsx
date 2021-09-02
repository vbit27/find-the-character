import { List, ListItem, ListItemText } from '@material-ui/core';
import clsx from 'clsx';
import React from 'react';
import classes from './DropDown.module.css';

const DropDown = () => {
  return (
    <div className={clsx(classes.container)}>
      <List component="nav" aria-label="secondary mailbox folder">
        <ListItem button>
          <ListItemText primary="Trash" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Spam" />
        </ListItem>
      </List>
    </div>
  );
};

export default DropDown;
