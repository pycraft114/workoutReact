/**
 * Created by chanwoopark on 2017. 6. 23..
 */
import React from 'react';
import {Route} from 'react-router-dom';
import LoginFrom from './LoginForm';
import SubmitForm from './SubmitForm';


export default class LoginPage extends React.Component{
    constructor(props){
        super(props);

        let that = this;
        let hashMap={};
        let inputIdType=["L-id","L-pw","S-id","S-pw","S-cf","S-email"];

        inputIdType.map(function(currType){
            hashMap[currType] = function(val){
                this.setState({currType:val})
            }.bind(that);
        });

        this.state={
            hashMap:hashMap
        };

        this.onInputChange = this.onInputChange.bind(this);
    }

    onInputChange(evt){
        let inputId = evt.target.id;
        let value = evt.target.value;
        this.state.hashMap[inputId](value);
    }

    render(){
        return(
            <div className="login-page">
                <video className="video" autoPlay="true" loop>
                    <source src="./skateboard.mp4" type="video/mp4" />
                </video>
                <section className="login-signup-section">
                    <LoginFrom/>
                </section>

            </div>
        )
    }











}