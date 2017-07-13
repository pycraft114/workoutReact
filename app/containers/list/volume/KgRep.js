/**
 * Created by chanwoopark on 2017. 6. 29..
 */
import React , {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import action_deleteKgRep from '../../../actions/action_deleteKgRep';

class KgRep extends Component{
    //renders as much as this.props.kgRepList length
    render(){
        return(
            <div className="kg-rep-container">
                {
                    this.props.kgRepList.map((obj,idx) => {
                        return(

                            <div className="kg-rep" key={idx}>

                                <div>
                                    {obj.kg} Kg x {obj.rep} Rep
                                </div>

                                <img
                                    src="../trash1600.png"
                                    width={28}
                                    height={28}
                                    className="kgrep-delete-button"
                                    onClick={() => {
                                        this.props.action_deleteKgRep(
                                            this.props.date,
                                            this.props.workout,
                                            idx,
                                            this.props.kgRepList
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

function mapStateToProps(state){
    return { kgRepList:state.kgRepList }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({action_deleteKgRep:action_deleteKgRep},dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(KgRep);
