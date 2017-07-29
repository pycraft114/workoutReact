/**
 * Created by chanwoopark on 2017. 7. 28..
 */
import React, { Component } from 'react';
import WorkoutCard from 'components/WorkoutCard';

export default class CardsContainer extends Component{
    constructor(props){
        super(props);

        this.state={
            chest:[{description:"blahblahblahbl", type:"Bench Press"},
                {description:"blahblahblahbl", type:"Cable"},
                {description:"blahblahblahbl", type:"Something"}],
            leg:[{description:"blahblahblahbl", type:"leg"},
                {description:"blahblahblahbl", type:"leg"}],
            back:[{description:"blahblahblahbl", type:"back"}]
        };
    }

    render(){
        const category = this.props.match.params.category;

        return(
            <div className="card-container">
                {this.state[category].map(function(currEle,idx){
                    return(
                        <WorkoutCard
                            description={currEle.description}
                            workoutType={currEle.type}
                            key={idx}
                        />
                    )
                })}
            </div>
        )
    }
}
