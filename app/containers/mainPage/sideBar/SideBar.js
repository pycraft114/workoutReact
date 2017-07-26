/**
 * Created by chanwoopark on 2017. 7. 25..
 */
import React, { Component } from 'react';
import { setSideBarSettings } from 'style/setSideBarSettings';

export default class SideBar extends Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        setSideBarSettings();
    }
    
    render(){
        return(
            <nav id="sidebar">
                <div className="sidebar-header">
                    <h3>Collapsible Sidebar</h3>
                </div>

                <ul className="list-unstyled components">
                    <li className="active"><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li>
                        <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false">Pages</a>
                        <ul className="collapse list-unstyled" id="homeSubmenu">
                            <li><a href="#">Page</a></li>
                            <li><a href="#">Page</a></li>
                            <li><a href="#">Page</a></li>
                        </ul>
                    </li>
                    <li><a href="#">Portfolio</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
        )
    }
}