/**
 * Created by chanwoopark on 2017. 7. 18..
 */
import React,{Component} from 'react';
import {Redirect} from 'react-router-dom';

import {connect} from 'react-redux';

class PrivateContainer extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                {this.props.authenticated ? this.props.children : <Redirect to="/"/>}
            </div>
        )
    }



}

function mapStateToProps(state){
    return{authenticated:state.isAuthed}
}

export default connect(mapStateToProps,null)(PrivateContainer);