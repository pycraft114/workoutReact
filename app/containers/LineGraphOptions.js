/**
 * Created by chanwoopark on 2017. 8. 5..
 */
import React,{ Component } from 'react';

export default class LineGraphOptions extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <ul className="nav nav-pills nav-stacked">
                <li className="active"><a href="#">Home</a></li>
                <li><a href="#">Profile</a></li>
                <li><a href="#">Messages</a></li>
                <li><a href="#">Messages</a></li>
                <li><a href="#">Messages</a></li>
                <li><a href="#">Messages</a></li>
                <li><a href="#">Messages</a></li>
                <li><a href="#">Messages</a></li>
                <li><a href="#">Messages</a></li>
                <li><a href="#">Messages</a></li>
            </ul>
        )
    }
}
