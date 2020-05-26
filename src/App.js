import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Box from '@material-ui/core/Box';
import Slide from '@material-ui/core/Slide';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  appbar: {
    backgroundColor: '#1D3557',
    boxShadow: 'none'
  },
  hero: {
    height: '50vh',
    backgroundColor: '#1D3557',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  },
  linkContainer: {
    display: 'flex'
  },
  link: {
    marginLeft: '20px'
  },
  aLink: {
    cursor: 'pointer'
  },
  herotxt: {
    fontSize: '36px',
    color: '#fff',
    marginTop: '60px'
  },
  img: {
    width: '500px',
    marginRight: '40px'
  },
  bigContent: {
    display: 'flex'
  },
  author: {
    width: '50px',
    borderRadius: '50%'
  },
  authorContainer: {
    marginTop: '80px',
    display: 'flex',
    flexDirection: 'coloumn'
  },
  cardRoot: {
    backgroundColor: '#dfe9f6'
  },
  authorDesc: {
    display: 'flex',
    marginLeft: '10px',
    flexDirection: 'column'
  }
}));

function App(props) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar className={classes.appbar}>
          <Toolbar>
            <Container maxWidth="md" className={classes.linkContainer}>
              <Typography variant="h6">
                <a className={classes.aLink}>Home</a>
              </Typography>
              <Typography variant="h6" className={classes.link}>
                <a className={classes.aLink}>About</a>
              </Typography>
              <Typography variant="h6" className={classes.link}>
                <a className={classes.aLink}>Contact</a>
              </Typography>
              <Typography variant="h6" className={classes.link}>
                <a className={classes.aLink}>Newsletter</a>
              </Typography>
            </Container>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <div className={classes.hero}>
        <Typography variant="span" className={classes.herotxt}>
          Shadid Haque
        </Typography>
        <Typography variant="div">
          Code Crafter
        </Typography>
      </div>
      <Toolbar />
      <Container maxWidth="md">
        <Box my={2}>
          <Card className={classes.cardRoot}>
            <CardActionArea>
              <CardContent className={classes.bigContent}>
              <img className={classes.img} src="https://evolvetours.com/wp-content/uploads/2015/05/banff.jpg" />
              <div>
                <Typography gutterBottom variant="h5" component="h2">
                  Wonders of Nature
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                  across all continents except Antarctica
                </Typography>
                <div className={classes.authorContainer}>
                  <img src='https://shadid.netlify.app/static/photo-8e6eed970ecf5bdda66d87edb15d319b.png' className={classes.author}/>
                  <div className={classes.authorDesc}>
                    <Typography gutterBottom variant="body2" component="span">
                      SHADID HAQUE
                    </Typography>
                    <Typography gutterBottom variant="body2" component="span">
                      May 21, 2020 ~ 3 mins read
                    </Typography>
                  </div>
                </div>
              </div>
              </CardContent>
            </CardActionArea>
          </Card>
        </Box>
        <Box my={2}>
          {[...new Array(12)]
            .map(
              () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
            )
            .join('\n')}
        </Box>
      </Container>
    </React.Fragment>
  );
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

export default App;
