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
import routes from './../routes/routes'
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
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
  
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  item_paper:{
    width:300, margin:30, padding:10
  },

  item_paper_inner:{
    padding:30
  },
  

  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    background:'#130060',
    color:'#fff'
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

export default function Header() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [active_tab, setActiveTab] = React.useState('General');


  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar style={{ background:'#130060'}}
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap style={{color:'#fff'}}>
            Admin Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon style={{color:'#fff'}}/> : <ChevronRightIcon  style={{color:'#fff'}}/>}
          </IconButton>
        </div>
        <Divider />
        <Link to={routes.courses}  style={{color:'#fff'}}>
            <List onClick={()=>setActiveTab('General')}>
                <ListItem button key={1}>
                <ListItemIcon title="General">
                <span className="genicons genicon-home" 
                style={{fontSize:'30px', color: active_tab === 'General'? 'yellow' : '#fff' }} />
                </ListItemIcon>
                    <ListItemText primary="General" />
                </ListItem>
            </List>
        </Link>

        <Link to={routes.courses}  style={{color:'#fff'}}>
            <List onClick={()=>setActiveTab('Students')}>
                <ListItem button key={2}>
                <ListItemIcon title="Students">
                <span className="genicons genicon-people"
                style={{fontSize:'30px', color:active_tab === 'Students'? 'yellow' : '#fff'}} />
                </ListItemIcon>
                    <ListItemText primary="Students" />
                </ListItem>
            </List>
        </Link>

        <Link to={routes.courses}  style={{color:'#fff'}}>
            <List onClick={()=>setActiveTab('Courses')}>
                <ListItem button key={1}>
                <ListItemIcon title="Courses">
                    <span className="genicons genicon-book-stroke-compact" 
                    style={{fontSize:'30px', color:active_tab === 'Courses'? 'yellow' : '#fff'}} />
                </ListItemIcon>
                    <ListItemText primary="Courses" />
                </ListItem>
            </List>
        </Link>
        <Divider />
      </Drawer>
      
    </div>
  );
}