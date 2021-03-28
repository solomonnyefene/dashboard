/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import { render } from 'react-dom';
import moment from 'moment';
import { Form, Field } from 'react-final-form';
import { Input, Button, Select, DatePicker } from 'antd';
import {DropzoneArea} from 'material-ui-dropzone'


const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

export default function LessonForm(props){
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
                         <h4 style={{color:'orangered'}}>Lessons</h4>
                        <div className="row">
                            <div className="col-md-6">
                                    <label>
                                        <b>Category</b>
                                    </label>
                                    <Field
                                        name="category"
                                        render={({ input, meta }) => (
                                            <div>
                                                <div>
                                                    <Input  {...input}
                                                            placeholder="Enter category"
                                                    />
                                                </div>
                                            </div>
                                        )}
                                    />

                                    <label>
                                        <b>Level</b>
                                    </label>
                                    <Field
                                        name="level"
                                        render={({ input, meta }) => (
                                            <div>
                                                <div>
                                                    <Input  {...input}
                                                            placeholder="Enter level"
                                                    />
                                                </div>
                                            </div>
                                        )}
                                    />
                            </div>
                            <div className="col-md-6">
                                    <label>
                                        <b>Price</b>
                                    </label>
                                    <Field
                                        name="price"
                                        render={({ input, meta }) => (
                                            <div>
                                                <div>
                                                    <Input  {...input}
                                                            type="number"
                                                            placeholder="0.00"
                                                    />
                                                </div>
                                            </div>
                                        )}
                                    />
                            </div>
                          
    
                           <Button type="primary" style={{marginTop:'10px', marginLeft:'11px'}}>
                               Save
                           </Button>
                        </div>

                    </form>
                )}
            />
    )
}




