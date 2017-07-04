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
        console.log(this.props.idx);
        return(
            <div className="selected-workout-container">

                <Link to={`/${this.props.selectedDate}/${this.props.selected}`}
                      className="selected-workout-button"
                      onClick={
                          () => {this.props.action_clickWorkout(
                              this.props.selectedDate,
                              this.props.selected
                          )}
                      }
                >
                    {this.props.selected}
                </Link>

                <button
                    className="workout-delete-button"
                    onClick={() => {
                        this.props.action_deleteWorkout(
                            this.props.selectedDate,
                            this.props.idx,
                            this.props.selectedWorkouts,
                            this.props.selected
                        )
                    }}
                >
                    x
                </button>

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