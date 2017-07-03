/**
 * Created by chanwoopark on 2017. 6. 26..
 */
import React,{Component} from 'react';

import {bindActionCreators} from 'redux';

import {connect} from 'react-redux';
import action_selectWorkout from '../../actions/action_selectWorkout';


class WorkoutSelector extends Component{

    render(){


        return(
            <select onChange={(evt) => {this.props.action_selectWorkout(evt,this.props.selectedDate,this.props.selectedWorkouts)}}>
                {
                    this.props.workoutOptions.map(function(currType){
                        return <option key={currType} value={currType}>{currType}</option>
                    })
                }
            </select>
        )
    }

}

function mapStateToProps(state){
    return{
        selectedWorkouts:state.selectedWorkouts,
        selectedDate:state.selectedDate,
        workoutOptions:state.workoutOptions,
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({action_selectWorkout:action_selectWorkout},dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(WorkoutSelector);


