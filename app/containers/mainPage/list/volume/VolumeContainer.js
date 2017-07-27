/**
 * Created by chanwoopark on 2017. 6. 29..
 */
import React,{ Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

//import actions
import action_typeKgRep from 'actions/actionsForVolume/action_typeKgRep';
import action_sendKgRep from 'actions/actionsForVolume/action_sendKgRep';

//import component
import KgRep from './KgRep';

class VolumeContainer extends Component{
    componentWillMount(){
        this.workout = this.props.match.params.workout;
        this.date = this.props.match.params.date;
    }

    render(){
        console.log("volume container being rendered");
        return(
            <div className="list-container">

                <div className="volume-header">
                    <h1>{this.workout}</h1>

                    <Link
                        to="/main"
                        className="back-button"
                    >
                        Back
                    </Link>
                </div>

                <div className="volume-list">
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

                    <KgRep
                        date={this.date}
                        workout={this.workout}
                    >
                    </KgRep>
                </div>
            </div>
        )
    }
}

const propTypes = {
    kg : PropTypes.string,
    rep : PropTypes.string,
    kgRepList : PropTypes.array
};

VolumeContainer.propTypes = propTypes;

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
    },dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(VolumeContainer);