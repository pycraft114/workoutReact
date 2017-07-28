/**
 * Created by chanwoopark on 2017. 6. 29..
 */
/*SHOULD BE STATELESS COMPONENT. RESTRUCTURE AFTER TEST IS DONE!!!!!!*/

import React,{Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { browserHistory } from 'react-router';

//import components
import List from './list/List';
import LineGraph from './graph/LineGraph';
import DoughnutGraph from './graph/DoughnutGraph'
import SideBar from './sideBar/SideBar';
import NavBar from 'components/NavBar';
import NavTab from 'components/NavTab'
import WorkoutCard from 'components/WorkoutCard';
import InlineCalendar from 'components/InlineCalendar';
import Record from './Record';

import action_clickLogout from 'actions/action_clickLogout';


class MainPage extends Component{
    constructor(props){
        super(props);

    }
    render(){
        return(
            <div className="main-page">
                <div className="wrapper">
                    <div className="side">
                        <SideBar/>
                    </div>

                    <div id="content">
                        <NavBar/>

                        <button type="button" id="sidebarCollapse" className="btn btn-default btn-sm" active="">
                            MENU
                        </button>

                        <BrowserRouter history={browserHistory}>
                            <Switch>
                                <Route path="/main/days" component={DoughnutGraph}/>
                                <Route path="/main/record" component={Record}/>
                                <Route path="/main/graph" component={LineGraph}/>
                                <Redirect from="/main" to="/main/days"/>
                            </Switch>
                        </BrowserRouter>
                    </div>

                    <div className="overlay"></div>
                </div>
            </div>

        )
    }
}


/*

 <button id="logout-button" type="button" className="btn btn-default btn-sm" onClick={this.props.action_clickLogout}>
    <i className="glyphicon glyphicon-log-out"></i> Log out
 </button>


*/


function mapDispathToProps(dispatch){
    return bindActionCreators({action_clickLogout},dispatch);
}

export default connect(null,mapDispathToProps)(MainPage);