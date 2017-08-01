/**
 * Created by chanwoopark on 2017. 7. 27..
 */
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

import action_clickWorkout from 'actions/actionsForWorkout/action_clickWorkout';


class WorkoutCard extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div key={this.props.key}>
                <div>
                    <div className="thumbnail">
                        <img src="https://previews.123rf.com/images/nikdoorg/nikdoorg1401/nikdoorg140100014/25118481-Bench-Press-Icon-Stock-Vector.jpg" width="200" height="300" alt="..."/>
                            <div className="caption">
                                <p>{this.props.description}</p>
                                <p><a
                                    href="#"
                                    className="btn btn-primary"
                                    data-toggle="modal"
                                    data-target="#myModal"
                                    onClick={() => {this.props.action_clickWorkout(this.props.selectedDate,this.props.workoutType)}}
                                >
                                    {this.props.workoutType}
                                </a></p>
                            </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        selectedDate : state.selectedDate
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        action_clickWorkout
    },dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(WorkoutCard);

/*
thing to receive as a prop
img src
button content
p content above button
*/
