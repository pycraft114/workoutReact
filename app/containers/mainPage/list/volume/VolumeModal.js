/**
 * Created by chanwoopark on 2017. 8. 1..
 */
import React,{ Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

//import actions
import action_typeKgRep from 'actions/actionsForVolume/action_typeKgRep';
import action_sendKgRep from 'actions/actionsForVolume/action_sendKgRep';
import action_fetchKgRep from 'actions/actionsForWorkout/action_fetchKgRep';

//import component
import KgRep from './KgRep';

class VolumeModal extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="modal fade" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                            <h4 className="modal-title" id="myModalLabel">THIS IS FOR TEST</h4>
                        </div>

                        <div className="modal-body">
                            <div className="input-volume">
                                <input
                                    type="number"
                                    id="kg"
                                    onChange={this.props.action_typeKgRep}
                                /> Kg x

                                <input
                                    type="number"
                                    id="rep"
                                    onChange={this.props.action_typeKgRep}
                                /> Rep

                                <p onClick={(evt) => {this.props.action_sendKgRep(
                                    evt,
                                    this.props.kg,
                                    this.props.rep,
                                    this.date,
                                    this.workout,
                                    this.props.kgRepList
                                )}} id="check">&#x2714;</p>
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
        kgRepList : state.kgRepList
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        action_typeKgRep,
        action_sendKgRep,
        action_fetchKgRep
    },dispatch)
}


export default connect(mapStateToProps,mapDispatchToProps)(VolumeModal)