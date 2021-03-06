/**
 * Created by chanwoopark on 2017. 8. 1..
 */
import React,{ Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {BrowserRouter, Router, Switch, Link } from 'react-router-dom';
import { browserHistory } from 'react-router';


//import actions
import action_typeKgRep from 'actions/actionsForVolume/action_typeKgRep';
import action_sendKgRep from 'actions/actionsForVolume/action_sendKgRep';
import action_fetchDoneWorkouts from 'actions/action_fetchDoneWorkouts';

//import component
import KgRep from './KgRep';

class VolumeModal extends Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        $('#myModal').on('hide.bs.modal', function(){
            this.props.action_fetchDoneWorkouts(this.props.selectedDate)
        }.bind(this));
    }

    render(){
        const { kg, rep, kgRepList, selectedDate, clickedWorkout, action_typeKgRep, action_sendKgRep } = this.props;

        return(
            <div className="modal fade" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                            <h4 className="modal-title" id="myModalLabel">{clickedWorkout}</h4>
                        </div>

                        <div className="modal-body">
                            <div className="input-volume">
                                <input
                                    type="number"
                                    id="kg"
                                    onChange={action_typeKgRep}
                                /> Kg x

                                <input
                                    type="number"
                                    id="rep"
                                    onChange={action_typeKgRep}
                                /> Rep

                                <p onClick={(evt) => {action_sendKgRep(
                                    evt,
                                    kg,
                                    rep,
                                    selectedDate,
                                    clickedWorkout,
                                    kgRepList
                                )}} id="check">&#x2714;</p>
                            </div>

                            <div id="kg-rep-list">
                                <KgRep
                                    date={selectedDate}
                                    workout={clickedWorkout}
                                >
                                </KgRep>
                            </div>
                        </div>

                        <div className="modal-footer">
                            <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


function mapStateToProps(state){
    return{
        kg:state.kg,
        rep:state.rep,
        kgRepList : state.kgRepList,
        selectedDate : state.selectedDate,
        clickedWorkout : state.clickedWorkout
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        action_typeKgRep,
        action_sendKgRep,
        action_fetchDoneWorkouts
    },dispatch)
}


export default connect(mapStateToProps,mapDispatchToProps)(VolumeModal)