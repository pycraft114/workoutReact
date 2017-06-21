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


class LoginForm extends Component{
    constructor(props){
        super(props);
        this.state={
            id:null,
            password:null
        };

        this.onInputChange=this.onInputChange.bind(this);
    }

    onInputChange(evt){
        var value = evt.target.value;

        var inputId = evt.target.id;

        if(inputId === "id"){
            this.setState({id:value})
        }else if(inputId === "password"){
            this.setState({password:value})
        }

    }


    render(){
        return(
            <form className="login-form">
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

                <a className="link">Sign-up</a>

                <button
                    type="submit"
                    className="button"
                >
                    LOGIN
                </button>
                <div>
                    {this.state.id}
                    {this.state.password}
                </div>
            </form>
        )
    }
}


function mapDispatchToProps(dispatch){
    return bindActionCreators({submitLogin:submitLogin},dispatch);
}

export default connect(null,mapDispatchToProps)(LoginForm);

