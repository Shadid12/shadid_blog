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
import CardContent from '@material-ui/core/CardContent';

export const useStyles = makeStyles((theme) => ({
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
    display: 'flex',
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
    marginRight: '40px',
    [theme.breakpoints.down('sm')]: {
      width: '250px'
    }
  },

  bigContent: {
    display: 'flex',
    [theme.breakpoints.down('md')]: {
      display: 'block',
    }
  },
  tallContent: {
    display: 'block'
  },
  wideContent: {
    maxWidth: '450px'
  },
  author: {
    width: '50px',
    borderRadius: '50%'
  },
  authorContainer: {
    marginTop: '60px',
    display: 'flex',
    flexDirection: 'coloumn'
  },
  authorContainer_b: {
    marginTop: '20px',
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
  },
  item_a: {
    gridArea: 'a',
    width: '100%',
    maxWidth: '400px',
    [theme.breakpoints.down('sm')]: {
      maxWidth: '100%'
    }
  },
  img_sm: {
    width: '230px'
  },
  item_b: {
    gridArea: 'b' 
  },
  item_c: {
    gridArea: 'c' 
  },
  item_d: {
    border: '1px solid pink',
    height: '275px',
    marginBottom: '20px',
    width: '100%',
    maxWidth: '400px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gridArea: 'd'
  },
  grid_container: {
    display: 'grid',
    gridTemplateRows: 'auto',
    gridTemplateAreas: ` 
      "a a b b"
      "a a c c"
      "d d c c"
    `,
    [theme.breakpoints.down('sm')]: {
      gridTemplateAreas: ` 
      "a a a a"
      "b b b b"
      "c c c c"
      "d d d d"
    `
    }
  }
}));

function Home(props) {
  const classes = useStyles();
  return (
    <React.Fragment>
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
              <img className={classes.img} src="https://soshace-12d3e.kxcdn.com/wp-content/uploads/2020/04/cover-1.png" />
              <div>
                <Typography gutterBottom variant="h5" component="h2">
                  How to build a full stack serverless application with React and Amplify
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  In this practical guide I will walk you through building your very first full stack serverless application with React and AWS Amplify.
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
        <div className={classes.grid_container}>
          <div className={classes.item_a}>
            <Box my={2}>
            <Card className={classes.cardRoot}>
              <CardActionArea>
                <CardContent className={classes.tallContent}>
                <img className={classes.img_sm} src="https://soshace-12d3e.kxcdn.com/wp-content/uploads/2020/04/cover-1.png" />
                <div>
                  <Typography gutterBottom variant="h5" component="h2">
                    How to build a full stack serverless application with React and Amplify
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    In this practical guide I will walk you through building your very first full stack serverless application with React and AWS Amplify.
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
          </div>
          <div className={classes.item_b}>
          <Box my={2}>
            <Card className={classes.cardRoot}>
              <CardActionArea>
                <CardContent className={classes.wideContent}>
                <img className={classes.img_sm} src="https://soshace-12d3e.kxcdn.com/wp-content/uploads/2020/04/cover-1.png" />
                <div>
                  <Typography gutterBottom variant="h5" component="h2">
                    How to build a full stack serverless application with React and Amplify
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    In this practical guide I will walk you through building your very first full stack serverless application with React and AWS Amplify.
                  </Typography>
                  <div className={classes.authorContainer_b}>
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
          </div>
          <div className={classes.item_c}>
          <Box my={2}>
          <Card className={classes.cardRoot}>
            <CardActionArea>
              <CardContent className={classes.wideContent}>
              <img className={classes.img_sm} src="https://soshace-12d3e.kxcdn.com/wp-content/uploads/2020/04/cover-1.png" />
              <div>
                <Typography gutterBottom variant="h5" component="h2">
                  How to build a full stack serverless application with React and Amplify
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  In this practical guide I will walk you through building your very first full stack serverless application with React and AWS Amplify.
                </Typography>
                <div className={classes.authorContainer_b}>
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
          </div>
          <div className={classes.item_d}>
            Add Placeholder Here
          </div>
        </div>
      </Container>
    </React.Fragment>
  );
}

export default Home;
