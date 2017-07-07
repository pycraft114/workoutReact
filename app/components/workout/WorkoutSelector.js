/**
 * Created by chanwoopark on 2017. 6. 26..
 */
//This Component can be only view rendering component which could be implemented by function.

import React,{Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { DropdownButton, MenuItem} from 'react-bootstrap';

import action_selectWorkout from '../../actions/action_selectWorkout';

//this component is reusable
class WorkoutSelector extends Component{

    render(){
        return(
            <DropdownButton
                id="dropdown-basic"
                title="Workout"
                onSelect={
                    (evtKey) =>{
                        this.props.action_selectWorkout(
                            evtKey,
                            this.props.selectedDate,
                            this.props.selectedWorkouts
                        )
                    }
                }
            >
                {
                    this.props.workoutOptions.map(
                        function(currType){
                            return <MenuItem
                                key={currType}
                                eventKey={currType}
                            >
                                {currType}
                            </MenuItem>
                        }
                    )
                }
            </DropdownButton>
        )
    }
}

/*return(
 <select onChange={(evt) => {this.props.action_selectWorkout(evt,this.props.selectedDate,this.props.selectedWorkouts)}}>
 {
 this.props.workoutOptions.map(function(currType){
 return <option key={currType} value={currType}>{currType}</option>
 })
 }
 </select>
 )*/

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


