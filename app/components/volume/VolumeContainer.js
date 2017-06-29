/**
 * Created by chanwoopark on 2017. 6. 29..
 */
import React,{Component} from 'react';
import axios from 'axios';
import KgRep from './KgRep';


export default class VolumeContainer extends Component{
    constructor(props){
        super(props);

        this.state = {
            kg:null,
            rep:null
        };


        this.onInputChange = this.onInputChange.bind(this);
        this.sendData = this.sendData.bind(this);
    }

    onInputChange(evt){
        evt.target.id ==='kg' ? this.setState({kg:evt.target.value}) : this.setState({rep:evt.target.value});
    }

    sendData(evt){
        if(evt.key === "Enter" || evt.target.id === "check"){
            if(this.state.kg && this.state.rep){
                console.log('called');
            }else{
                console.log("smth empty");
            }
        }
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
                            onChange={this.onInputChange}
                            onKeyPress={this.sendData}
                        /> Kg x
                        <input
                            type="number"
                            id="rep"
                            onChange={this.onInputChange}
                            onKeyPress={this.sendData}
                        /> Rep
                        <p onClick={this.sendData} id="check">&#x2714;</p>
                        <p>{this.state.kg}//{this.state.rep}</p>
                    </div>
                </div>





            </div>
        )
    }

}