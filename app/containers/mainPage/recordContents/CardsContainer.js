/**
 * Created by chanwoopark on 2017. 7. 28..
 */
import React, { Component } from 'react';
import WorkoutCard from 'components/WorkoutCard';
import InlineCalendar from 'components/InlineCalendar';



export default class CardsContainer extends Component{
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

    render(){
        const category = this.props.match.params.category;

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
                        />
                    )
                })}
                {/*to test action select date works fine*/}
            </div>
        )
    }
}
