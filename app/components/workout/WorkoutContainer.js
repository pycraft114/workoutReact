/**
 * Created by chanwoopark on 2017. 6. 29..
 */
import React,{Component} from 'react';
import WorkoutSelector from './WorkoutSelector';
import SelectedWorkout from './SelectedWorkout';
import DatePicker from 'react-datepicker';


export default class WorkoutContainer extends Component{
    constructor(props){
        super(props);

    }
    render(){
        return(
            <div className="workout-container">
                <div className="date-picker-container">
                    <p className="date-picker-header">Date Picker</p>

                    <DatePicker
                        selected={this.props.selectedDate}
                        onChange={this.props.onDateChange}
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
                        onSelectChange={this.props.onSelectChange}
                    />
                </div>
            </div>

        )
    }

}