/**
 * Created by chanwoopark on 2017. 6. 29..
 */
import React,{Component} from 'react';
import WorkoutSelector from './WorkoutSelector';
import SelectedWorkout from './SelectedWorkout';
import DatePicker from 'react-datepicker';
import {bindActionCreators} from 'redux';

import {connect} from 'react-redux';
import action_selectDate from '../../actions/action_selectDate';

import action_selectWorkout from '../../actions/action_selectWorkout';



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
                    <WorkoutSelector/>
                </div>
                <button id="something-btn" type="button" className="btn btn-success btn-sm">
                    Something
                </button>
            </div>

        )
    }
}

function mapStateToProps(state){
    return{
        selectedWorkouts:state.selectedWorkouts
    };
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({action_selectDate:action_selectDate},dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(WorkoutContainer);