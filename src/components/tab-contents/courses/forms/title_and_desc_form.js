/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import { render } from 'react-dom';
import moment from 'moment';
import { Form, Field } from 'react-final-form';
import { Input, Button, Select, DatePicker } from 'antd';
import {DropzoneArea} from 'material-ui-dropzone'


const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

export default function TitleAndDescForm(props){
    let initialValues,
    course = props.course
 
    console.log('COURSE', course && course)

    if (course) {
        initialValues = {
            title: course && course.title,
            description: course && course.description,
    
        };
    }

    const onSubmit = () => {}



    return(
        <Form onSubmit={onSubmit}  style={{width:'100%'}} 
                 initialValues={initialValues}
                render={({ handleSubmit, form, submitting, pristine, values }) => (
                    <form onSubmit={handleSubmit} style={{width:'inherit'}} >
                        <div >

                                    <h4 style={{color:'orangered'}}>Update title & description</h4>
                                    <Field    name="title"
                                        render={({ input, meta }) => (
                                            <div>
                                                <label>
                                                    <b>Course title</b>
                                                </label>
                                                <div>
                                                    <Input  {...input}
                                                            placeholder="Enter course title"
                                                    />
                                                </div>
                                            </div>
                                        )}
                                    />
                                     <Field    name="description"
                                    render={({ input, meta }) => (
                                        <div>
                                            <label>
                                                <b>Description</b>
                                            </label>
                                            <div>
                                                <Input.TextArea
                                                    style={{
                                                        width: '100%',
                                                        background: '#ecf0f1',
                                                        color: '#000',
                                                        height: '140px'
                                                    }}
                                                    {...input}
                                                    // value={
                                                    //     props.equipment &&
                                                    //     props.equipment.attributes &&
                                                    //     props.equipment.attributes.issue
                                                    // }
                                                />
                                            </div>
                                        </div>
                                    )}
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




