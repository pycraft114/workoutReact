/**
 * Created by chanwoopark on 2017. 6. 29..
 */
import React , {Component} from 'react';

export default class KgRep extends Component{
    constructor(props){
        super(props);


    }

    render(){
        return(
            <div className="kg-rep">
                {this.props.kg} Kg x {this.props.rep} Rep
            </div>
        )
    }
}