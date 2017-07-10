/**
 * Created by chanwoopark on 2017. 6. 26..
 */


//This Component can be only view rendering component which could be implemented only by function.

import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";

import action_clickWorkout from "../../actions/action_clickWorkout";
import action_deleteWorkout from "../../actions/action_deleteWorkout";

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

                            <Link to={`/${this.props.selectedDate}/${ele}`}
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