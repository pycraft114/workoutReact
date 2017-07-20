/**
 * Created by chanwoopark on 2017. 6. 23..
 */
import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {ArrowLeft,ArrowRight,Dots, Slides } from 'react-infinite-slide';
import axios from 'axios';

//Components
import SubmitForm from '../components/SubmitForm';

//actions
import action_clickLoginBtn from '../actions/action_clickLoginBtn';

class LoginSignUpPage extends React.Component{
    constructor(props){
        super(props);

        let formDatas={};
        let inputIDs=["L-id","L-pw","S-id","S-pw","S-cf","S-em"];

        inputIDs.map(function(currEle){
           formDatas[currEle] = null;
        });

        this.onInputChange = this.onInputChange.bind(this);
        this.onSignupButton = this.onSignupButton.bind(this);
        this.dummy = this.dummy.bind(this);

        this.state={
            formDatas:formDatas,
            errorMsg:null,
        };
    }

    onInputChange(evt){
        let inputId = evt.target.id;
        let value = evt.target.value;
        let obj = Object.assign({},this.state.formDatas);
        obj[inputId] = value;
        this.setState({formDatas :obj});
    }


    onSignupButton(evt){
        evt.preventDefault();
        var inputValues = this.state.formDatas;

        if(inputValues["S-id"]&&inputValues["S-em"]&&inputValues["S-cf"]&&inputValues["S-pw"]){
            if(inputValues["S-pw"] === inputValues["S-cf"]){

                axios.post('/signup',{
                    id:inputValues["S-id"],
                    password:inputValues["S-pw"],
                    email:inputValues["S-em"]
                }).then((res) => {
                    if(res.data === "USER_EXIST"){
                        this.setState({errorMsg:"User id already in use"});
                    }else if(res.data === "SIGNUP_SUCCESS"){
                        this.setState({errorMsg:"Welcome to CONSISTENCY"})
                    }
                })

            }else{
                //"please confirm your password"
                this.setState({errorMsg:"Please confirm your password"});
            }
        }else{
            //something empty
            this.setState({errorMsg:"Please fill out the blanks"});
        }

    }


    dummy(){
        console.log("dummy called");
        return(
            <div>hahahahah</div>
        )
    }

    /*
     props.inputTags = [{id : x, placeholder : y, evt : func},{id : x, placeholder : y, evt : func}]
     props.button = {context : x ,evt : func}
     를 SubmitForm 에게 넘겨줘야함
     */


    render(){
        var inputValues2 = this.state.formDatas;
        return(
            <div className="login-signup-page">

                <div className="logo-container">
                    <img
                        className="dumbbell-logo"
                        src="https://image.freepik.com/free-icon/dumbbell_318-54696.jpg"
                        width={56}
                        height={53}
                    >
                    </img>
                    <h1>
                        <a href="" className="typewrite" data-period={2000} data-type={'[ "CONSISTENCY","JUST DO IT","DO YOU EVEN LIFT?" ]'}>
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
                            inputvals = {inputValues2}
                            inputTags={[{id:"L-id",placeholder:"Type your ID",evt:this.onInputChange},
                                {id:"L-pw",placeholder:"Type your Password",evt:this.onInputChange,type:"password"}]}
                            button={{context:"LOGIN",evt:(evt) =>{
                                evt.preventDefault();
                                this.props.action_clickLoginBtn(inputValues2["L-id"],inputValues2["L-pw"]);
                            }}}
                        />
                    </div>
                    <div>
                        <SubmitForm
                            inputTags={[{id:"S-id",placeholder:"Type your ID",evt:this.onInputChange},
                                {id:"S-pw",placeholder:"Type your Password",evt:this.onInputChange,type:"password"},
                                {id:"S-cf",placeholder:"Confirm Password",evt:this.onInputChange,type:"password"},
                                {id:"S-em",placeholder:"Type your Email",evt:this.onInputChange,type:"email"}]}
                            button={{context:"SIGN-UP",evt:this.onSignupButton}}
                        />
                    </div>
                </Slides>
                <div className="error-msg">
                    {this.props.message}
                </div>
                <div>{this.dummy()}</div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {message : state.message};
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        action_clickLoginBtn
    },dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(LoginSignUpPage);


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

