/**
 * Created by chanwoopark on 2017. 6. 29..
 */
import React,{ Component, PropTypes } from 'react';
import DatePicker from 'react-bootstrap-date-picker';
import { bindActionCreators } from 'redux';
import { FormGroup, ControlLabel, HelpBlock, InputGroup} from 'react-bootstrap';
import { connect } from 'react-redux';

//import actions
import action_selectDate from 'actions/actionsForWorkout/action_selectDate';
import action_selectWorkout from 'actions/actionsForWorkout/action_selectWorkout';

//import components
import SelectedWorkout from './SelectedWorkout';
import Selector from 'components/Selector';



class WorkoutContainer extends Component{
    render(){
        return(
            <div className="list-container">
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

const propTypes = {
    selectedWorkouts : PropTypes.array,
    selectedDate : PropTypes.string,
    workoutOptions : PropTypes.array.isRequired,
};

WorkoutContainer.propTypes = propTypes;

function mapStateToProps(state){
    return{
        selectedWorkouts:state.selectedWorkouts,
        selectedDate:state.selectedDate,
        workoutOptions:state.workoutOptions,
    };
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        action_selectDate,
        action_selectWorkout,
    },dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(WorkoutContainer);