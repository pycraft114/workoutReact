/**
 * Created by chanwoopark on 2017. 6. 29..
 */
import React,{Component} from 'react';
import DatePicker from 'react-datepicker';
import {bindActionCreators} from 'redux';
import axios from 'axios';

import {connect} from 'react-redux';

import action_selectDate from '../../actions/action_selectDate';
import action_selectWorkout from '../../actions/action_selectWorkout';

import SelectedWorkout from './SelectedWorkout';
import Selector from '../../components/Selector';



class WorkoutContainer extends Component{
    render(){
        return(
            <div className="workout-container">

                <div className="date-picker-container">
                    <p className="date-picker-header">Date Picker</p>

                    <DatePicker
                        onChange={this.props.action_selectDate}
                    />
                </div>

                <div className="workout-list">
                    {
                        this.props.selectedWorkouts.map(function(ele,idx){
                            return(
                                <SelectedWorkout
                                    key={idx}
                                    idx={idx}
                                    selected={ele}
                                />
                            )
                        })
                    }
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
                    <button
                        onClick={function(){
                            var a = axios.get('/volumes/squat');
                            a.then((res) => {console.log(res.data.volumes)});
                        }}
                    >haha</button>
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
        workoutOptions:state.workoutOptions
    };
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        action_selectDate,
        action_selectWorkout
    },dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(WorkoutContainer);