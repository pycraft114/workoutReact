/**
 * Created by chanwoopark on 2017. 6. 29..
 */
import React,{Component} from 'react';
import axios from 'axios';
import KgRep from './KgRep';


export default class VolumeContainer extends Component{
    constructor(props){
        super(props);

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
                            onChange={this.props.onKgRepChange}
                            onKeyPress={this.props.sendKgRep}
                        /> Kg x
                        <input
                            type="number"
                            id="rep"
                            onChange={this.props.onKgRepChange}
                            onKeyPress={this.props.sendKgRep}
                        /> Rep
                        <p onClick={this.props.sendKgRep} id="check">&#x2714;</p>
                        <p>{this.props.kg}//{this.props.rep}</p>
                    </div>
                </div>





            </div>
        )
    }

}