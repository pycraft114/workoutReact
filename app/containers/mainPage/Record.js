/**
 * Created by chanwoopark on 2017. 7. 28..
 */
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { browserHistory } from 'react-router';

import NavTab from 'components/NavTab';
import InlineCalendar from 'components/InlineCalendar';
import Chest from './recordContents/Chest';

export default class Record extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="record">
                <NavTab/>
                {/*record-contents에 display flex로 할것*/}
                <div className="record-contents">
                    <InlineCalendar/>
                    <BrowserRouter history={browserHistory}>
                        <Switch>
                            <Route path="/main/record/chest" component={Chest}/>
                        </Switch>
                    </BrowserRouter>
                </div>
            </div>
        )

    }
}