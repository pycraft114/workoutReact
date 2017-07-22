/**
 * Created by chanwoopark on 2017. 6. 29..
 */
import React,{Component} from 'react';
import DatePicker from 'react-bootstrap-date-picker';
import {bindActionCreators} from 'redux';
import {FormGroup,ControlLabel,HelpBlock,InputGroup} from 'react-bootstrap';


import {connect} from 'react-redux';

import action_selectDate from '../../../../actions/action_selectDate';
import action_selectWorkout from '../../../../actions/action_selectWorkout';


import SelectedWorkout from './SelectedWorkout';
import Selector from '../../../../components/Selector';



class WorkoutContainer extends Component{
    render(){
        return(
            <div className="workout-container">

                <div className="date-picker-container">
                    <FormGroup>
                        <InputGroup>
                            <DatePicker
                                    id="example-datepicker"
                                    style={{width:'300px'}}
                                    clearButtonElement="x"
                                    showClearButton={true}
                                    dateFormat={"YYYY-MM-DD"}
                                    placeholder="Choose date"
                                    value={this.props.selectedDate}
                                    calendarPlacement="top"
                                    onChange={
                                        (value,formatted) =>{
                                            this.props.action_selectDate(formatted)
                                        }
                                    }
                            />
                        </InputGroup>
                    </FormGroup>
                </div>

                <div className="workout-list">

                    <SelectedWorkout/>

                    <Selector
                        id="workout-selector"
                        title="Workout"
                        options={this.props.workoutOptions}
                        onSelect={
                            (evtKey) => {
                                this.props.action_selectWorkout(
                                    evtKey,
                                    this.props.selectedDate,
                                    this.props.selectedWorkouts
                                )
                            }
                        }
                    />
                </div>
            </div>

        )
    }
}
/*
Selector에게 넘겨줘야할것
title,onSelect action,option
*/


function mapStateToProps(state){
    return{
        selectedWorkouts:state.selectedWorkouts,
        selectedDate:state.selectedDate,
        workoutOptions:state.workoutOptions,
        datesForChart:state.datesForChart,
        volumesForChart:state.volumesForChart
    };
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        action_selectDate,
        action_selectWorkout,
    },dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(WorkoutContainer);