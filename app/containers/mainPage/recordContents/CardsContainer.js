/**
 * Created by chanwoopark on 2017. 7. 28..
 */
import React, { Component } from 'react';
import WorkoutCard from 'components/WorkoutCard';
import { withRouter} from 'react-router-dom';
import { connect } from 'react-redux';

import NavTab from 'components/NavTab';

const chest = [
    {description:"blahblahblahbl", type:"Bench Press"},
    {description:"blahblahblahbl", type:"Cable"},
    {description:"blahblahblahbl", type:"Something"}
    ];
const leg = [
    {description:"blahblahblahbl", type:"leg"},
    {description:"blahblahblahbl", type:"leg"},
];
const back = [
    {description:"blahblahblahbl", type:"back"}
];

class CardsContainer extends Component{
    constructor(props){
        super(props);
        this.type=[];
    }

    componentWillMount(){
        console.log("car container will mount");
        console.log(this.props)
    }


    componentDidMount(){
        console.log("car container did mount");
        console.log(this.props)
    }

    componentWillUpdate(){
        console.log("card container updated");
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
            <div className="card-container">
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

export default withRouter(connect()(CardsContainer));