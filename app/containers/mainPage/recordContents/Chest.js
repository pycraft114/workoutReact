/**
 * Created by chanwoopark on 2017. 7. 28..
 */
import React, { Component } from 'react';
import WorkoutCard from 'components/WorkoutCard';

const chestTypes = [
    {description:"blahblahblahbl", type:"Bench Press"},
    {description:"blahblahblahbl", type:"Cable"},
    {description:"blahblahblahbl", type:"Something"}
    ];

export default class Chest extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="chest">
                {chestTypes.map(function(currEle,idx){
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