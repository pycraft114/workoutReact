/**
 * Created by chanwoopark on 2017. 6. 26..
 */
//This Component can be only view rendering component which could be implemented by function.

import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class SelectedWorkout extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="selected-workout-container">

                <Link to={`/${this.props.selectedDate}/${this.props.selected}`}
                      className="selected-workout-button">{this.props.selected}
                </Link>

                <button className="delete-button">x</button>

            </div>
        )
    }

}

function mapStateToProps(state){
    return{selectedDate:state.selectedDate};
}

export default connect(mapStateToProps,null)(SelectedWorkout);