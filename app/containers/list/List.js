/**
 * Created by chanwoopark on 2017. 7. 13..
 */
import React,{Component} from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
//-------------components------------------------------
import VolumeContainer from './volume/VolumeContainer'
import WorkoutContainer from './workout/WorkoutContainer';


export default class List extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <BrowserRouter>
                <Switch>
                    <Route exact path="/main" component={WorkoutContainer}/>
                    <Route exact path="/:date/:workout" component={VolumeContainer}/>
                </Switch>
            </BrowserRouter>
        )
    }

}