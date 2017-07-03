/**
 * Created by chanwoopark on 2017. 6. 26..
 */


//This Component can be only view rendering component which could be implemented only by function.

import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";

import action_clickWorkout from "../../actions/action_clickWorkout";

class SelectedWorkout extends Component{
    constructor(props){
        super(props)
    }

    ComponentDidMount(){
        console.log(this.props.kgRepList);
    }

    render(){
        return(
            <div className="selected-workout-container">

                <Link to={`/${this.props.selectedDate}/${this.props.selected}`}
                      className="selected-workout-button"
                      onClick={
                          () => {this.props.action_clickWorkout(
                              this.props.selectedDate,
                              this.props.selected
                          )}
                      }
                >
                    {this.props.selected}
                </Link>

                <button className="delete-button">x</button>

            </div>
        )
    }

}

function mapStateToProps(state){
    return{selectedDate:state.selectedDate,kgRepList:state.kgRepList};
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({action_clickWorkout:action_clickWorkout},dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(SelectedWorkout);