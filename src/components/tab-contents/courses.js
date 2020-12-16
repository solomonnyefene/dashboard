import './courses.css'
import "antd/dist/antd.css";

import {Rate, Badge} from 'antd'

function Courses(props) {
    let {width} = props;
    return(
        <div className="items-wrap text-center" style={{width: width}}>
            <div className="row" >
                <div className="col-md-4 col-sm-4 col-xs-12 text-center">
                    <div className="item">
                        <div className="item-title">
                            Total
                        </div>
                        <div className="item-body">
                            10
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-sm-4 col-xs-12 text-center">
                    <div className="item">
                        <div className="item-title">
                            #In progress
                        </div>
                        <div className="item-body">
                            5
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-sm-4 col-xs-12 text-center">
                    <div className="item">
                        <div className="item-title">
                            #Completed
                        </div>
                        <div className="item-body">
                            2
                        </div>
                    </div>
                </div>
            </div>
            <div className="row"  style={{marginTop:'30px'}}>
                <div className="col-md-6 col-sm-6 col-xs-12 text-center">
                    <div className="course">
                        <div className="course-title">
                            Principles of economics
                        </div>
                        <div className="course-description">
                            <p>
                                This course will walk you through basic concepts in financial investment.
                                The course contains 3 modules.
                            </p>

                            <table className="table table-bordered"
                                   style={{width:'100%', fontSize:'12px'}}>
                                <tr style={{background:'#f5f5f5'}}>
                                    <td  style={{width:'33.3%'}}><b>Leve</b></td>
                                    <td className="text-center"  style={{width:'33.3%'}}><b>Category</b></td>
                                    <td className="text-center"  style={{width:'33.3%'}}><b>Price</b></td>
                                </tr>
                                <tr>
                                    <td  style={{width:'33.3%'}}><b>SHS2</b></td>
                                    <td className="text-center"  style={{width:'33.3%'}}><b>
                                        Economics
                                    </b>
                                    </td>
                                    <td className="text-center"  style={{width:'33.3%'}}>
                                        <b>$10</b>
                                    </td>
                                </tr>
                            </table>
                           <div className="row">
                               <div className="col-6" style={{paddingTop:'5px'}}>
                                   <b>Subscribers: </b>
                                   <Badge count={5}/>
                               </div>
                               <div className="col-6">
                                   <Rate allowHalf defaultValue={2.5} />
                               </div>
                           </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-sm-6 col-xs-12 text-center">
                    <div className="course">
                        <div className="course-title">
                            Principles of economics
                        </div>
                        <div className="course-description">
                            <p>
                                This course will walk you through basic concepts in financial investment.
                                The course contains 3 modules.
                            </p>

                            <table className="table table-bordered"
                                   style={{width:'100%', fontSize:'12px'}}>
                                <tr style={{background:'#f5f5f5'}}>
                                    <td  style={{width:'33.3%'}}><b>Leve</b></td>
                                    <td className="text-center"  style={{width:'33.3%'}}><b>Category</b></td>
                                    <td className="text-center"  style={{width:'33.3%'}}><b>Price</b></td>
                                </tr>
                                <tr>
                                    <td  style={{width:'33.3%'}}><b>SHS2</b></td>
                                    <td className="text-center"  style={{width:'33.3%'}}><b>
                                        Economics
                                    </b>
                                    </td>
                                    <td className="text-center"  style={{width:'33.3%'}}>
                                        <b>$10</b>
                                    </td>
                                </tr>
                            </table>
                            <div className="row">
                                <div className="col-6" style={{paddingTop:'5px'}}>
                                    <b>Subscribers: </b>
                                    <Badge count={5}/>
                                </div>
                                <div className="col-6">
                                    <Rate allowHalf defaultValue={2.5} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row"  style={{marginTop:'30px'}}>
                <div className="col-md-6 col-sm-6 col-xs-12 text-center">
                    <div className="course">
                        <div className="course-title">
                            Principles of economics
                        </div>
                        <div className="course-description">
                            <p>
                                This course will walk you through basic concepts in financial investment.
                                The course contains 3 modules.
                            </p>

                            <table className="table table-bordered"
                                   style={{width:'100%', fontSize:'12px'}}>
                                <tr style={{background:'#f5f5f5'}}>
                                    <td  style={{width:'33.3%'}}><b>Leve</b></td>
                                    <td className="text-center"  style={{width:'33.3%'}}><b>Category</b></td>
                                    <td className="text-center"  style={{width:'33.3%'}}><b>Price</b></td>
                                </tr>
                                <tr>
                                    <td  style={{width:'33.3%'}}><b>SHS2</b></td>
                                    <td className="text-center"  style={{width:'33.3%'}}><b>
                                        Economics
                                    </b>
                                    </td>
                                    <td className="text-center"  style={{width:'33.3%'}}>
                                        <b>$10</b>
                                    </td>
                                </tr>
                            </table>
                            <div className="row">
                                <div className="col-6" style={{paddingTop:'5px'}}>
                                    <b>Subscribers: </b>
                                    <Badge count={5}/>
                                </div>
                                <div className="col-6">
                                    <Rate allowHalf defaultValue={2.5} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-sm-6 col-xs-12 text-center">
                    <div className="course">
                        <div className="course-title">
                            Principles of economics
                        </div>
                        <div className="course-description">
                            <p>
                                This course will walk you through basic concepts in financial investment.
                                The course contains 3 modules.
                            </p>

                            <table className="table table-bordered"
                                   style={{width:'100%', fontSize:'12px'}}>
                                <tr style={{background:'#f5f5f5'}}>
                                    <td  style={{width:'33.3%'}}><b>Leve</b></td>
                                    <td className="text-center"  style={{width:'33.3%'}}><b>Category</b></td>
                                    <td className="text-center"  style={{width:'33.3%'}}><b>Price</b></td>
                                </tr>
                                <tr>
                                    <td  style={{width:'33.3%'}}><b>SHS2</b></td>
                                    <td className="text-center"  style={{width:'33.3%'}}><b>
                                        Economics
                                    </b>
                                    </td>
                                    <td className="text-center"  style={{width:'33.3%'}}>
                                        <b>$10</b>
                                    </td>
                                </tr>
                            </table>
                            <div className="row">
                                <div className="col-6" style={{paddingTop:'5px'}}>
                                    <b>Subscribers: </b>
                                    <Badge count={5}/>
                                </div>
                                <div className="col-6">
                                    <Rate allowHalf defaultValue={2.5} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Courses