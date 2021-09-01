import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';

export default function NavBar() {
  return (
    <div>
      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h6">
            <MenuIcon fontSize="small" />
            Vasil
          </Typography>
          <Typography variant="h6">
            <MenuIcon fontSize="small" />
            Sami
          </Typography>
          <Typography variant="h6">
            <MenuIcon fontSize="small" />
            Ana
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
