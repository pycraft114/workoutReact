/**
 * Created by chanwoopark on 2017. 7. 27..
 */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import setSideBarSettings from 'style/setSideBarSettings';

export default class NavBar extends Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        const url = window.location.pathname;
        const currentPage = url.split('/')[2];

        switch(currentPage){
            case"days":
                $('.nav li:contains("Home")').addClass("active");
                break;
            case"record":
                $('.nav li:contains("Record")').addClass("active");
                break;
            case"graph":
                $('.nav li:contains("Graph")').addClass("active");
                break;
        }

        $(".nav li").on("click",function(){
            $(".nav li").removeClass("active");
            console.log($(this));
            $(this).addClass("active");
        });

        setSideBarSettings();
    }

    render(){
        return(
            <nav className="navbar navbar-default" role="navigation">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <a className="navbar-brand" id="sidebarCollapse">MENU</a>
                </div>

                <div className="collapse navbar-collapse navbar-ex1-collapse">
                    <ul className="nav navbar-nav">
                        <li><Link to="/main/days">Home</Link></li>
                        <li><Link to="/main/record">Record</Link></li>
                        <li><Link to="/main/graph">Graph</Link></li>
                    </ul>
                    <ul className="nav navbar-nav navbar-right">
                        <button type="button" className="btn btn-default navbar-btn">Logout</button>
                    </ul>
                </div>
            </nav>
        )
    }
}