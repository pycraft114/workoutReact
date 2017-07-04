/**
 * Created by chanwoopark on 2017. 6. 29..
 */
import React , {Component} from 'react';
import { connect } from 'react-redux';

class KgRep extends Component{
    render(){
        let kgRepList = this.props.kgRepList;

        return(
            <div className="kg-rep-container">
                {
                    kgRepList.map(function(obj,idx){
                        return(
                            <div className="kg-rep" key={idx}>
                                {obj.kg} Kg x {obj.rep} Rep
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

export default connect(mapStateToProps,null)(KgRep);
