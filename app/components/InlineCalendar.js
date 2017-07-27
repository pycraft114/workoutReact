/**
 * Created by chanwoopark on 2017. 7. 27..
 */
import React, { Component } from 'react';

export default class InlineCalendar extends Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        $('#hello').datepicker({
        });
    }


    render(){
        return(
            <div className="hahah" id="hello">
            </div>
        )
    }
}
