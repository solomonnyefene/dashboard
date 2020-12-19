import './courses/courses.css'
import student from './../../images/student.jpeg'
import {Rate, Badge} from 'antd'

function Students(props) {
    let {width} = props;
    return(
        <div className="items-wrap text-center" style={{width: width}}>
            <div className="row" style={{marginBottom:'30px'}}>
                <div className="col-md-4 col-sm-4 col-xs-4 text-center">
                    <div className="student">
                        <div className="student-photo">
                            <img src={student} className="photo"
                                 style={{position:'relative', top:'11px', border:'1px solid #130060',
                                     height:'60px', width:'60px', borderRadius:'50%', padding:'5px'}}
                            />
                        </div>
                        <div className="details" style={{paddingTop:'15px', color:' #130060'}}>
                            <div>Van Solo</div>
                            <div>Ghana</div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-sm-4 col-xs-4 text-center">
                    <div className="student">
                        <div className="student-photo">
                            <img src={student} className="photo"
                                 style={{position:'relative', top:'11px', border:'1px solid #130060',
                                     height:'60px', width:'60px', borderRadius:'50%', padding:'5px'}}
                            />
                        </div>
                        <div className="details" style={{paddingTop:'15px'}}>
                            <div>Yussif</div>
                            <div>Nigeria</div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-sm-4 col-xs-4 text-center">
                    <div className="student">
                        <div className="student-photo">
                            <img src={student} className="photo"
                                 style={{position:'relative', top:'11px', border:'1px solid #130060',
                                     height:'60px', width:'60px', borderRadius:'50%', padding:'5px'}}
                            />
                        </div>
                        <div className="details" style={{paddingTop:'15px'}}>
                            <div>Abdul</div>
                            <div>United States</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row" style={{marginBottom:'30px'}}>
                <div className="col-md-4 col-sm-4 col-xs-6 text-center">
                    <div className="student">
                        <div className="student-photo">
                            <img src={student} className="photo"
                                 style={{position:'relative', top:'11px', border:'1px solid #130060',
                                     height:'60px', width:'60px', borderRadius:'50%', padding:'5px'}}
                            />
                        </div>
                        <div className="details" style={{paddingTop:'15px', color:' #130060'}}>
                            <div>Van Solo</div>
                            <div>Ghana</div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-sm-4 col-xs-6 text-center">
                    <div className="student">
                        <div className="student-photo">
                            <img src={student} className="photo"
                                 style={{position:'relative', top:'11px', border:'1px solid #130060',
                                     height:'60px', width:'60px', borderRadius:'50%', padding:'5px'}}
                            />
                        </div>
                        <div className="details" style={{paddingTop:'15px'}}>
                            <div>Yussif</div>
                            <div>Nigeria</div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-sm-4 col-xs-6 text-center">
                    <div className="student">
                        <div className="student-photo">
                            <img src={student} className="photo"
                                 style={{position:'relative', top:'11px', border:'1px solid #130060',
                                     height:'60px', width:'60px', borderRadius:'50%', padding:'5px'}}
                            />
                        </div>
                        <div className="details" style={{paddingTop:'15px'}}>
                            <div>Abdul</div>
                            <div>United States</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row" style={{marginBottom:'30px'}}>
                <div className="col-md-4 col-sm-4 col-xs-6 text-center">
                    <div className="student">
                        <div className="student-photo">
                            <img src={student} className="photo"
                                 style={{position:'relative', top:'11px', border:'1px solid #130060',
                                     height:'60px', width:'60px', borderRadius:'50%', padding:'5px'}}
                            />
                        </div>
                        <div className="details" style={{paddingTop:'15px', color:' #130060'}}>
                            <div>Van Solo</div>
                            <div>Ghana</div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-sm-4 col-xs-6 text-center">
                    <div className="student">
                        <div className="student-photo">
                            <img src={student} className="photo"
                                 style={{position:'relative', top:'11px', border:'1px solid #130060',
                                     height:'60px', width:'60px', borderRadius:'50%', padding:'5px'}}
                            />
                        </div>
                        <div className="details" style={{paddingTop:'15px'}}>
                            <div>Yussif</div>
                            <div>Nigeria</div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-sm-4 col-xs-6 text-center">
                    <div className="student">
                        <div className="student-photo">
                            <img src={student} className="photo"
                                 style={{position:'relative', top:'11px', border:'1px solid #130060',
                                     height:'60px', width:'60px', borderRadius:'50%', padding:'5px'}}
                            />
                        </div>
                        <div className="details" style={{paddingTop:'15px'}}>
                            <div>Abdul</div>
                            <div>United States</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Students