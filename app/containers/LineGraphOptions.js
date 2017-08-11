/**
 * Created by chanwoopark on 2017. 8. 5..
 */
import React,{ Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import action_selectOption from 'actions/actionsForGraph/action_selectOption';

class LineGraphOptions extends Component{
    constructor(props){
        super(props);

        this.state = {
            workoutTypes : [
                "Bench Press",
                "Dumbbell Bench Press",
                "Squat",
                "Dead Lift",
                "Cable",
                "Leg",
            ]
        }
    }



    render(){
        return(
            <ul className="nav nav-pills nav-stacked" onClick={(evt) => {this.props.action_selectOption(evt.target.innerHTML)}}>
                {this.state.workoutTypes.map(function(currentElement,idx){
                    return(
                        <li key={idx}><a>{currentElement}</a></li>
                    )
                })}
            </ul>
        )
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({action_selectOption},dispatch);
}

export default connect(null,mapDispatchToProps)(LineGraphOptions)


{/*<li className="active"><a href="#">Messages</a></li>*/}
