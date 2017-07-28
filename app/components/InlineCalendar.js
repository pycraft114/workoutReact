/**
 * Created by chanwoopark on 2017. 7. 27..
 */
import React, { Component } from 'react';

export default class InlineCalendar extends Component{
    constructor(props){
        super(props)
    }


    componentDidMount(){
        $('#datetimepicker12').datetimepicker({
            inline: true
        });
    }


    render(){
        return(
            <div id="calendar">
                <div className="form-group">
                    <div className="row">
                        <div className="col-md-8">
                            <div id="datetimepicker12"></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
