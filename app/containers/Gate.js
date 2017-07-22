/**
 * Created by chanwoopark on 2017. 7. 18..
 */
import React,{Component} from 'react';
import {Redirect} from 'react-router-dom';
import {Route} from 'react-router-dom';

export default class Gate extends Component{
    constructor(props){
        super(props);

        this.path = this.props.path;
        this.bool = this.props.bool;
        this.redirUrl = this.props.redirUrl;
        this.component = this.props.component;
    }

    componentDidMount(){
        console.log(this.props);
    }

    renderWhenTrue(){
        return(
            <Route exact path={this.path} component={this.component}/>
        )
    }

    renderWhenFalse(){
        return(
            <Redirect to={this.redirUrl}/>
        )
    }

    render(){
        return(
            <div>
                {this.props.bool ? this.renderWhenTrue(): this.renderWhenFalse()}
            </div>
        )
    }



}