import React from 'react';
import clsx from 'clsx';
import {
  Link,
  Route,
  Redirect,
  Switch,
  BrowserRouter as Router
} from 'react-router-dom';
import Box from '@material-ui/core/Box';
import routes from './../../routes/routes'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justify:'center'
  },
  items_wrap:{
     display:'flex'
  },

  item_paper:{width: 250,padding:10, margin:'30px 10px'},

  item_paper_inner:{padding:10},

  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },

}));

export default function General() {
  const classes = useStyles();
  const theme = useTheme();
 
  return (
    <Typography>
         <div style={{marginTop:'60px', color:'#0000', paddingLeft:'20px'}}> 
           <h3 >General statistics</h3>
         </div>
        <Box
        display="flex"
        flexWrap="wrap"
        alignContent="center"
        p={1}
        m={1}
        bgcolor="background.paper"
        // css={{margin:'auto'}}
      >
    
        <Box className={classes.item_paper} p={1} bgcolor="grey.300">
          <Paper className={classes.item_paper_inner}>
              <ListItem button key={2}>
                <ListItemIcon >
                <span className="genicons genicon-folder-open" style={{fontSize:'30px', color:"#130060"}} />&nbsp;
                Courses &nbsp;&nbsp;
                </ListItemIcon>
                <b style={{fontSize:'30px'}}>20</b>
              </ListItem>
          </Paper>
        </Box>
        <Box className={classes.item_paper} p={1} bgcolor="grey.300">
          <Paper className={classes.item_paper_inner}>
            <ListItem button key={2}>
                  <ListItemIcon >
                  <span className="genicons genicon-folder-open" style={{fontSize:'30px', color:"#130060"}} />&nbsp;
                  Lessons: &nbsp;&nbsp;
                  </ListItemIcon>
                  <b style={{fontSize:'30px'}}>20</b>
              </ListItem>
          </Paper>
        </Box>
        <Box className={classes.item_paper} p={1} bgcolor="grey.300">
          <Paper className={classes.item_paper_inner}>
            <ListItem button key={2}>
                  <ListItemIcon >
                  <span className="genicons genicon-people" style={{fontSize:'30px', color:"#130060"}} />&nbsp;
                  Enrollments: &nbsp;&nbsp;
                  </ListItemIcon>
                  <b style={{fontSize:'30px'}}>20</b>
              </ListItem>
          </Paper>
        </Box>
        <Box  className={classes.item_paper}p={1} bgcolor="grey.300">
          <Paper className={classes.item_paper_inner}>
              <ListItem button key={2}>
                    <ListItemIcon >
                    <span className="genicons genicon-people" style={{fontSize:'30px', color:"#130060"}} />&nbsp;
                    Subscriptions: &nbsp;&nbsp;
                    </ListItemIcon>
                    <b style={{fontSize:'30px'}}>20</b>
              </ListItem>
          </Paper>
        </Box>
        <Box  className={classes.item_paper}p={1} bgcolor="grey.300">
          <Paper className={classes.item_paper_inner}>
              <ListItem button key={2}>
                    <ListItemIcon >
                    <span className="genicons genicon-people" style={{fontSize:'30px', color:"#130060"}} />&nbsp;
                    Tutors: &nbsp;&nbsp;
                    </ListItemIcon>
                    <b style={{fontSize:'30px'}}>20</b>
              </ListItem>
          </Paper>
        </Box>
        <Box  className={classes.item_paper}p={1} bgcolor="grey.300">
          <Paper className={classes.item_paper_inner}>
              <ListItem button key={2}>
                    <ListItemIcon >
                    <span className="genicons genicon-people" style={{fontSize:'30px', color:"#130060"}} />&nbsp;
                    Tutors: &nbsp;&nbsp;
                    </ListItemIcon>
                    <b style={{fontSize:'30px'}}>20</b>
              </ListItem>
          </Paper>
        </Box>
        

      </Box>
    </Typography>
  );
}