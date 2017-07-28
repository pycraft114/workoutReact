/**
 * Created by chanwoopark on 2017. 7. 28..
 */
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect, withRouter } from 'react-router-dom';
import { browserHistory } from 'react-router';

import NavTab from 'components/NavTab';
import InlineCalendar from 'components/InlineCalendar';
import CardsContainer from './recordContents/CardsContainer';

class Record extends Component{
    constructor(props){
        super(props)
    }


    shouldComponentUpdate(){
        return true;
    }

    componentDidUpdate(){
        console.log("record updated");
    }

    render(){
        return(
            <BrowserRouter history={browserHistory}>
                <div className="record">
                    <NavTab/>
                    {/*record-contents에 display flex로 할것*/}
                    <div className="record-contents">
                        <InlineCalendar/>
                        <Switch>
                            <Route path="/main/record/:category" component={CardsContainer}/>
                        </Switch>
                    </div>
                </div>
            </BrowserRouter>
        )

    }
}

export default withRouter(Record);