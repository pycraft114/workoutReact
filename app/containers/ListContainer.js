/**
 * Created by chanwoopark on 2017. 6. 29..
 */
import React,{Component} from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import 'react-datepicker/dist/react-datepicker.css';

import VolumeContainer from './volume/VolumeContainer';
import WorkoutContainer from './workout/WorkoutContainer';


export default class ListContainer extends Component{
    constructor(props){
        super(props);

    }
    render(){
        return(
            <BrowserRouter>
                <div className="list-container">
                    <Switch>
                        <Route exact path="/" component={WorkoutContainer}/>
                        <Route exact path="/:date/:workout" component={VolumeContainer}/>
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }

}


