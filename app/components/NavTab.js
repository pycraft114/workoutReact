/**
 * Created by chanwoopark on 2017. 7. 27..
 */
import React,{ Component } from 'react';

export default class NavTab extends Component {
    constructor(props){
        super(props);
    }


    render(){
        return(
            <ol className="breadcrumb">
                <li><a href="#">Home</a></li>
                <li><a href="#">Library</a></li>
                <li className="active">Data</li>
            </ol>
        )
    }
}