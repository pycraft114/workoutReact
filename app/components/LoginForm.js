/**
 * Created by chanwoopark on 2017. 6. 21..
 */
/**
 * Created by chanwoopark on 2017. 6. 20..
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import {submitLogin} from '../actions/submitLogin';
import {typeInput} from '../actions/typeInput';
import axios from 'axios';


class LoginSignUpForm extends Component{
    constructor(props){
        super(props);
        this.state={
            loginId:null,
            loginPassword:null,
            signUpId:null,
            signUpPassword:null,
            signUpConfirm:null,
            signUpEmail:null,
        };

        this.onInputChange=this.onInputChange.bind(this);
        this.onLoginButton = this.onLoginButton.bind(this);
    }
    //다중 else if 문 hash map으로 수정해보슈
    onInputChange(evt){
        let value = evt.target.value;

        let inputId = evt.target.id;

        if(inputId === "loginId"){
            this.setState({loginId:value})
        }else if(inputId === "loginPassword"){
            this.setState({loginPassword:value})
        }else if(inputId === "signUpId"){
            this.setState({signUpId:value})
        }else if(inputId === "signUpPassword"){
            this.setState({signUpPassword:value})
        }else if(inputId === "signUpConfirm"){
            this.setState({signUpConfirm:value})
        }else if(inputId === "signUpEmail"){
            this.setState({signUpEmail:value})
        }

    }

    onLoginButton(evt){
        evt.preventDefault();

        let id = this.state.id;
        let password = this.state.password;
        let data = {id:id,password:password};
        var jsonData = JSON.stringify(data);

        axios.post('http://localhost:3000/',"AXIOS DATA")
            .then(function (res) {
                console.log("button clicked");
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    //tag가 하위에 있을수록 하위태그가 상위태그 upper에 나타나짐
    //component을 아래와 같이 짜면 video태그도 중복됨
    // video src의 경로가 build 파일 내에 있는 index.html을 기준으로 돌아가고 있음
    render(){
        return(
            <div className="login-form-container">
                <form className="login-form">
                    <h1 className="consistency">CONSISTENCY</h1>
                    /*input form 생성기*/
                    <input
                        id="loginId"
                        className="input"
                        type="text"
                        placeholder="type your ID"
                        onChange={this.onInputChange}
                    />
                    <input
                        id="loginPassword"
                        className="input"
                        type="text"
                        placeholder="type your password"
                        onChange={this.onInputChange}
                    />
                    /*button 생성기*/
                    <button
                        type="submit"
                        className="button"
                        onClick={this.onLoginButton}
                    >
                        LOGIN
                    </button>

                    <hr/>

                    /*map 과 reduce를 통해 동일한 태그들 생성할 것
                    * id,*/
                    {/*<input
                        id="signUpId"
                        className="input"
                        type="text"
                        placeholder="type your password"
                        onChange={this.onInputChange}
                    />

                    <input
                        id="signUpPassword"
                        className="input"
                        type="text"
                        placeholder="type your password"
                        onChange={this.onInputChange}
                    />

                    <input
                        id="signUpConfirm"
                        className="input"
                        type="text"
                        placeholder="type your password"
                        onChange={this.onInputChange}
                    />

                    <input
                        id="signUpEmail"
                        className="input"
                        type="text"
                        placeholder="type your password"
                        onChange={this.onInputChange}
                    />

                    <button
                        type="submit"
                        className="button"
                    >
                        Sign-up
                    </button>*/}
                    <div className="error">
                    </div>
                </form>
            </div>
        )
    }
}


function mapDispatchToProps(dispatch){
    return bindActionCreators({submitLogin:submitLogin},dispatch);
}

export default connect(null,mapDispatchToProps)(LoginSignUpForm);

