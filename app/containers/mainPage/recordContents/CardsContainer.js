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

        this.state={
            chest:[{description:"The bench press is an upper body strength training exercise that consists of pressing a weight upwards from a supine position.", type:"Bench Press"},
                {description:"The Dumbbell Bench Press is a Bench Press performed with a dumbbell .", type:"Dumbbell Bench Press"},
                {description:"blahblahblahbl", type:"Something"},
                {description:"blahblahblahbl", type:"Squat"},
                {description:"blahblahblahbl", type:"Dead lift"},
                {description:"blahblahblahbl", type:"Cable"},
                {description:"blahblahblahbl", type:"Cable"},
                {description:"blahblahblahbl", type:"Cable"},
                {description:"blahblahblahbl", type:"Cable"},
                {description:"blahblahblahbl", type:"Cable"},
                {description:"blahblahblahbl", type:"Cable"},
            ],
            leg:[{description:"blahblahblahbl", type:"leg"},
                {description:"blahblahblahbl", type:"leg"}],
            back:[{description:"blahblahblahbl", type:"back"}]
        };
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
                {this.state[category].map(function(currEle,idx){
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
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({action_fetchDoneWorkouts},dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(CardsContainer)

