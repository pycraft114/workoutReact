/**
 * Created by chanwoopark on 2017. 6. 29..
 */
/*SHOULD BE STATELESS COMPONENT. RESTRUCTURE AFTER TEST IS DONE!!!!!!*/

import React,{Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

//import components
import List from './list/List';
import LineGraph from './graph/LineGraph';
import DoughnutGraph from './graph/DoughnutGraph'
import SideBar from './sideBar/SideBar';

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
                        <button type="button" id="sidebarCollapse" className="btn btn-default btn-sm" active="">
                            MENU
                        </button>

                        <div className="top">
                            <DoughnutGraph/>
                        </div>

                        <div className="bottom">
                            <LineGraph/>
                            <List/>
                        </div>

                        <button id="logout-button" type="button" className="btn btn-default btn-sm" onClick={this.props.action_clickLogout}>
                            <i className="glyphicon glyphicon-log-out"></i> Log out
                        </button>
                    </div>

                    <div className="overlay"></div>
                </div>
            </div>

        )
    }
}

function mapDispathToProps(dispatch){
    return bindActionCreators({action_clickLogout},dispatch);
}

export default connect(null,mapDispathToProps)(MainPage);