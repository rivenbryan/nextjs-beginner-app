import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}));

function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            My Website
          </Typography>
          <Typography variant="subtitle1">
            Home
          </Typography>
          <Typography variant="subtitle1">
            About
          </Typography>
          <Typography variant="subtitle1">
            Contact
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
