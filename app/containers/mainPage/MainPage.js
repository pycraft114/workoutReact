/**
 * Created by chanwoopark on 2017. 6. 29..
 */
import React,{Component} from 'react';

//import components
import List from './list/List';
import LineGraph from './graph/LineGraph';
import DoughnutGraph from './graph/DoughnutGraph'
import SideBar from './sideBar/SideBar';


export default class MainPage extends Component{
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
                        <button type="button" id="sidebarCollapse" className="btn btn-outline-secondary">
                            <i className="glyphicon glyphicon-align-left"></i>
                        </button>

                        <div className="top">
                            <DoughnutGraph/>
                        </div>

                        <div className="bottom">
                            <LineGraph/>
                            <List/>
                        </div>
                    </div>
                </div>
            </div>

        )
    }

}


