/**
 * Created by chanwoopark on 2017. 7. 28..
 */
import React, { Component } from 'react';


import NavTab from 'components/NavTab';
import InlineCalendar from 'components/InlineCalendar';

export default class Record extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="record">
                <NavTab/>
                <InlineCalendar/>
            </div>
        )

    }
}