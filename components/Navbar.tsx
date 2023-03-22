import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import Link from "next/link";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  link: {
    marginLeft: theme.spacing(2),
  },
}));

function Navbar() {
  const classes = useStyles();

  return (
    <Box sx={{ margin: -1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            My Website
          </Typography>
          <Link href="/" passHref>
            <Typography component={Link} href="/" variant="subtitle1" className={classes.link}>
              Breaking News
            </Typography>
          </Link>
          <Link href="/search" passHref>
            <Typography variant="subtitle1" className={classes.link}>
              Search News
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
