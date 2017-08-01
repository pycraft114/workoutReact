/**
 * Created by chanwoopark on 2017. 7. 27..
 */
import React, { Component } from 'react';

export default class WorkoutCard extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div key={this.props.key}>
                <div>
                    <div className="thumbnail">
                        <img src="https://previews.123rf.com/images/nikdoorg/nikdoorg1401/nikdoorg140100014/25118481-Bench-Press-Icon-Stock-Vector.jpg" width="200" height="300" alt="..."/>
                            <div className="caption">
                                <p>{this.props.description}</p>
                                <p><a href="#" className="btn btn-primary" data-toggle="modal" data-target="#myModal">{this.props.workoutType}</a></p>
                            </div>
                    </div>
                </div>
            </div>
        )
    }
}

/*
thing to receive as a prop
img src
button content
p content above button
*/
