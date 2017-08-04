/**
 * Created by chanwoopark on 2017. 7. 28..
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';

import WorkoutCard from 'components/WorkoutCard';
import InlineCalendar from 'components/InlineCalendar';

import action_fetchDoneWorkouts from 'actions/action_fetchDoneWorkouts';



class CardsContainer extends Component{
    constructor(props){
        super(props);

        this.state={
            chest:[{description:"blahblahblahbl", type:"Bench Press"},
                {description:"blahblahblahbl", type:"Cable"},
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
        this.props
    }

    render(){
        const category = this.props.match.params.category;
        const doneWorkouts = this.props.doneWorkouts;

        function checkIfDone(doneWorkouts, comparison){
            let done = false;
            doneWorkouts.map(function(currElement){
                if(currElement === comparison){
                    done = true;
                }
            });

            return done;
        }

        console.log("cards container rendering");

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
                            done={checkIfDone(doneWorkouts,currEle.type)}
                        />
                    )
                })}
                {/*to test action select date works fine*/}
            </div>
        )
    }
}

function mapStateToProps(state){
    return { doneWorkouts : state.doneWorkouts }
}

function mapDispatchToProps(dispatch){
    return
}

export default connect(mapStateToProps,null)(CardsContainer)

