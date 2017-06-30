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
    constructor(props){
        super(props);

    }
    render(){
        return(
            <div className="workout-container">
                <div className="date-picker-container">
                    <p className="date-picker-header">Date Picker</p>

                    <DatePicker
                        selected={null}
                        onChange={this.props.action_selectDate}
                    />
                </div>
                <div className="workout-list">
                    {
                        this.props.selectedWorkout.map(function(ele,idx){
                            return(
                                <SelectedWorkout
                                    key={idx}
                                    selected={ele}
                                />
                            )
                        })

                        /*<SelectedWorkout
                         selected="Bench Press"
                         />*/
                    }
                    <WorkoutSelector
                        onSelectChange={this.props.action_selectWorkout}
                    />
                </div>
            </div>

        )
    }
}

function mapStateToProps(state){
    return{
        selectedDate:state.selectedDate,
        selectedWorkout:state.selectedWorkout,
        responseText:state.responseText
    };
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({action_selectDate:action_selectDate,action_selectWorkout:action_selectWorkout},dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(WorkoutContainer);