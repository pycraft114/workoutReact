/**
 * Created by chanwoopark on 2017. 6. 29..
 */
import React , { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import action_deleteKgRep from 'actions/actionsForVolume/action_deleteKgRep';

class KgRep extends Component{
    //renders as much as kgRepList length
    render(){
        const { kgRepList, date, workout, action_deleteKgRep } = this.props;

        return(
            <div className="kg-rep-container">
                {
                    kgRepList.map((obj,idx) => {
                        return(

                            <div className="kg-rep-sub-container" key={idx}>
                                <div className="kg-rep">
                                    {obj.kg} Kg x {obj.rep} Rep
                                </div>

                                <img
                                    src="/trash1600.png"
                                    width={28}
                                    height={28}
                                    className="kgrep-delete-button"
                                    onClick={() => {
                                        action_deleteKgRep(
                                            date,
                                            workout,
                                            idx,
                                            kgRepList
                                        )
                                    }}
                                >
                                </img>
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}

const propTypes = {
    kgRepList : PropTypes.array
};

KgRep.propTypes = propTypes;

function mapStateToProps(state){
    return { kgRepList:state.kgRepList }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({action_deleteKgRep:action_deleteKgRep},dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(KgRep);
