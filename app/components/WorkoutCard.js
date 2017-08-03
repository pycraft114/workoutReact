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
        const {action_clickWorkout, selectedDate, workoutType, key, description} = this.props;

        return(
            <div key={key}>
                <div>
                    <div className="thumbnail">
                        <div className="thumbnail-overlay"></div>
                        <div className="smth"><p className="glyphicon glyphicon-ok"></p></div>

                        <img src="https://previews.123rf.com/images/nikdoorg/nikdoorg1401/nikdoorg140100014/25118481-Bench-Press-Icon-Stock-Vector.jpg" width="200" height="200" alt="..."/>

                        <div className="caption">
                            <p>{description}</p>

                            <p><a
                                href="#"
                                className="btn btn-primary"
                                data-toggle="modal"
                                data-target="#myModal"
                                onClick={() => {action_clickWorkout(selectedDate, workoutType)}}
                            >
                                {workoutType}
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
