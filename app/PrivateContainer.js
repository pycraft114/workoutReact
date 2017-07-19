/**
 * Created by chanwoopark on 2017. 7. 18..
 */
import React,{Component} from 'react';
import {Redirect} from 'react-router-dom';

import {connect} from 'react-redux';

class PrivateContainer extends Component{
    constructor(props){
        super(props);
        this.redirect = this.redirect.bind(this);
    }

    redirect(){
        return(
            <Redirect to="/"/>
        )
    }

    componentWillMount(){
        /*if(!this.props.authenticated){
            browserHistory.replace("/")
        }*/
    }

    componentDidMount(){
        console.log("private did mount")
    }

    componentDidUpdate(){
        console.log("private did update");
    }

    render(){
        return(
            <div>
                {this.props.authenticated ? this.props.children : this.redirect()}
            </div>
        )
    }



}

function mapStateToProps(state){
    return{authenticated:state.isAuthed}
}

export default connect(mapStateToProps,null)(PrivateContainer);