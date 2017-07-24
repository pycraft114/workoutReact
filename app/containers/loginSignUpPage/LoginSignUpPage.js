/**
 * Created by chanwoopark on 2017. 6. 23..
 */
import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators,dispatch} from 'redux';
import {ArrowLeft,ArrowRight,Dots, Slides } from 'react-infinite-slide';

//Components
import SubmitForm from 'components/SubmitForm';

//actions
import action_clickLoginBtn from 'actions/actionsForLoginPage/action_clickLoginBtn';
import action_changeInput from 'actions/actionsForLoginPage/action_changeInput';
import action_clickSignupBtn from 'actions/actionsForLoginPage/action_clickSignupBtn';

class LoginSignUpPage extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            inputIds : {
                loginId:"loginId",
                loginPassword:"loginPassword",
                signupId:"signupId",
                signupPassword:"signupPassword",
                signupConfirm:"signupConfirm",
                signupEmail:"signupEmail"
            },
            placeholders : {
                id:"Type your ID",
                password : "Type your password",
                confirm : "Confirm your password",
                email:"Type your email"
            },
            btnContext:{
                login:"LOGIN",
                signup:"SIGN UP"
            },

        };

    }
    /*
     props.inputTags = [{id : x, placeholder : y, evt : func},{id : x, placeholder : y, evt : func}]
     props.button = {context : x ,evt : func}
     를 SubmitForm 에게 넘겨줘야함
     */

    render(){
        const inputIds = this.state.inputIds,
            placeholders = this.state.placeholders,
            btnContext = this.state.btnContext;

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
                            inputTags={
                                [
                                    {
                                        id:inputIds.loginId,
                                        placeholder:placeholders.id,
                                        evt:(evt) => {this.props.action_changeInput(evt.target.id, evt.target.value)}
                                    },
                                    {
                                        id:inputIds.loginPassword,
                                        placeholder:placeholders.password,
                                        evt:(evt) => {this.props.action_changeInput(evt.target.id, evt.target.value)},
                                        type:"password"
                                    }
                                ]
                            }

                            button={
                                {
                                    context:btnContext.login,
                                    evt:(evt) => {
                                        evt.preventDefault();
                                        this.props.action_clickLoginBtn(this.props.formDatas.loginId, this.props.formDatas.loginPassword)
                                    }
                                }
                            }
                        />
                    </div>
                    <div>
                        <SubmitForm
                            inputTags={[{id:inputIds.signupId, placeholder:placeholders.id, evt:(evt) => {this.props.action_changeInput(evt.target.id,evt.target.value)}},
                                {id:inputIds.signupPassword, placeholder:placeholders.password, evt:(evt) => {this.props.action_changeInput(evt.target.id,evt.target.value)},type:"password"},
                                {id:inputIds.signupConfirm, placeholder:placeholders.confirm, evt:(evt) => {this.props.action_changeInput(evt.target.id,evt.target.value)},type:"password"},
                                {id:inputIds.signupEmail, placeholder:placeholders.email, evt:(evt) => {this.props.action_changeInput(evt.target.id,evt.target.value)}}]}
                            button={{context:"SIGN-UP",evt:(evt) => {
                                evt.preventDefault();
                                this.props.action_clickSignupBtn(this.props.formDatas.signupId,this.props.formDatas.signupPassword,this.props.formDatas.signupConfirm,this.props.formDatas.signupEmail);
                            }}}
                        />
                    </div>
                </Slides>
                <div className="error-msg">
                    {this.props.message}
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        message : state.message,
        formDatas : state.formDatas
    };
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        action_clickLoginBtn,
        action_changeInput,
        action_clickSignupBtn
    },dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(LoginSignUpPage);








//seperate file / for logo animation
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

