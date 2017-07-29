/**
 * Created by chanwoopark on 2017. 7. 28..
 */
import React, { Component } from 'react';
import WorkoutCard from 'components/WorkoutCard';

export default class CardsContainer extends Component{
    constructor(props){
        super(props);

        this.state={
            type:[],
            path:this.props.match.params.category
        };
    }

    componentDidMount(){
        console.log("cc d m",this.props);
    }

    componentWillMount(){
        console.log("CardsContainer will update",this.props);
    }

    componentDidUpdate(){
        console.log("CardsContainer will update",this.props);
    }

    /*shouldComponentUpdate(nextProp,nextState){
        console.log("nextProp",nextProp);
        console.log("this.prop",this.props);
        console.log("nextState",nextState);
        console.log("thisState",this.state);

        if(nextProp.match.params.category !== this.props.match.params.category || nextState.type !== this.state.type){
            return true;
        }else{
            return false;
        }
    }*/


    render(){
        return(
            <div className="card-container">
                <div>{this.props.match.params.category}</div>
                <div>hello</div>
                {this.state.type.map(function(currEle,idx){
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
