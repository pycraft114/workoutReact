/**
 * Created by chanwoopark on 2017. 6. 26..
 */

import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";

//import actions
import action_clickWorkout from "actions/actionsForWorkout/action_clickWorkout";
import action_deleteWorkout from "actions/actionsForWorkout/action_deleteWorkout";

class SelectedWorkout extends Component{
    constructor(props){
        super(props);

    }

    render(){
        return(
            <div>
                {this.props.selectedWorkouts.map(function(ele,idx){
                    return(
                        <div className="selected-workout-container" key={idx}>
                            <Link to={`/main/${this.props.selectedDate}/${ele}`}
                                  className="selected-workout-button"
                                  onClick={
                                      () => {this.props.action_clickWorkout(
                                          this.props.selectedDate,
                                          ele
                                      )}
                                  }
                            >
                                {ele}
                            </Link>

                            <img
                                src="./trash1600.png"
                                width={28}
                                height={28}
                                className="workout-delete-button"
                                onClick={() => {
                                    this.props.action_deleteWorkout(
                                        this.props.selectedDate,
                                        idx,
                                        this.props.selectedWorkouts,
                                        ele
                                    )
                                }}
                            >
                            </img>
                        </div>
                    )
                }.bind(this))}
            </div>
        )
    }

}

const propTypes = {
    selectedDate : PropTypes.string,
    kgRepList : PropTypes.array,
    selectedWorkouts : PropTypes.array
};

SelectedWorkout.propTypes = propTypes;

function mapStateToProps(state){
    return{
        selectedDate:state.selectedDate,
        kgRepList:state.kgRepList,
        selectedWorkouts:state.selectedWorkouts
    };
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        action_clickWorkout,
        action_deleteWorkout

    },dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(SelectedWorkout);