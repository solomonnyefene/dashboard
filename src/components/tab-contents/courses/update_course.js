/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import { render } from 'react-dom';
import moment from 'moment';
import { Form, Field } from 'react-final-form';
import { Input, Button, Select, DatePicker } from 'antd';
import {DropzoneArea} from 'material-ui-dropzone'



// -----micro forms--------
import TitleAndDescForm from './forms/title_and_desc_form'
import CourseImageForm from './forms/course_image_form'
import OthersForm from './forms/others_form'
import LessonsForm from './forms/lessons_form'




const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

export default function CoursesList(props){
    let initialValues,
    course = props.course
 
    console.log('COURSE', course && course)

    if (course) {
        initialValues = {
            title: course && course.title,
            description: course && course.description,
            category: course && course.category,
            price: course && course.price,
            level: course && course.level
        };
    }

    const onSubmit = () => {}

    const handleChange = () => {
        alert('h')
    }

    return(
        <div style={{position:'absolute', top:'20px', width:'100%'}}>
            <h4>Edit: <span className="text-info">{course.title}</span></h4>
            <div className="row">
                <div className="col-md-6">
                    <div style={{width:'100%'}}>
                        <TitleAndDescForm couser={course}/>  
                    </div>
                </div>
                <div className="col-md-6">
                    <CourseImageForm course={course}/>
                </div>
            </div>

            <div style={{marginTop:'40px'}}>
                <OthersForm course={course}/>
            </div>

            <div style={{marginTop:'40px'}}>
                <LessonsForm course={course}/>
            </div>
        </div>
    )
}




