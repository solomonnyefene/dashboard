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
import Main from './components/main'

class App extends React.Component{
    state = {
        is_opened_side_bar:false
    }
    componentDidMount(){
        this.props.setActiveTab()
    }
    toggleSideBar = () =>{this.props.toggleSideBar()}
    toggleTab = (tab, course) =>{
        this.props.toggleTab(tab)
        if(course !== undefined){
            this.props.setCourse(course)
        }
    }
    render(){
        let active_tab = this.props.active_tab,
            is_opened = this.props.is_opened_side_bar;
        return(
           <Router >
               <div className="content"
                    style={{width: is_opened? '80%' : '90%'}}>
                   <div className="content-header"
                        style={{width: is_opened? '80%' : '90%'}}>
                       {active_tab}
                   </div>
                   <Main />

                

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
        setCourse: (course) => {dispatch(mainActions.setCourse(course))},
    };

};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
