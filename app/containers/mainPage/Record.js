/**
 * Created by chanwoopark on 2017. 7. 28..
 */
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { browserHistory } from 'react-router';

import NavTab from 'components/NavTab';
import CardsContainer from './recordContents/CardsContainer';

export default class Record extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <BrowserRouter history={browserHistory}>
                <div className="record">
                    <NavTab/>
                    <Switch>
                        <Route path='/main/record/:category' component={CardsContainer}/>
                    </Switch>
                </div>
            </BrowserRouter>
        )

    }
}
