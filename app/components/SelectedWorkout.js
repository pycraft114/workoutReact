/**
 * Created by chanwoopark on 2017. 6. 26..
 */
import React, {Component} from 'react';

export default class SelectedWorkout extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="selected-workout-container">
                <button className="selected-workout">{this.props.selected}</button>
                <button className="delete-button">Delete</button>
            </div>
        )
    }



}