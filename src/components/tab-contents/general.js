import './general.css'

function General(props) {
    let {width} = props;
    return(
        <div className="items-wrap text-center" style={{width: width}}>
            <div className="row" >
                <div className="col-md-4 col-sm-4 col-xs-12 text-center">
                    <div className="item">
                        <div className="item-title">
                            #Courses
                        </div>
                        <div className="item-body">
                            20
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-sm-4 col-xs-12 text-center">
                    <div className="item">
                        <div className="item-title">
                            #Students
                        </div>
                        <div className="item-body">
                            10
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-sm-4 col-xs-12 text-center">
                    <div className="item">
                        <div className="item-title">
                            #Subscribers
                        </div>
                        <div className="item-body">
                            10
                        </div>
                    </div>
                </div>
            </div>
            <div className="row"  style={{marginTop:'30px'}}>
                <div className="col-md-4 col-sm-4 col-xs-12 text-center">
                    <div className="item">
                        <div className="item-title">
                            #Courses in prog
                        </div>
                        <div className="item-body">
                            20
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-sm-4 col-xs-12 text-center">
                    <div className="item">
                        <div className="item-title">
                            #Courses comp
                        </div>
                        <div className="item-body">
                            10
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-sm-4 col-xs-12 text-center">
                    <div className="item">
                        <div className="item-title">
                            Total Revenue
                        </div>
                        <div className="item-body">
                            $10,000
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default General