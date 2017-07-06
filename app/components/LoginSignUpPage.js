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

                <div className="logo-container">
                    <img
                        className="dumbbell-logo"
                        src="./logo.jpg"
                        width={56}
                        height={53}
                    >
                    </img>
                    <h1>
                        <a href="" className="typewrite" data-period={2000} data-type={'[ "CONSISTENCY" ]'}>
                        <span className="wrap">
                        </span>
                        </a>
                    </h1>
                </div>

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
                        />
                    </div>
                    <div>
                        <SubmitForm
                            inputTags={[{id:"S-id",placeholder:"Type your ID",evt:this.onInputChange},
                                {id:"S-pw",placeholder:"Type your Password",evt:this.onInputChange},
                                {id:"S-cf",placeholder:"Confirm Password",evt:this.onInputChange},
                                {id:"S-em",placeholder:"Type your Email",evt:this.onInputChange}]}
                            button={{context:"SIGN-UP",evt:this.onButton}}
                        />
                    </div>
                </Slides>
            </div>
        )
    }
}


//seperate file
(function(){
    var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
            delta = this.period;
            this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            this.loopNum++;
            delta = 500;
        }

        setTimeout(function() {
            that.tick();
        }, delta);
    };

    window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
                new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
        document.body.appendChild(css);
    };
})()

