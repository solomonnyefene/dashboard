import logo from './logo.svg';
import './App.css';
import React from 'react'
import { connect } from 'react-redux';
import {
    Link,
    Route,
    Redirect,
    Switch,
    BrowserRouter as Router
} from 'react-router-dom';
import routes from './routes/routes'


//---actions------
import * as mainActions from './actions/main_actions'

//----components-------
import General from './components/tab-contents/general'
import Courses from './components/tab-contents/courses/courses'
import Students from './components/tab-contents/students'
import UpdateCourse from './components/tab-contents/courses/update_course'
import NewCourse from './components/tab-contents/courses/new_course'



class App extends React.Component{
    state = {
        is_opened_side_bar:false
    }
    componentDidMount(){
        this.props.setActiveTab()
    }
    toggleSideBar = () =>{this.props.toggleSideBar()}
    toggleTab = (tab) =>{this.props.toggleTab(tab)}
    render(){
        let active_tab = this.props.active_tab,
            is_opened = this.props.is_opened_side_bar;
        return(
           <Router >
              <div className="side-bar"
                   style={{width: is_opened? '20%' : '10%'}}
              >
                  <div className=" side-tgle-icon" onClick={this.toggleSideBar}>
                      <span className="genicons genicon-arrow-left" />
                  </div>
                  <div className="text-center" style={{marginTop:'20px', margin:'auto'}}>
                      Qtab Academy
                  </div>
                  <Link to={routes.root} style={{color:'#fff'}}>
                      <div className="side-nav-item-wrap"  onClick={()=>this. toggleTab('General')}>
                          <div className="text-center" >
                              <span className="genicons genicon-home" style={{fontSize:'30px'}} />
                          </div>
                          <div className="text-center">
                              General
                          </div>
                          {
                              active_tab === 'General' &&
                              <div className="active-tab-indicator"/>
                          }
                      </div>
                  </Link>
                  <Link to={routes.courses}  style={{color:'#fff'}}>
                      <div className="side-nav-item-wrap" onClick={()=>this. toggleTab('Courses')}>
                          <div className="text-center">
                              <span className="genicons genicon-book-stroke-compact" style={{fontSize:'30px'}} />
                          </div>
                          <div className="text-center">
                              Courses
                          </div>
                          {active_tab === 'Courses' && <div className="active-tab-indicator"/>}
                          {active_tab === 'Update course' && <div className="active-tab-indicator"/>}
                      </div>
                  </Link>
                  <Link to={routes.students}  style={{color:'#fff'}}>
                      <div className="side-nav-item-wrap"  onClick={()=>this. toggleTab('Students')}>
                          <div className="text-center">
                              <span className="genicons genicon-people" style={{fontSize:'30px'}} />
                          </div>
                          <div className="text-center">
                              Students
                          </div>
                          {
                              active_tab === 'Students' &&
                              <div className="active-tab-indicator"/>
                          }
                      </div>
                  </Link>

              </div>
               <div className="content"
                    style={{width: is_opened? '80%' : '90%'}}>
                   <div className="content-header"
                        style={{width: is_opened? '80%' : '90%'}}>
                       {active_tab}
                   </div>

                       <Switch>
                           <Route exact path={routes.root} render={props => (<General width={ is_opened? '80%' : '90%'} />)}/>
                           <Route exact path={routes.courses} render={props =>
                               (<Courses width={ is_opened? '80%' : '90%'}
                                         toggleTab = {this.toggleTab}

                               />)}/>
                           <Route exact path={routes.students} render={props => (<Students width={ is_opened? '80%' : '90%'} />)}/>
                           <Route exact path={routes.update_course} render={props => (<UpdateCourse width={ is_opened? '80%' : '90%'} />)}/>
                       </Switch>

               </div>
           </Router>
        )
    }
}




const mapStateToProps = state => {
    return {
        active_tab:state.main.active_tab,
        is_opened_side_bar:state.main.is_opened_side_bar,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        toggleTab: (tab) => {dispatch(mainActions.toggleTab(tab))},
        toggleSideBar: () => {dispatch(mainActions.toggleSibeBar())},
        setActiveTab: () => {dispatch(mainActions.setActiveTab())},
    };

};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
