/**
 * Created by chanwoopark on 2017. 7. 28..
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import WorkoutCard from 'components/WorkoutCard';
import InlineCalendar from 'components/InlineCalendar';

import action_fetchDoneWorkouts from 'actions/action_fetchDoneWorkouts';



class CardsContainer extends Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.action_fetchDoneWorkouts(this.props.selectedDate);
    }

    checkIfDone(doneWorkouts, comparison){
        for(let i = 0; i < doneWorkouts.length; i++){
            if(doneWorkouts[i] === comparison){
                return true;
            }
        }
        return false;
    }

    render(){
        const category = this.props.match.params.category;
        const doneWorkouts = this.props.doneWorkouts;

        return(
            <div className="card-container">
                <InlineCalendar/>
                {this.props.workoutTypes[category].map(function(currEle,idx){
                    return(
                        <WorkoutCard
                            description={currEle.description}
                            workoutType={currEle.type}
                            key={idx}
                            category={category}
                            done={this.checkIfDone(doneWorkouts,currEle.type)}
                        />
                    )
                }.bind(this))}
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        doneWorkouts : state.doneWorkouts,
        selectedDate : state.selectedDate,
        workoutTypes : state.workoutTypes
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({action_fetchDoneWorkouts},dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(CardsContainer)

