/**
 * Created by chanwoopark on 2017. 7. 27..
 */
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import action_selectDate from 'actions/actionsForWorkout/action_selectDate';

class InlineCalendar extends Component{
    constructor(props){
        super(props)
    }


    componentDidMount() {
        $('#datetimepicker12').datetimepicker({
            inline: true,
            format:'YYYY-MM-DD'
        });

        $('#datetimepicker12').on('dp.change',function(){
            const pickedDate = $('#datetimepicker12').data('date');
            this.props.action_selectDate(pickedDate);
        }.bind(this))
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

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        action_selectDate
    },dispatch);
}

export default withRouter(connect(null, mapDispatchToProps)(InlineCalendar));
