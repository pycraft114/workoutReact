/**
 * Created by chanwoopark on 2017. 7. 28..
 */
import React, { Component } from 'react';
import WorkoutCard from 'components/WorkoutCard';

const chest = [
    {description:"blahblahblahbl", type:"Bench Press"},
    {description:"blahblahblahbl", type:"Cable"},
    {description:"blahblahblahbl", type:"Something"}
    ];
const leg = [
    {description:"blahblahblahbl", type:"leg"},
    {description:"blahblahblahbl", type:"leg"},
    {description:"blahblahblahbl", type:"leg"}
];
const back = [
    {description:"blahblahblahbl", type:"back"},
    {description:"blahblahblahbl", type:"back"},
    {description:"blahblahblahbl", type:"back"}
];

export default class Chest extends Component{
    constructor(props){
        super(props);

        console.log(this.props);

        switch(this.props.match.params.category){
            case "chest":
                this.type=chest;
                break;
            case "leg":
                this.type=leg;
                break;
            case "back":
                this.type=back;
                break;
            default:
                this.type=[];
        }
    }

    render(){
        return(
            <div className="chest">
                {this.type.map(function(currEle,idx){
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