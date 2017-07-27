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
            <div className="row">
                <div className="col-sm-6 col-md-3">
                    <div className="thumbnail">
                        <img src="https://previews.123rf.com/images/nikdoorg/nikdoorg1401/nikdoorg140100014/25118481-Bench-Press-Icon-Stock-Vector.jpg" width="200" height="300" alt="..."/>
                            <div className="caption">
                                <p>a bodybuilding and weightlifting exercise in which a lifter lies on a bench with feet on the floor and raises a weight with both arms.</p>
                                <p><a href="#" className="btn btn-primary">Bench Press</a></p>
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
