import './courses.css'
import "antd/dist/antd.css";
import {
    Link,
    Route,
    Redirect,
    Switch,
    BrowserRouter as Router
} from 'react-router-dom';
import routes from './../../../routes/routes'

import {Rate, Badge} from 'antd'

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

function Courses(props) {
    let {width, toggleTab} = props;
    return(
        <div className="items-wrap text-center" style={{width: width}}>
            <div className="row" >
                <div className="col-md-3 col-sm-3 col-xs-12 text-center">
                    <div className="item"
                         style={{fontSize:'60px', paddingTop:'25px', background:'#f5f5f5', color:'#130060'
                         }}>
                        <span className="genicons genicon-add-circle" />
                    </div>
                </div>
                <div className="col-md-3 col-sm-3 col-xs-12 text-center">
                    <div className="item">
                        <div className="item-title">
                            Total
                        </div>
                        <div className="item-body">
                            10
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-sm-3 col-xs-12 text-center">
                    <div className="item">
                        <div className="item-title">
                            #In progress
                        </div>
                        <div className="item-body">
                            5
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-sm-3 col-xs-12 text-center">
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
                {
                    courses.map((course) => {
                        return(
                            <div className="col-md-6 col-sm-6 col-xs-12 text-center">
                                <div className="course">
                                    <div className="course-title">
                                        <Link to={routes.update_course} style={{color:'#130060'}}>
                                            <span title="Update course" className="genicons genicon-pencil-circle"
                                                  style={{position:'relative', left:'10px'}}
                                                  onClick={()=>toggleTab('Update course')}
                                            />
                                        </Link>
                                        <span style={{marginLeft:'20px'}}>
                                            {course.title}
                                        </span>
                                    </div>
                                    <div className="course-description">
                                        <p style={{marginLeft:'20px', color:"#130060"}}>
                                            {course.description}
                                        </p>

                                        <table className="table table-bordered"
                                               style={{width:'100%', fontSize:'12px'}}>
                                            <tr style={{background:'#f5f5f5'}}>
                                                <td  style={{width:'33.3%'}}><b>Leve</b></td>
                                                <td className="text-center"  style={{width:'33.3%'}}><b>Category</b></td>
                                                <td className="text-center"  style={{width:'33.3%'}}><b>Price</b></td>
                                            </tr>
                                            <tr>
                                                <td  style={{width:'33.3%'}}><b>{course.level}</b></td>
                                                <td className="text-center"  style={{width:'33.3%'}}><b>
                                                    {course.category}
                                                </b>
                                                </td>
                                                <td className="text-center"  style={{width:'33.3%'}}>
                                                    <b>${course.price}</b>
                                                </td>
                                            </tr>
                                        </table>
                                        <div className="row">
                                            <div className="col-6" style={{paddingTop:'5px'}}>
                                                <b style={{marginLeft:'20px', color:"#130060"}}>Subscribers: </b>
                                                <Badge count={course.subscribers}/>
                                            </div>
                                            <div className="col-6">
                                                <Rate allowHalf defaultValue={course.rating} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }


            </div>

        </div>
    )
}

export default Courses