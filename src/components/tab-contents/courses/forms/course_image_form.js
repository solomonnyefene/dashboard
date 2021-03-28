/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import { render } from 'react-dom';
import moment from 'moment';
import { Form, Field } from 'react-final-form';
import { Input, Button, Select, DatePicker } from 'antd';
import {DropzoneArea} from 'material-ui-dropzone'


const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

export default function CourseImageForm(props){
    let initialValues,
    course = props.course
 

    if (course) {
        initialValues = {
            title: course && course.title,
            description: course && course.description,
    
        };
    }

    const onSubmit = () => {}

    const handleChange = () => {

    }

    return(
        <Form onSubmit={onSubmit}  style={{width:'100%'}} 
                 initialValues={initialValues}
                render={({ handleSubmit, form, submitting, pristine, values }) => (
                    <form onSubmit={handleSubmit} style={{width:'inherit'}} >
                        <div >
                           <h4 style={{color:'orangered'}}>Update cover image</h4>
                            <DropzoneArea
                                onChange={handleChange.bind(this)}
                            />
                           <Button type="primary" style={{marginTop:'10px'}}>
                               Save
                           </Button>
                        </div>

                    </form>
                )}
            />
    )
}




