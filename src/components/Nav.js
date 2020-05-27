import React from "react";
import { withRouter } from "react-router-dom";
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';

import {useStyles} from '../containers/Home'

function NavBase(props) {
    const classes = useStyles();
    return (
        <>
        <CssBaseline />
        <HideOnScroll {...props}>
          <AppBar className={classes.appbar}>
            <Toolbar>
              <Container maxWidth="md" className={classes.linkContainer}>
                <Typography variant="h6">
                  <a className={classes.aLink} onClick={() => {
                      props.history.push('/')
                  }}>Home</a>
                </Typography>
                <Typography variant="h6" className={classes.link}>
                  <a className={classes.aLink} onClick={() => {
                    props.history.push('/about')
                }}>About</a>
                </Typography>
                <Typography variant="h6" className={classes.link}>
                  <a className={classes.aLink} onClick={() => {
                    props.history.push('/users')
                }}>Contact</a>
                </Typography>
                <Typography variant="h6" className={classes.link}>
                  <a className={classes.aLink}>Newsletter</a>
                </Typography>
              </Container>
            </Toolbar>
          </AppBar>
        </HideOnScroll>
        </>
    )
}


function HideOnScroll(props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({ target: window ? window() : undefined });
  
    return (
      <Slide appear={false} direction="down" in={!trigger}>
        {children}
      </Slide>
    );
}

const Nav = withRouter(NavBase)

export default Nav;