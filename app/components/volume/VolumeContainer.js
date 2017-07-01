/**
 * Created by chanwoopark on 2017. 6. 29..
 */
import React,{Component} from 'react';
import axios from 'axios';
import KgRep from './KgRep';
import action_typeKgRep from '../../actions/action_typeKgRep';
import action_sendKgRep from '../../actions/action_sendKgRep';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';


class VolumeContainer extends Component{
    constructor(props){
        super(props);

    }

    componentDidMount(){
        this.workout = this.props.match.params.workout;
    }

    render(){
        return(
            <div className="volume-container">
                <div className="volume-header">
                    <p>Bench Press</p>
                    <button className="back-button">Back</button>
                </div>
                <div className="volume-list">
                    <div className="input-volume">
                        <input
                            type="number"
                            id="kg"
                            onChange={this.props.action_typeKgRep}
                            onKeyPress={(evt) => {this.props.action_sendKgRep(
                                evt,
                                this.props.kg,
                                this.props.rep,
                                this.props.selectedDate,
                                this.workout
                            )}}
                        /> Kg x

                        <input
                            type="number"
                            id="rep"
                            onChange={this.props.action_typeKgRep}
                            onKeyPress={(evt) => {this.props.action_sendKgRep(
                                evt,
                                this.props.kg,
                                this.props.rep,
                                this.props.selectedDate,
                                this.workout
                            )}}
                        /> Rep

                        <p onClick={(evt) => {this.props.action_sendKgRep(
                            evt,
                            this.props.kg,
                            this.props.rep,
                            this.props.selectedDate,
                            this.workout
                        )}} id="check">&#x2714;</p>

                        <p>{this.props.kg}//{this.props.rep}</p>
                    </div>
                </div>
            </div>
        )
    }

}

function mapStateToProps(state){
    return{kg:state.kg,rep:state.rep,selectedDate:state.selectedDate}
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({action_typeKgRep:action_typeKgRep,action_sendKgRep:action_sendKgRep},dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(VolumeContainer);