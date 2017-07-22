import React, { Component } from 'react';
import { connect } from 'react-redux';

export default function(receivedComponent){

    class Authentication extends Component{
        static contextTypes = {
            router:React.PropTypes.object
        };

        componentWillMount(){
            if(!this.props.isAuthed){
                this.context.router.push('/')
            }
        }
        
        render(){
            return <receivedComponent {...this.props}/>
        }
    }

    function mapStateToProps(state){
        return {isAuthed : state.isAuthed}
    }

    return connect(mapStateToProps)(Authentication)
}