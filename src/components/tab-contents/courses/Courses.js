import React, { useState } from 'react';
import clsx from 'clsx';
import {
  Link,
  Route,
  Redirect,
  Switch,
  BrowserRouter as Router
} from 'react-router-dom';
import Box from '@material-ui/core/Box';
import routes from './../../../routes/routes'
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
import {Rate, Badge} from 'antd'
import { setCourse } from '../../../actions/main_actions';

// -----components-----
import UpdateCourse from './update_course'

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
  course_paper:{
    width:300, minHeight:30, margin:40
  },
  course_desc_paper:{
    minHeight:120,
    marginTop:10
  },
  course_lessons_paper:{padding:5, marginTop:5},
  course_actions_paper:{fontSize:25, padding:5}

}));

export default function CoursesList() {
  const classes = useStyles();
  const theme = useTheme();
  const [course, setCourse] = useState(null)
  const [isShowEditForm, setIsShowEditForm] = useState(false)

  let courses = [
    {
        id:1,
        title:'Principles of economics',
        description:'Every life activity entails economics. In this course, you will understand what ' +
        'economics is and the principles that govern it',
        price:20,
        level:'SH2',
        category:'Economics',
        subscribers:5,
        rating:4
    },
    {
        id:2,
        title:'Basic algebra',
        description:'Basic algebra skills very necessary for our daily life activities. This course' +
        'will help you acquire or master these skills in just a few hours',
        price:20,
        level:'SH2',
        category:'Mathematics',
        subscribers:8,
        rating:3
    },
    {
        id:3,
        title:'Introduction to financial accounting',
        description:'In this course, you will learn about basic concepts in financial accounting and ' +
        'how to apply them to your daily life',
        price:20,
        level:'SH2',
        category:'Accounting',
        subscribers:10,
        rating:4
    },
    {
        id:4,
        title:'Introduction to cyber sucurity',
        description:'This course has 3 module in which you will' +
        ' learn more about what cyber security is and its implication to the world',
        price:20,
        level:'Advance',
        category:'Information security',
        subscribers:12,
        rating:4
    }
]

  const toggleUpdateCourseForm = (course) => {
    console.log('MY COURSE', course)
    setIsShowEditForm(true)
    setCourse(course)
  }
 
  return (
    <Typography>
        
        <Box
        display="flex"
        flexWrap="wrap"
        alignContent="center"
        p={1}
        m={1}
        bgcolor="background.paper"
        css={{position:'absolute', width:'96%', margin:'auto'}}>
          {
            isShowEditForm?
              <div style={{marginTop:'-50px'}}>
                <UpdateCourse course={course}/>
              </div>
            :
            <React.Fragment>
 {
                courses.map((course) => {
                  return(
                    <Box className={classes.course_paper} p={1} bgcolor="grey.300">
                    <Paper className={classes.item_paper_inner}>
                         <ListItem button key={2}>
                            <span className="genicons genicon-folder-open" style={{fontSize:'24px', color:"#130060", marginTop:'-5px'}} />&nbsp;
                             <b style={{fontSize:'20px'}}>{course.title}</b>
          
                        </ListItem>
                    </Paper>
                    <Paper className={classes.course_desc_paper}>
                        <ListItem button key={2}>
                             <b style={{fontSize:'14px'}}>
                               This course will take you through the basic and core concept of cybysecurity.
                               The course has 4 lessons which will be delivered on in four conservative days
                             </b>
                        </ListItem>
                    </Paper>
                    <Paper className={classes.course_lessons_paper}>
                        <div className="row">
                            <div className="col-6">Lessons </div>
                            <div className="col-6 text-right"> <Badge count={4} /></div>
                        </div>
                    </Paper>
                    <Paper className={classes.course_lessons_paper}>
                        <div className="row">
                            <div className="col-6">Subscriptions </div>
                            <div className="col-6 text-right"> <Badge count={4} /></div>
                        </div>
                    </Paper>
                    <Paper className={classes.course_lessons_paper}>
                        <div className="row">
                            <div className="col-6">Rating</div>
                            <div className="col-6 text-right">
                               <Rate allowHalf defaultValue={4} />
                            </div>
                        </div>
                    </Paper>
                    <Paper className={classes.course_actions_paper}>
                        <div className="row">
                            <div className="col-6"></div>
                            <div className="col-6 text-right">
                               <span title="Edit" style={{fontSize:'23px'}} className="genicons genicon-pencil-circle"
                                  onClick={()=>toggleUpdateCourseForm(course) }
                               />
                               &nbsp;
                               <span title="Delete"  style={{fontSize:'23px'}} className="genicons genicon-trash-stroke"/>
                            </div>
                        </div>
                    </Paper>
                  </Box>
                  )
                })
              }
            </React.Fragment>
          }

            

     </Box>
    </Typography>
  );
}