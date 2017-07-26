/**
 * Created by chanwoopark on 2017. 6. 23..
 */
import React,{ PropTypes } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators,dispatch} from 'redux';
import {ArrowLeft,ArrowRight,Dots, Slides } from 'react-infinite-slide';
import { setLogoAnimation } from 'style/setLogoAnimation';

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

    componentDidMount(){
        setLogoAnimation();
    }

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

//setting prop types
const propTypes = {
    message : PropTypes.string,
    formDatas : PropTypes.object
};
LoginSignUpPage.propTypes = propTypes;

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

