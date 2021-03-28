import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { useSelector } from 'react-redux'
import { Tabs } from 'antd';

import LessonForm from './lesson_form'


const { TabPane } = Tabs;


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    padding:20,
    
    backgroundColor: '#fff',
    marginBottom:150
  },
}));

export default function LessonTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  let lessons = [
    {
      id:1,
      day:'Day 1',
      title:'Introduction to cyber security',
      content:'Welcome to our first lesson on cyber secouriy. I will recommend you grab a cap a coffee, take a sip as i walk you through this interesting course',
      photos:[
        {id:1, src:''},
        {id:2, src:''},
        ]
     },
     {
       id:2,
       day:'Day 2',
       title:'Basic concepts in cyber security',
       content:'Welcome to our first lesson on cyber secouriy. I will recommend you grab a cap a coffee, take a sip as i walk you through this interesting course',
       photos:[
         {id:1, src:''},
         {id:2, src:''},
         ]
      },
      {
       id:3,
       day:'Day 3',
       title:'Why financial organization must invest in cyber security',
       content:'Welcome to our first lesson on cyber secouriy. I will recommend you grab a cap a coffee, take a sip as i walk you through this interesting course',
       photos:[
         {id:1, src:''},
         {id:2, src:''},
         ]
      },
      {
       id:4,
       day:'Day 4',
       title:'Cyber attach and prevention strategies',
       content:'Welcome to our first lesson on cyber secouriy. I will recommend you grab a cap a coffee, take a sip as i walk you through this interesting course',
       photos:[
         {id:1, src:''},
         {id:2, src:''},
         ]
      }
  ]

  const handleTabChange = (value) => {
  }
  return (
    <div className={classes.root}>
        <Tabs defaultActiveKey="Day 1" onChange={handleTabChange}>
        {
              lessons.map((lesson) => {
                return (
                  <TabPane tab={lesson.day} key={lesson.day}>
                       <LessonForm lesson={lesson}/>
                   </TabPane>
                )
              })
           }
        
        </Tabs>
     
    </div>
  );
}