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


class LoginForm extends Component{
    constructor(props){
        super(props);
        this.state={
            id:null,
            password:null
        };

        this.onInputChange=this.onInputChange.bind(this);
        this.onLoginButton = this.onLoginButton.bind(this);
    }

    onInputChange(evt){
        let value = evt.target.value;

        let inputId = evt.target.id;

        if(inputId === "id"){
            this.setState({id:value})
        }else if(inputId === "password"){
            this.setState({password:value})
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
    //component를 아래와 같이 짜면 콤포넌트를 사용할때 마다 비디오가 딸려옴
    // video src의 경로가 build 파일 내에 있는 index.html을 기준으로 돌아가고 있음
    render(){
        return(
            <div className="login-form-container">
                <video className="video" autoPlay="true" loop>
                    <source src="./skateboard.mp4" type="video/mp4" />
                </video>
                <form className="login-form">
                    <p className="consistency">CONSISTENCY</p>
                    <input
                        id="id"
                        className="input"
                        type="text"
                        placeholder="type your ID"
                        onChange={this.onInputChange}
                    />
                    <input
                        id="password"
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
                    </button>

                    <button
                        type="submit"
                        className="button"
                        onClick={this.onLoginButton}
                    >
                        LOGIN
                    </button>
                    <div>
                        {this.state.id}
                        {this.state.password}
                    </div>
                </form>
            </div>
        )
    }
}


function mapDispatchToProps(dispatch){
    return bindActionCreators({submitLogin:submitLogin},dispatch);
}

export default connect(null,mapDispatchToProps)(LoginForm);

