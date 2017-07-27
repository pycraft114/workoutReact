/**
 * Created by chanwoopark on 2017. 7. 13..
 */
import React,{Component} from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';

//import containers
import VolumeContainer from './volume/VolumeContainer'
import WorkoutContainer from './workout/WorkoutContainer';
import NoMatch from 'components/NoMatch';


export default class List extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <BrowserRouter>
                <Switch>
                    <Route exact path='/main/haha' component={NoMatch}/>
                    <Route exact path="/main" component={WorkoutContainer}/>
                    <Route exact path="/:date/:workout" component={VolumeContainer}/>
                </Switch>
            </BrowserRouter>
        )
    }

}