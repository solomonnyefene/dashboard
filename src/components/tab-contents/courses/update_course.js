/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import { render } from 'react-dom';
import moment from 'moment';
import { connect } from 'react-redux';
import { Form, Field } from 'react-final-form';
import { Input, Button, Select, DatePicker } from 'antd';
import * as actions from './../../../actions/main_actions';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

class UpdateCourse extends React.Component{
onSubmit = async values => {
    // let equipment = {
    //     id: props.equip.attributes.id,
    //     project_id: props.equip.attributes.project_id,
    //     repairs_schedule: values
    // };
    // props.scheduleRepairs(equipment);
};
    render(){
        let initialValues,
            course = this.props.course
        if (course) {
            initialValues = {
                title: course && course.title,
                description: course && course.description,
                category: course && course.category,
                price: course && course.price,
                level: course && course.level
            };
        }

        let { toggleEquipActionModal, match } = this.props;
        console.log('COURSE', this.props.course)
        return(
            <Form
                onSubmit={this.onSubmit}
                 initialValues={initialValues}
                render={({ handleSubmit, form, submitting, pristine, values }) => (
                    <form onSubmit={handleSubmit}>
                        <React.Fragment>
                            <div style={{position:'relative', margin:'30px', top:'60px'}}>
                                <Field
                                    name="title"
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
                            </div>
                            <div style={{position:'relative', margin:'30px', top:'60px'}}>
                                <Field
                                    name="description"
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
                            </div>
                            <div style={{position:'relative', margin:'30px', top:'60px'}}>
                                <div className="row">
                                    <div className="col-6">
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
                                    </div>
                                    <div className="col-6">
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
                                </div>
                            </div>
                            <div style={{position:'relative', margin:'30px', top:'60px'}}>
                                <div className="row">
                                    <div className="col-6">
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
                                    <div className="col-6">
                                        <label>
                                            <b>.</b>
                                        </label>
                                        <div className="text-right">
                                            <Button
                                                type="submit"
                                                className="mr2"
                                                // onClick={() => toggleEquipActionModal(equipment, '')}
                                            >
                                                Cancel
                                            </Button>
                                            <Button
                                                type="primary"
                                                onClick={handleSubmit}
                                                // disabled={
                                                //     equipment.attributes.insurance_package
                                                //         ? submitting || pristine
                                                //         : values.issue === undefined ||
                                                //         values.deadline === undefined ||
                                                //         values.remind_me_at === undefined
                                                // }
                                            >
                                                Update
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </React.Fragment>

                    </form>
                )}
            />
        )
    }
}


let mapStateToProps = state => {
    return {
        user: state,
        course:state.main.course
    };
};

let mapDispatchToProps = dispatch => {
    return {
        // scheduleRepairs: payload =>
        //     dispatch(equipmentActions.scheduleRepairs(payload))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UpdateCourse);
