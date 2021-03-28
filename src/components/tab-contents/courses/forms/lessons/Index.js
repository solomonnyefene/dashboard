/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import { render } from 'react-dom';
import moment from 'moment';
import { Form, Field } from 'react-final-form';
import { Input, Button, Select, DatePicker } from 'antd';
import {DropzoneArea} from 'material-ui-dropzone'

// ------components-------
import LessonTabs from './lesson_tabs'


export default function LessonsFormIndex(props){
    let initialValues,
    course = props.course && props.course

    return(
       <React.Fragment>
           <h4 style={{color:'orangered'}}>Update lessons</h4>
            <LessonTabs  />
       </React.Fragment>
    )
}




