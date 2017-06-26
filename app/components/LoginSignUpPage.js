/**
 * Created by chanwoopark on 2017. 6. 23..
 */
import React from 'react';

import {ArrowLeft,ArrowRight,Dots, Slides } from 'react-infinite-slide';

import SubmitForm from './SubmitForm';


export default class LoginSignUpPage extends React.Component{
    constructor(props){
        super(props);

        let that = this;
        let hashMap={};
        let inputIdType=["L-id","L-pw","S-id","S-pw","S-cf","S-em"];

        inputIdType.map(function(currType){
            hashMap[currType] = function(val){
                let obj = {};
                obj[currType] = val;
                this.setState(obj);
            }.bind(that);
        });

        this.state={
            hashMap:hashMap
        };

        this.onInputChange = this.onInputChange.bind(this);
        this.onButton = this.onButton.bind(this);
    }

    onInputChange(evt){
        let inputId = evt.target.id;
        let value = evt.target.value;
        //값을 입력할때마다 setState하는것 보다 버튼을 눌렀을때 value값을 가져오는게 낫지 않나?
        this.state.hashMap[inputId](value);
    }


    onButton(evt){
        evt.preventDefault();

        console.log(this.state);
    }



    /*
     props.inputTags = [{id : x, placeholder : y, evt : func},{id : x, placeholder : y, evt : func}]
     props.button = {context : x ,evt : func}
     props.inputTags
     props.button을 넘겨줘야함
     */


    render(){

        return(
            <div className="login-signup-page">
                <video className="video" autoPlay="true" loop>
                    <source src="./skateboard.mp4" type="video/mp4" />
                </video>
                <Slides
                        duration={300}
                        dots={Dots}
                        width="100%"
                        height="100%">
                    <div>
                        <SubmitForm
                            inputTags={[{id:"L-id",placeholder:"Type your ID",evt:this.onInputChange},
                                {id:"L-pw",placeholder:"Type your Password",evt:this.onInputChange}]}
                            button={{context:"LOGIN",evt:this.onButton}}
                            header="LOGIN"
                        />
                    </div>
                    <div>
                        <SubmitForm
                            inputTags={[{id:"S-id",placeholder:"Type your ID",evt:this.onInputChange},
                                {id:"S-pw",placeholder:"Type your Password",evt:this.onInputChange},
                                {id:"S-cf",placeholder:"Confirm Password",evt:this.onInputChange},
                                {id:"S-em",placeholder:"Type your Email",evt:this.onInputChange}]}
                            button={{context:"SIGN-UP",evt:this.onButton}}
                            header="SIGN-UP"
                        />
                    </div>
                </Slides>
            </div>
        )
    }











}