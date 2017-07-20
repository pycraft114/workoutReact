/**
 * Created by chanwoopark on 2017. 7. 18..
 */
import React,{Component} from 'react';
import {Redirect} from 'react-router-dom';

export default class Gate extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div key={this.props.key}>
                {this.props.bool ? this.props.children : <Redirect to={this.props.redirUrl}/>}
            </div>
        )
    }



}