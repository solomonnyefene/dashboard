import React from 'react';
import { render } from 'react-dom';
import moment from 'moment';
import Paper from '@material-ui/core/Paper';
import { Form, Field } from 'react-final-form';
import { Input, Button, Select, DatePicker } from 'antd';


const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

export default function LessonForm(props){


    let initialValues,
    lesson = props.lesson
 

    if (lesson) {
        initialValues = {
            title: lesson && lesson.title,
            description: lesson && lesson.content
    
        };
    }

    const onSubmit = () => {}

    const handleChange = () => {
        
    }
    return(
        <Form onSubmit={onSubmit}  style={{width:'100%', height:'600px'}} 
                 initialValues={initialValues}
                render={({ handleSubmit, form, submitting, pristine, values }) => (
                    <form onSubmit={handleSubmit} style={{width:'inherit'}} >
                        <Paper >
                              <label>
                                <b>{lesson.title}</b>
                            </label>
                                    <Field
                                        name="title"
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
                        </Paper>

                        <div style ={{height:'240px'}}>
                              <label>
                                <b>Content</b>
                            </label>
                                    <Field
                                        name="description"
                                        render={({ input, meta }) => (
                                            <div>
                                                <div>
                                                    <Input.TextArea style={{height:'200px'}}  {...input}
                                                            placeholder="Enter category"
                                                    />
                                                </div>
                                            </div>
                                        )}
                                    />
                        </div>

                        <Paper>
                           <Button type="primary">
                               Save
                           </Button>
                        </Paper>

                    </form>
                )}
            />
    )
}




