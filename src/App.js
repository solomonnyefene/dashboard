import logo from './logo.svg';
import './App.css';
import React from 'react'
import { connect } from 'react-redux';


//---actions------
import * as mainActions from './actions/main_actions'

//----components-------
import General from './components/tab-contents/general'
import Courses from './components/tab-contents/courses'
import Students from './components/tab-contents/students'


class App extends React.Component{
    state = {
        is_opened_side_bar:false
    }
    toggleSideBar = () =>{this.props.toggleSideBar()}
    toggleTab = (tab) =>{this.props.toggleTab(tab)}
    render(){
        let active_tab = this.props.active_tab,
            is_opened = this.props.is_opened_side_bar
        return(
           <div >
              <div className="side-bar"
                   style={{width: is_opened? '20%' : '10%'}}
              >
                  <div className=" side-tgle-icon" onClick={this.toggleSideBar}>
                      <span className="genicons genicon-arrow-left" />
                  </div>
                  <div className="text-center" style={{marginTop:'20px', margin:'auto'}}>
                      Qtab Academy
                  </div>
                   <div className="side-nav-item-wrap" onClick={()=>this. toggleTab('General')}>
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
                  <div className="side-nav-item-wrap"  onClick={()=>this. toggleTab('Courses')}>
                      <div className="text-center">
                          <span className="genicons genicon-book-stroke-compact" style={{fontSize:'30px'}} />
                      </div>
                      <div className="text-center">
                          Courses
                      </div>
                      {
                          active_tab === 'Courses' &&
                          <div className="active-tab-indicator"/>
                      }
                  </div>
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
              </div>
               <div className="content"
                    style={{width: is_opened? '80%' : '90%'}}>
                   <div className="content-header"
                        style={{width: is_opened? '80%' : '90%'}}>
                       {active_tab}
                   </div>
                   {
                       active_tab === 'General' &&
                       <General width={ is_opened? '80%' : '90%'} />
                   }
                   {
                       active_tab === 'Courses' &&
                       <Courses width={ is_opened? '80%' : '90%'} />
                   }
                   {
                       active_tab === 'Students' &&
                       <Students width={ is_opened? '80%' : '90%'} />
                   }
               </div>
           </div>
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
    };

};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
