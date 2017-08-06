/**
 * Created by chanwoopark on 2017. 7. 25..
 */
import React, { Component } from 'react';

export default class SideBar extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <nav id="sidebar">
                <div id="dismiss">
                    <i className="glyphicon glyphicon-arrow-left"></i>
                </div>

                <div className="sidebar-header">
                    <img src="https://user-images.githubusercontent.com/24728657/29000613-25ab50b6-7aab-11e7-8720-14dce411a5d7.png"/>
                </div>

                {/*<ul className="list-unstyled components">
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
                </ul>*/}
            </nav>
        )
    }
}
